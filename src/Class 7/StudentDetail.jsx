import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetail = () => {
    const {id}=useParams();
  return (
    <div>
      <h1>Student Details of Roll No :{id}</h1>
    </div>
  )
}

export default StudentDetail
