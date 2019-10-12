import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ApproveEquivalenceButton from '../MateriasList'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CrossMarkIcon from '@material-ui/icons/Cancel'
import Link from 'next/link'
import { TextField, DialogActions } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TablePagination from '@material-ui/core/TablePagination';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    checkmark: {
        color: 'green'
    },
    previouslyGiven: {
        color: 'blue'
    },
    failmark: {
        color: 'red'
    },
    actionButton: {
        margin: "1rem"
    }

}));

const subjectState = {
    neverGiven: 'Nunca otorgada',
    previouslyGiven: 'Previamente otorgada',
    given: 'Otorgada',
    rejected: 'Rechazada'
}


export default function SimpleTable({ subjects, setSubjects }) {

    const classes = useStyles();


    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Materia</TableCell>
                        <TableCell align='right'>Estado de solicitudes</TableCell>
                        <TableCell align='right'>Accion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subjects.map((row, index) => (
                        <TableRow hover key={row.subject}>
                            <TableCell>
                                {row.subject}
                            </TableCell>
                            <TableCell align='right'>{row.status}
                                {row.status === subjectState.neverGiven &&
                                    <CrossMarkIcon className={classes.failmark} />
                                }{row.status === subjectState.previouslyGiven &&
                                    <CheckCircleIcon className={classes.previouslyGiven} />}
                                {row.status === subjectState.rejected &&
                                    <CrossMarkIcon className={classes.failmark} />}
                                {row.status === subjectState.given &&
                                    <CheckCircleIcon className={classes.checkmark} />}
                            </TableCell>
                            <TableCell align='right'>
                                <ApproveEquivalenceButton disable={row.status == subjectState.given} onApprove={() => setSubjects(pRows => {
                                    const nRows = [...pRows];
                                    nRows[index] = { ...pRows[index], status: subjectState.given }
                                    return nRows;
                                })} />
                                <RejectButton disabled={row.status == subjectState.rejected} onReject={() => setSubjects(pRows => {
                                    const nRows = [...pRows];
                                    nRows[index] = { ...pRows[index], status: subjectState.rejected }
                                    return nRows;
                                })} />
                                <Link href="/equivalence/known">
                                    <Button
                                        className={classes.actionButton}
                                        color='primary'
                                        variant='outlined'
                                    >
                                        DETALLE
                                    </Button></Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={17}
                rowsPerPage={10}
                page={0}
            />
        </Paper>
    );
}

function RejectButton({ onReject, disabled }) {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const rejectRequest = useCallback(() => {
        onReject()
        setOpen(false)
    }, [onReject])

    const close = useCallback(() => {
        setOpen(false)
    })

    const handleClickOpen = useCallback(() => {
        setOpen(true)
    })

    return (
        <>
            <Button className={classes.actionButton} variant="outlined" color="primary" onClick={handleClickOpen} disabled={disabled}>
                RECHAZAR
      </Button>
            <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Observaciones</DialogTitle>
                <DialogContent>
                    <TextField />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={rejectRequest}>Rechazar</Button>
                    <Button variant="outlined" color="primary" onClick={close}>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}