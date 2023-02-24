import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Slider,
  TextField,
  Grid,
  Tooltip,
  Card,
  CardContent,
  Select,
  Box,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import {
  selectPrompt,
  editPrompt,
  selectTemperature,
  editTemperature,
  selectMaxTokens,
  editMaxTokens,
  selectStopSymbols,
  addStopSymbol,
  deleteStopSymbol,
  editTopP,
  editFrequencyPenalty,
  editPresencePenalty,
  selectTopP,
  selectFrequencyPenalty,
  selectPresencePenalty,
  selectModelName,
  editModelName,
} from "../slices/editorSlice";
import { makeStyles } from "@material-ui/styles";
import ModeTabs from "./ModeTabs";
import WorkspaceForm from "./WorkspaceForm";


const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
});

export function PromptEditor() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const prompt = useSelector(selectPrompt);
  const temperature = useSelector(selectTemperature);
  const topP = useSelector(selectTopP);
  const frequencyPenalty = useSelector(selectFrequencyPenalty);
  const presencePenalty = useSelector(selectPresencePenalty);
  const maxTokens = useSelector(selectMaxTokens);
  const stopSymbols = useSelector(selectStopSymbols);

  const availableModelNames = [
    "text-davinci-003",
    "text-curie-001",
    "text-babbage-001",
    "text-ada-001",
  ];
  const modelName = useSelector(selectModelName);

  const handlePromptChange = (
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(editPrompt(event.currentTarget.value));
  };
  const handleTemperatureChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    dispatch(editTemperature(value as number));
  };
  const handleTopPChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    dispatch(editTopP(value as number));
  };
  const handleFrequencyPenaltyChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    dispatch(editFrequencyPenalty(value as number));
  };
  const handlePresencePenaltyChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    dispatch(editPresencePenalty(value as number));
  };
  const handleMaxTokensChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    dispatch(editMaxTokens(value as number));
  };
  const handleModelNameChange = (event: any) => {
    dispatch(editModelName(event.target.value));
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12} sm={3} md={3}>
  
          <Box mb={1}>
            <Card>
              <CardContent>
                <Typography gutterBottom>
                  <strong>Workspace</strong>
                </Typography>
                <WorkspaceForm />
              </CardContent>
            </Card>
          </Box>
          <Card>
            <CardContent>
              <Typography gutterBottom>
                <strong>Parámetros</strong>
              </Typography>
              <Tooltip
                title={
                  '"Controla la aleatoriedad: Reducir el valor de este parámetro resulta en completados menos aleatorios. A medida que la temperatura se acerca a cero, el modelo se volverá determinista y repetitivo. Se recomienda cambiar este valor o Top P, pero no ambos."'
                }
                placement="left"
              >
                <Typography id="temperature-slider" gutterBottom>
                  Creatividad(temperatura): <strong>{temperature}</strong>
                </Typography>
              </Tooltip>
              <Slider
                defaultValue={0.5}
                value={temperature}
                onChange={handleTemperatureChange}
                aria-labelledby="temperature-slider"
                valueLabelDisplay="auto"
                step={0.01}
                marks={[
                  {
                    value: 0,
                    label: "0",
                  },
                  {
                    value: 1,
                    label: "1",
                  },
                ]}
                min={0}
                max={1}
              />
              <Tooltip
                title={
                  '"Los tokens se utilizan para representar el texto de entrada para el modelo y también para generar la salida del modelo"'
                }
                placement="left"
              >
              <Typography id="max-tokens-slider" gutterBottom>
              Longitud de la respuesta(Tokens): <strong>{maxTokens}</strong>
              </Typography>
              </Tooltip>
              <Slider
                defaultValue={10}
                aria-labelledby="max-tokens-slider"
                valueLabelDisplay="auto"
                value={maxTokens}
                onChange={handleMaxTokensChange}
                step={1}
                marks={[
                  {
                    value: 1,
                    label: "1",
                  },
                  {
                    value: 512,
                    label: "512",
                  },
                ]}
                min={1}
                max={512}
              />

              <Tooltip
                title="En qué símbolos debería detener la generación de texto GPT-3. Ingresa \n para hacer un salto de línea."
                placement="left"
              >
                <Typography gutterBottom>Secuencias de detención:</Typography>
              </Tooltip>
              <ChipInput
                value={stopSymbols}
                onAdd={(chip) => dispatch(addStopSymbol(chip))}
                onDelete={(deletedChip) =>
                  dispatch(deleteStopSymbol(deletedChip))
                }
                onBeforeAdd={() => stopSymbols.length !== 4}
                newChipKeys={["Tab"]}
                className={styles.fullWidth}
              />
            </CardContent>

            <CardContent>
              <Typography gutterBottom>
                <strong>Parámetros avanzados</strong>
              </Typography>
              <Tooltip
                title={
                  '"Controla la diversidad a través del muestreo de núcleo: 0.5 significa que se consideran la mitad de todas las opciones ponderadas por la probabilidad. Se recomienda cambiar este valor o la Temperatura pero no ambos."'
                }
                placement="left"
              >
                <Typography id="top-p-slider" gutterBottom>
                  Top P: <strong>{topP}</strong>
                </Typography>
              </Tooltip>
              <Slider
                defaultValue={0.5}
                value={topP}
                onChange={handleTopPChange}
                aria-labelledby="top-p-slider"
                valueLabelDisplay="auto"
                step={0.01}
                marks={[
                  {
                    value: 0,
                    label: "0",
                  },
                  {
                    value: 1,
                    label: "1",
                  },
                ]}
                min={0}
                max={1}
              />
              <Tooltip
                title={
                  '"Indica cuánto penalizar a los nuevos tokens en función de su frecuencia existente en el texto hasta el momento. Esto reduce la probabilidad de que el modelo repita exactamente la misma línea."'
                }
                placement="left"
              >
                <Typography id="frequency-penalty-slider" gutterBottom>
                Penalización de frecuencia.: <strong>{frequencyPenalty}</strong>
                </Typography>
              </Tooltip>
              <Slider
                defaultValue={0.5}
                value={frequencyPenalty}
                onChange={handleFrequencyPenaltyChange}
                aria-labelledby="frequency-penalty-slider"
                valueLabelDisplay="auto"
                step={0.01}
                marks={[
                  {
                    value: 0,
                    label: "0",
                  },
                  {
                    value: 1,
                    label: "1",
                  },
                ]}
                min={0}
                max={1}
              />
              <Tooltip
                title={
                  '"Indica cuánto penalizar a los nuevos tokens en función de si aparecen o no en el texto hasta el momento. Esto aumenta la probabilidad de que el modelo hable sobre nuevos temas."'
                }
                placement="left"
              >
                <Typography id="presence-penalty-slider" gutterBottom>
                Penalización de presencia: <strong>{presencePenalty}</strong>
                </Typography>
              </Tooltip>
              <Slider
                defaultValue={0.5}
                value={presencePenalty}
                onChange={handlePresencePenaltyChange}
                aria-labelledby="presence-penalty-slider"
                valueLabelDisplay="auto"
                step={0.01}
                marks={[
                  {
                    value: 0,
                    label: "0",
                  },
                  {
                    value: 1,
                    label: "1",
                  },
                ]}
                min={0}
                max={1}
              />
              <Tooltip
                title={
                 'Refiérase a las Instrucciones para ver una descripción de cada Modelo'
                }
                placement="left"
              >
              <Typography id="model-name-typography" gutterBottom>
                Modelo:
              </Typography>
              </Tooltip>
              <Select
                native
                id="model-name-select"
                name="modelName"
                value={modelName}
                onChange={handleModelNameChange}
                className={styles.fullWidth}
              >
                {availableModelNames.map((modelName, ind) => (
                  <option key={ind} value={modelName}>
                    {modelName}
                  </option>
                ))}
              </Select>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <TextField
            id="prompt-text"
            label="Prompt"
            multiline
            rows={9}
            rowsMax={100}
            fullWidth={true}
            onChange={handlePromptChange}
            value={prompt}
            variant="outlined"
          />
          <br />
          <br />
          <ModeTabs />
        </Grid>
      </Grid>
    </div>
  );
}
