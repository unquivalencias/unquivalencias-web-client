import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  titles: {
      marginRight: 20
  },
}));

export default function HistoryApproved() {
  const classes = useStyles();
  const estudiantes = [{n:"Facundo Khalil",u:"La Plata"},{n:"Carlos Alvarez",u:"La Plata"},{n:"Nicolas Flecha",u:"La Plata"},{n:"Nicolas Lobo",u:"La Plata"}]

  return (
    <div className={classes.root}>
    {estudiantes.map( estudiante => {
        return (
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
          <b>Nombre:</b> {estudiante.n} <b>Universidad:</b> {estudiante.u}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
                <li>Matematica 1</li>
                <li>Matematica 2</li>
                <li>Matematica 3</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )})}
      
    </div>
  );
}
