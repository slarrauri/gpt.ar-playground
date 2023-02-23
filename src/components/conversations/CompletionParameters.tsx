import React from "react";
import { ConversationCompletionParameters } from "../../slices/editorSlice";
import { Grid, TextField } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";

interface Props {
  parameters: ConversationCompletionParameters;
}

// engine: string;
//     maxTokens: number;
//     stop: string | Array<string>;
//     prompt: string;
//     temperature: number;
//     topP: number;
//     presencePenalty: number;
//     frequencyPenalty: number;

export default function CompletionParameters(props: Props) {
  let stopSymbols: Array<string>;
  if (props.parameters.stop === "") {
    stopSymbols = [];
  } else if (typeof props.parameters.stop === "string") {
    stopSymbols = [props.parameters.stop as string];
  } else {
    stopSymbols = props.parameters.stop as Array<string>;
  }
  return (
    <>
      <Grid container direction={"column"} spacing={1}>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <TextField
                disabled
                label={"Modelo"}
                value={props.parameters.engine}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                label={"Longitud de respuesta"}
                value={props.parameters.engine}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                label={"Temperatura"}
                value={props.parameters.temperature}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <TextField
                disabled
                label={"Top P"}
                value={props.parameters.topP}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                label={"Penalización de frecuencia"}
                value={props.parameters.presencePenalty}
              />
            </Grid>
            <Grid item>
              <TextField
                disabled
                label={"Penalización de presencia"}
                value={props.parameters.frequencyPenalty}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ChipInput
            disabled
            label={"Secuencias de detención"}
            value={stopSymbols.map((symbol) => {
              return symbol.split("\n").join("\\n");
            })}
          />
        </Grid>
      </Grid>
    </>
  );
}
