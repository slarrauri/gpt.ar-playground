import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExampleCollection from "./ExampleCollection";
import {
  cleanExampleList,
  selectExamplePreviousOutputsStatus,
  updateExamplePreviousOutputsStatus,
} from "../../slices/editorSlice";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import RunExamplesButton from "./RunExamplesButton";
import { useStyles } from "../ModeTabs";

// cleanExampleList

export default function ExamplesTab() {
  const dispatch = useDispatch();

  const showPreviousOutputs = useSelector(selectExamplePreviousOutputsStatus);
  const handlePreviousOutputsSwitchChange = (
    event: React.ChangeEvent<{}>,
    value: boolean
  ) => {
    dispatch(updateExamplePreviousOutputsStatus(value));
  };

  const styles = useStyles();
  useEffect(() => {
    dispatch(cleanExampleList());
  });

  return (
    <Box>
      <Box mb={1}>
        <Card className={styles.instructionCard}>
          <CardContent>
            <Typography variant="subtitle1">Multiple Examples</Typography>
            <Typography variant="body2">
              Esta es una herramienta para ejecutar rápidamente su prompt en múltiples ejemplos. Puede utilizarla para tareas de transformación y clasificación de texto. Utilice la clave "{"{example}"}" en el prompt y el editor la reemplazará por cada uno de los siguientes ejemplos. La herramienta es útil para comprender cómo el cambio de un prompt y parámetros afectará los resultados generados.
            </Typography>
            <Box mt={1}>
              <RunExamplesButton />
            </Box>
            <Box mt={1}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <FormControlLabel
                    control={
                      <Switch
                        value={showPreviousOutputs}
                        onChange={handlePreviousOutputsSwitchChange}
                        name="previous-outputs-switch"
                        color="primary"
                      />
                    }
                    label="Mostrar resultados anteriores"
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <ExampleCollection />
    </Box>
  );
}
