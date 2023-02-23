import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteCurrentWorkspace } from "../../slices/editorSlice";
import { ActionCreators } from "redux-undo";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DeletePopup(props: Props) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteCurrentWorkspace());
    dispatch(ActionCreators.clearHistory());
    props.onClose();
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        Esta acción no se puede deshacer. Esto eliminará permanentemente el borrador con el prompt, parámetros, ejemplos y generaciones creativas.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary" autoFocus>
          Cancelar
        </Button>
        <Button onClick={onDelete} color="primary">
          Borrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
