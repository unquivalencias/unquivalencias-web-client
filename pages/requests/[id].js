import React, { Fragment } from 'react'
import StudentData from '../../components/RequestDetail/StudentData'
import SubjectList from '../../components/RequestDetail/SubjectList'
import SimpleBreadcrumbs from '../../components/breadcrumbs'
export default function RequestDetail() {
    const steps = [{name:"Solicitudes Pendientes"}]
    const currentstep = "Detalle Solicitud"
    return (
        <>
            <SimpleBreadcrumbs steps={steps} currentstep={currentstep}/>
            <StudentData />
            <SubjectList />
        </>)
}