import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '90%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

function newSubject(name, plan) {
  return { name: name, plan: plan }
}

export default function PinnedSubheaderList() {
  const classes = useStyles();
  const materiasAprobadas = [
    newSubject("Lenguajes Formales y Automatas", 2019),
    newSubject("Matematica 1", 2015),
    newSubject("Matematica 2", 2015),
    newSubject("Analiss Matematico",2015),
    newSubject("Introduccion a la Programacion", 2010),
    newSubject("Base de Datos", 2010),
    newSubject("Organizacion de Computadoras", 2010),
    newSubject("Taller Trabajo Intelectual",2010),
    newSubject("Ingles 1", 2010)
  ]

  return (
    <List className={classes.root} subheader={<li />}>
      <li key='0' className={classes.listSection}>
        <ul className={classes.ul}>
          {materiasAprobadas.map(materia => (
            <ListItem key={`${materia.name}&${materia.plan}`}>
              <ListItemText primary={`${materia.name}----${materia.plan}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}