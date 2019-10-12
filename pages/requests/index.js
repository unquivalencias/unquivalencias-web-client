import React from 'react'
import RequestList from '../../components/Requests/RequestList'
import SimpleBreadcrumbs from '../../components/breadcrumbs'

export default function Requests(){
    return(
    <>
    <SimpleBreadcrumbs steps={[]} currentstep={"Solicitudes Pendientes"}/>
    <RequestList/>
    </>)
}