import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React from "react";
import {
  editApiKey,
  selectApiKey,
  selectApiKeyDialogVisible,
  toggleApiKeyDialog,
} from "../../slices/editorSlice";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  apiKeyInput: {
    minWidth: "400px",
  },
});

export default function ApiKeyDialog() {
  const dispatch = useDispatch();

  const apiKey = useSelector(selectApiKey);
  const apiKeyDialogOpen = useSelector(selectApiKeyDialogVisible);
  const handleApiKeyDialogClose = () => {
    dispatch(toggleApiKeyDialog(false));
  };

  const classes = useStyles();

  return (
    <Dialog
      open={apiKeyDialogOpen}
      onClose={handleApiKeyDialogClose}
      aria-labelledby="api-key-form-dialog-title"
    >
      <DialogTitle id="api-key-form-dialog-title">API Key</DialogTitle>
      <DialogContent>
        <DialogContentText>
        Por favor proporcione su clave de API de OpenAI. Solo almacenamos esta clave localmente y nunca la enviamos a nuestros servidores.
        </DialogContentText>
        <TextField
          className={classes.apiKeyInput}
          autoFocus
          margin="dense"
          id="name"
          label="API Key"
          type="text"
          value={apiKey}
          fullWidth
          onChange={(
            event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            dispatch(editApiKey(event.currentTarget.value));
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleApiKeyDialogClose} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
