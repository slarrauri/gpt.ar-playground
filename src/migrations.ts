import uniqid from "uniqid";

export const migrations = {
  0: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        maxCreativeCompletions: 10,
        creativeCompletions: [],
      },
    };
  },
  1: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        showPromptForCreativeCompletions: true,
      },
    };
  },
  2: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        tabIndex: 0,
      },
    };
  },
  3: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        stopSymbols: [],
      },
    };
  },
  4: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        topP: 1,
        frequencyPenalty: 0,
        presencePenalty: 0,
      },
    };
  },
  5: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        creativeCompletions: state.creativeCompletions.map(
          (completion: any) => ({
            ...completion,
            topP: 1,
            frequencyPenalty: 0,
            presencePenalty: 0,
          })
        ),
      },
    };
  },
  6: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        showExamplePreviousOutputs: false,
      },
    };
  },
  7: (state: any) => {
    return {
      ...state,
      editor: {
        past: [],
        future: [],
        present: { ...state.editor },
      },
    };
  },
  8: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        present: {
          ...state.editor.present,
          modelName: "davinci",
        },
      },
    };
  },
  9: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        present: {
          ...state.editor.present,
          conversations: [],
        },
      },
    };
  },

  10: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        present: {
          ...state.editor.present,
          loadingVariations: state.editor.present.loadingCreativeCompletions,
          variations: state.editor.present.creativeCompletions,
          maxVariations: state.editor.present.maxCreativeCompletions,
          showPromptForVariations:
            state.editor.present.showPromptForCreativeCompletions,
        },
      },
    };
  },

  12: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        present: {
          ...state.editor.present,
          currentWorkspaceId: "first_workspace",
          workspaces: [
            {
              id: "first_workspace",
              prompt:
                "Entrada: Anna y Mike van a esquiar.\n" +
                "Salida: Anna y Mike van a esquiar.\n" +
                "Entrada: Anna y Pat est??n casados; han estado juntos por 20 a??os.\n" +
                "Salida: Anna y Pat est??n casados; han estado juntos por 20 a??os.\n" +
                "Entrada: Camin?? hasta la tienda y compr?? leche.\n" +
                "Salida: Camin?? hasta la tienda y compr?? leche.\n" +
                "Entrada: {ejemplo}\n" +
                "Salida:",
              modelName: "davinci",
              temperature: 0.5,
              topP: 1,
              frequencyPenalty: 0,
              presencePenalty: 0,
              stopSymbols: ["\\n"],
              maxTokens: 30,
              tabIndex: 0,

              showExamplePreviousOutputs: false,
              examples: [
                {
                  id: uniqid("input_"),
                  text: "comimos el pescado y luego hicimos el postre.",
                  output: "Todos comimos el pescado y luego hicimos el postre.",
                  isLoading: false,
                },
                {
                  id: uniqid("input_"),
                  text: "Me esquiar todos los d??as",
                  output: "Me gusta esquiar todos los d??as.",
                  isLoading: false,
                },
              ],

              loadingVariations: false,
              variations: [],
              maxVariations: 10,
              showPromptForVariations: true,

              conversations: [],
            },
          ],
        },
      },
    };
  },

  13: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        present: {
          ...state.editor.present,
          workspaces: state.editor.present.workspaces.map((workspace: any) => ({
            ...workspace,
            name: "Mamotreto #1",
          })),
        },
      },
    };
  },

  14: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        present: {
          ...state.editor.present,
          workspaces: state.editor.present.workspaces.map((workspace: any) => ({
            ...workspace,
            basic: {
              output: "",
              loading: false,
            },
          })),
        },
      },
    };
  },

  15: (state: any) => {
    return {
      ...state,
      editor: {
        ...state.editor,
        present: {
          ...state.editor.present,
          editableWorkspaceName: state.editor.present.workspaces.find(
            (w: any) => w.id === state.editor.present.currentWorkspaceId
          ).name,
        },
      },
    };
  },
};

export const currentVersion = 15;
