# GPT.ar-playground

Playground para Gpt-3 de OpenAi en Español

## Objetivos

1. Ayudar a los usuarios nuevos de GPT-3 a descubrir las capacidades, fortalezas y debilidades de la tecnología.  

2. Ayudar a los desarrolladores a experimentar con el diseño de entradas de texto (prompt engineering) optimizando el producto para casos de uso concretos, como la escritura creativa, la clasificación, los chat bots y otros.  

### Instalación

```shell script
yarn install 
yarn start
```

Ten en cuenta que cada usuario de la aplicación debe proporcionar su propia clave API desde [OpenAI](https://beta.openai.com/).
"Tener su propia clave" es un concepto importante que se aplica para evitar el uso indebido de la API."

## Funcionalidades

### Generales

**Workspaces**: Espacios de trabajo para cambiar rápidamente entre varias entradas de texto y experimentar con ellas. Guarda el estado en el almacenamiento local. Permite descargar/subir entradas de texto con parámetros y ejemplos como archivo.
**Código**: Generadores de código para Python, Node.js, Javascript y shell.  
**Deshacer/Rehacer**: Aplica en los parámetros y entradas de texto.  
**Shortcuts**: Ver debajo para mas info.  
**Plantillas**: Crea y guarda tus plantillas en formato Json.  

```bash
Shortcuts
===

Exportar Archivo: Ctrl+S, Cmd+S
Ejecutar: Ctrl+Enter, Cmd+Enter

Cambiar entre los diferentes modos: Ctrl+1-4 
(1 - simple, 2 - examples, 3 - variations, 4 - conversations)
```

### Por caso de uso

**Ejemplos**: ejecutar la misma entrada de texto en múltiples ejemplos de datos. Diseñado para tareas de clasificación y transformación.  

**Variaciones**: generar múltiples resultados para una misma entrada de texto y almacenarlos en una lista, comparar las variaciones por parámetros y entradas de texto iniciales. Diseñado para tareas de escritura creativa.  

**Conversaciones**: interfaz similar a una conversación para experimentar con bots conversacionales. También permite mantener múltiples conversaciones al mismo tiempo.  

## TODOS

- Agregar mas Ejemplos

Original Repo: [prompts-ai](https://github.com/sevazhidkov/prompts-ai)
