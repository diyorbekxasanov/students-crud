import React from 'react'
import styled from 'styled-components'
import StudentList from '../../components/StudentList'
const Students = () => {

   const Students = styled.div`
      max-width: 1440px;
      margin: 0 auto;
      padding: 30px;
   `
   return (
      <Students>
         <StudentList />
      </Students>
   )
}

export default Students