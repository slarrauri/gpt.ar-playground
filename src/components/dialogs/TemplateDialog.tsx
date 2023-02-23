import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanExampleList,
  loadTemplate,
  selectTemplateDialogVisible,
  toggleTemplateDialog,
} from "../../slices/editorSlice";
import getTemplateGroups, { Template } from "../../libs/templatesLibrary";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  templateDialog: {
    minWidth: "50vw",
  },
  templateGroupHeader: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TemplateDialog() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const templateDialogOpen = useSelector(selectTemplateDialogVisible);
  const handleTemplateDialogClose = () => {
    dispatch(toggleTemplateDialog(false));
  };

  const templateGroups = getTemplateGroups();
  const handleLoadTemplate = (template: Template) => () => {
    dispatch(loadTemplate(template.actionPayload));
    dispatch(cleanExampleList());
    handleTemplateDialogClose();
  };

  return (
    <Dialog
      open={templateDialogOpen}
      onClose={handleTemplateDialogClose}
      aria-labelledby="template-dialog-title"
    >
      <DialogTitle id="template-dialog-title">Cargar Plantilla</DialogTitle>
      <DialogContent className={classes.templateDialog}>
        {templateGroups.map((templateGroup, ind) => (
          <div key={ind}>
            <List
              subheader={
                <ListSubheader className={classes.templateGroupHeader}>
                  {templateGroup.name}
                </ListSubheader>
              }
            >
              {templateGroup.templates.map((template) => (
                <ListItem
                  key={template.id}
                  button
                  onClick={handleLoadTemplate(template)}
                >
                  <ListItemText>{template.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleTemplateDialogClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
