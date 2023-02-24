import {
  AppBar,
  Container,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectApiKey, toggleApiKeyDialog } from "../slices/editorSlice";
import { ActionCreators } from "redux-undo";

const useStyles = makeStyles((theme: Theme) => ({
  buttonGroup: {
    marginRight: theme.spacing(2),
  },
  apiKeyInput: {
    minWidth: "400px",
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const apiKey = useSelector(selectApiKey);
  const apiKeyPresent = !!apiKey;
  const handleApiKeyDialogOpen = () => {
    dispatch(toggleApiKeyDialog(true));
  };
  const handleUndoClick = () => {
    dispatch(ActionCreators.undo());
  };
  const handleRedoClick = () => {
    dispatch(ActionCreators.redo());
  };

  return (
    <AppBar position="static">
      <Container maxWidth={"lg"}>
        <Toolbar variant="regular" disableGutters={true}>
          <div className={classes.buttonGroup}>
            <Typography variant="h6" color="inherit">
              GPT.ar Playground
            </Typography>
          </div>
          <div className={classes.buttonGroup}>
            <IconButton onClick={handleApiKeyDialogOpen}>
              <VpnKeyIcon color={apiKeyPresent ? "action" : "error"} />
            </IconButton>
          </div>
          <div className={classes.buttonGroup}>
            <IconButton onClick={handleUndoClick}>
              <UndoIcon />
            </IconButton>
            <IconButton onClick={handleRedoClick}>
              <RedoIcon />
            </IconButton>
          </div>
          <div className={classes.buttonGroup}>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              <Typography variant="h6" color="inherit">
                Ver Instrucciones
              </Typography>
            </a>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
