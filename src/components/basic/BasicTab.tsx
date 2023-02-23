import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBasicOutputAsync,
  selectBasicLoading,
  selectBasicOutput,
} from "../../slices/editorSlice";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../ModeTabs";

export default function BasicTab() {
  const dispatch = useDispatch();

  const styles = useStyles();

  const fetchOutputs = () => {
    dispatch(fetchBasicOutputAsync());
  };

  const basicOutput = useSelector(selectBasicOutput);
  const basicLoading = useSelector(selectBasicLoading);

  return (
    <Box>
      <Box mb={1}>
        <Card className={styles.instructionCard}>
          <CardContent>
            <Typography variant="subtitle1">Simple</Typography>
            <Typography variant="body2">
            Este es una herramienta básica para explorar la idea general de GPT-3. GPT-3 tratará de continuar el texto que escribió en el campo de entrada y mostrará el resultado en el campo de abajo.
            </Typography>
            <Box mt={1}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={fetchOutputs}
                disabled={basicLoading}
              >
                {basicLoading ? "Procesando..." : "Ejecutar"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box mb={1}>
        <Card className={styles.instructionCard}>
          <CardContent>
            <TextField
              aria-readonly={"true"}
              label="Salida"
              variant="outlined"
              fullWidth={true}
              multiline
              rows={9}
              rowsMax={100}
              value={basicOutput}
              InputProps={{
                readOnly: true,
              }}
              placeholder={"El texto resultante aparecerá aquí."}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
