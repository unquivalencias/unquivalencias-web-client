import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup({disable, onApprove}) {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  },[setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  },[setOpen]);

  const approve = useCallback(() => {
    onApprove();
    handleClose();
  }, [onApprove, handleClose])

  const classes = useStyles();

  const assignaments = ["Matematica 1","Matematica 2","Introduccion a la Programacion","Organizacion de Computadoras"]

  return (
      <>
    <Button variant="outlined" color="primary" onClick={handleClickOpen} disabled={disable}>
    APROBAR
  </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Lenguajes Formales y Automatas</DialogTitle>
    <DialogContent>
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Asigna las materias equivalentes</FormLabel>
        <FormGroup>
          
        {assignaments.map(materia => {
            return (
                <FormControlLabel
                    control={<Checkbox value={materia} />}
                    label={materia}
                />)}
        )}
              
        </FormGroup>
        
        <Button fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
                onClick={approve}>
                
              Otorgar equivalencia
              </Button>
      </FormControl>

    </div>
    </DialogContent>
    </Dialog>
    </>
  );
}