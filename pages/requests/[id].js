import React, { Fragment } from 'react'
import StudentData from '../../components/RequestDetail/StudentData'
import SubjectList from '../../components/RequestDetail/SubjectList'
import Navbar from '../../components/Navbar'

export default function RequestDetail() {
    return (
        <>
            <Navbar/>
            <StudentData />
            <SubjectList />
        </>)
}