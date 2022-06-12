import React, { useEffect, useState } from 'react'
import { ARROW, DELETE, EDIT, EYE } from '../../assets/icon_path'
import { SEARCH, MESSAGE } from '../../assets/icon_path'
import { AVATAR, AVATAR1 } from '../../assets/image_path'
import { StyleStudentList } from './StyleStudentList'
import { StyleNavbar } from './StyleNavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import _ from "lodash"
const StudentList = () => {

   const navigate = useNavigate();

   const [data, setData] = useState([])
   const [search, setSearch] = useState('')
   // const [page, setPage] = useState(1)
   useEffect(() => {
      fetchDdata()
   }, [])
   const fetchDdata = () => {
      axios.post('https://online-excel-heroku.herokuapp.com/student/list')
         .then(res => {
            const data = res.data.data.data
            // newArr=_.chunk(Math.ceil(newArr, 5))
            setData(data || [])

         }).catch(error => {
            console.log(error)
         })
   }
   const DeleteBtn = (id) => {
      let confirm = window.confirm('Do you want a delete')
      if (confirm) {
         axios.delete(`https://online-excel-heroku.herokuapp.com/student/delete/${id}`)
            .then(res => {
               const { success } = res.data.data
               if (success) {
                  toast.success("successfully delete")
                  fetchDdata()
               } else {
                  toast.error('error')
               }
            }).catch(err => {
               console.log(err)
            })
      }
   }

   return (
      <StyleStudentList>
         <StyleNavbar>
            <div className="navbar">
               <div className="form-search">
                  <img src={SEARCH} alt="" />
                  <input onChange={(e) => setSearch(e.target.value)} type="seacrh" placeholder="Search..." />
               </div>
               <div className="navbar-avatar">
                  <div className="col-1">
                     <div>
                        <p>9</p>
                     </div>
                     <img src={MESSAGE} alt="" />
                  </div>
                  <div className="col-2" style={{ cursor: "pointer" }}>
                     <img src={AVATAR} alt="" />
                  </div>
               </div>
            </div>
         </StyleNavbar>
         <div className="student">
            <div className="title">
               <p>Students</p>
               <button onClick={() => navigate('/students/create')} className='add'>Add</button>
            </div>
            <div className="card">
               <div className="card-header">
                  <div className="name">F.I.O</div>
                  <div className="univer">Univercity</div>
                  <div className="faqulty">Faqulty</div>
                  <div className="spec">AcademicLevel</div>
                  <div className="spec">AcademicType</div>
               </div>
               {
                  data.length == 0 ? <div style={{ textAlign: "center", padding: "10px", color: "red" }}>Studentlar mavjud emas</div> : ''
               }

               {
                  data?.filter(item => {
                     return item.fullName.toLowerCase().includes(search.toLowerCase())

                  })
                     .map((item, index) => {
                        return (

                           <div className="card-body" key={index} >
                              <div className="name">
                                 <div className="img">
                                    <img src={AVATAR1} alt="" />
                                 </div>
                                 <p>{item.fullName}</p>
                              </div>
                              <div className="univer">{item.universityName} </div>
                              <div className="faqulty">{item.faculty} </div>
                              <div className="spec">{item.academicLevel} </div>
                              <div className="spec">{item.academicType} </div>
                              <div className="btns">
                                 <div className="openBtn" onClick={() => navigate(`/students/${item.id}`)} >
                                    <img src={EYE} alt="" />
                                 </div>
                                 <div className="editBtn" onClick={() => navigate(`/students/update/${item.id} `)} >
                                    <img src={EDIT} alt="" />
                                 </div>
                                 <div className="deleteBtn" onClick={() => DeleteBtn(item.id)} >
                                    <img src={DELETE} alt="" />
                                 </div>
                              </div>
                           </div >
                        )
                     })
               }
               {/* <div className="pagination">
                  <div className="pages">
                     <div className="leftBtn"  >
                        <img src={ARROW} alt="" />
                     </div>
                     {
                        data.map((item) => {
                           <div >{item} </div>
                        })
                     }
                     <div className="rightBtn"  >
                        <img src={ARROW} alt="" />
                     </div>
                  </div >
               </div > */}
               <div className="addBemor"  >
                  <img src="" alt="" />
               </div>
            </div >
         </div >
      </StyleStudentList >
   )
}

export default StudentList