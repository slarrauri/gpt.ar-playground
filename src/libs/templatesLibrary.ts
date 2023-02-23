import { uniqueId } from "lodash";
import { LoadTemplateActionPayload, TabIndex } from "../slices/editorSlice";

export interface Template {
  id: string;
  name: string;
  actionPayload: LoadTemplateActionPayload;
}

interface TemplateGroup {
  name: string;
  templates: Array<Template>;
}

const templateGroups = [
  {
    name: "Simple",
    templates: [
      {
        id: uniqueId("template_"),
        name: "Top 10 Mujeres Épicas",
        actionPayload: {
          prompt:
            "Las 10 mujeres más importantes en la historia humana y sus mayores logros:\n" +
            "\n" +
            "1.",
          stopSymbols: ["11."],
          tabIndex: TabIndex.basic,
          examples: [],
        },
      },
      {
        id: uniqueId("template_"),
        name: "Generar un Email",
        actionPayload: {
          prompt:
          "El siguiente correo electrónico explica dos cosas:\n" +
          "1) El escritor, Andy, va a faltar al trabajo.\n" +
          "2) La destinataria, Betty, es la jefa de Andy y puede enviar un correo electrónico si algo necesita ser realizado.\n"+
            "\n" +
            "From: ",
          stopSymbols: [],
          tabIndex: TabIndex.basic,
          examples: [],
        },
      },
      {
        id: uniqueId("template_"),
        name: "Matemática Simple",
        actionPayload: {
          prompt: "2 * 4 =",
          stopSymbols: ["\\n"],
          tabIndex: TabIndex.basic,
          examples: [],
        },
      },
    ],
  },
  {
    name: "Multimple Ejemplos",
    templates: [
      {
        id: uniqueId("template_"),
        name: "Generación de Titulares",
        actionPayload: {
          prompt:
            "Topic: Britain, coronavirus, playas\n" +
            "Headline: Videos muestran playas abarrotadas en Gran Bretaña debido al coronavirus\n" +
            "\n" +
            "Topic: Apple, Big Sur, software\n" +
            "Headline: Apple promete una instalación más rápida de actualizaciones de software con macOS Big Sur.\n" +
            "\n" +
            "Topic: Ártico, cambio climático, satélite\n" +
            "Headline: Un satélite permite a los científicos ver el derretimiento de la Antártida como nunca antes.\n" +
            "\n" +
            "Topic: {example}\n" +
            "Headline:",
          examples: [{ text: "Chicago, restaurantes, verano", output: "" }],
          tabIndex: TabIndex.multipleExamples,
          stopSymbols: ["\\n"],
        },
      },
    ],
  },
  {
    name: "Variaciones",
    templates: [
      {
        id: uniqueId("template_"),
        name: "Componentes React",
        actionPayload: {
          prompt:
            "import React from 'react';\n" +
            "\n" +
            "const ThreeButtonComponent=()=>(",
          examples: [],
          tabIndex: TabIndex.variations,
        },
      },
      {
        id: uniqueId("template_"),
        name: "Generador de analogías",
        actionPayload: {
          prompt: "Las redes neuronales son como",
          stopSymbols: ["."],
          examples: [],
          tabIndex: TabIndex.variations,
        },
      },
    ],
  },
  {
    name: "Conversaciones",
    templates: [
      {
        id: uniqueId("template_"),
        name: "Asistente IA",
        actionPayload: {
          prompt:
            "Lo siguiente es una conversación con un asistente de inteligencia artificial. El asistente es servicial, creativo, astuto y muy amigable.\n",
          stopSymbols: ["\\n"],
          examples: [],
          tabIndex: TabIndex.conversations,
          startSequence: "\nAI:",
          restartSequence: "\nHumano: ",
        },
      },
    ],
  },
];

export default function getTemplateGroups(): Array<TemplateGroup> {
  return templateGroups;
}

export function getFlattenedTemplates() {
  return ([] as Template[]).concat(
    ...getTemplateGroups().map((templateGroup) => templateGroup.templates)
  );
}
