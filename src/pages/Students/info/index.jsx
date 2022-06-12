import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DELETE, EDIT } from '../../../assets/icon_path'
import { STUDENT } from '../../../assets/image_path'
import { InfoStyle } from './infoStyle'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Info = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({})
  let { id } = useParams()
  useEffect(() => {
    axios(`https://online-excel-heroku.herokuapp.com/student/get/${id}`)
      .then(res => {
        setData(res.data.data.data || {})
        console.log(res.data.data.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  const DeleteBtn = (id) => {
    let confirm = window.confirm('Do you want a delete')
    if (confirm) {
      axios.delete(`https://online-excel-heroku.herokuapp.com/student/delete/${id}`)
        .then(res => {
          const { success } = res.data.data
          if (success) {
            toast.success("successfully delete")
            navigate('/students')
          } else {
            toast.error('error')
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }
  return (
    <InfoStyle>
      <div className="card-shifokor">
        <div className="card-title">
          <div className="img-title">
            <img src={STUDENT} alt="" />
          </div>
          <div className="content">
            <div className="title">
              <div className="name">{data.fullName} </div>
              <div className="btns">
                <div className="editBtn" >
                  <img onClick={()=>navigate(`/students/update/${data.id}`)} src={EDIT} alt="" />
                </div>
                <div className="deleteBtn" onClick={()=>DeleteBtn(data.id)}>
                  <img src={DELETE} alt="" />
                </div>
              </div>
            </div>
            <div className="content-info">
              <div className="sana d">
                <p>University Name</p>
                <strong>{data.universityName}</strong>
              </div>
              <div className="bolim d">
                <p>Entrance Year</p>
                <strong>{data.entranceYear} </strong>
              </div>
              <div className="grafik d">
                <p>Graduation Year</p>
                <strong>{data.graduationYear}</strong>
              </div>
              <div className="staj d">
                <p>Faculty</p>
                <strong>{data.faculty} </strong>
              </div>
              <div className="staj d">
                <p>Speciality</p>
                <strong>{data.speciality} </strong>
              </div>
            </div>
          </div>
        </div >
        <div className="footer-title">
          <div className="card-footer">
            <div className="tug d">
              <p>Study Type</p>
              <strong>{data.studyType}</strong>
            </div>
            <div className="oilaviy d">
              <p>Academic Type</p>
              <strong>{data.academicType} </strong>
            </div>
            <div className="tel d">
              <p>Diploma Serial</p>
              <strong>{data.diplomaSerial} </strong>
            </div>
            <div className="hudud d">
              <p>DiplomaRegistration Number</p>
              <strong>{data.diplomaRegistrationNumber} </strong>
            </div>
            <div className="malumoti d">
              <p>Given Date</p>
              <strong>{data.givenDate}</strong>
            </div>
            <div className="tel2 d">
              <p>Academic Level</p>
              <strong>{data.academicLevel} </strong>
            </div>
            <div className="tel2 d">
              <p>Appendix Number</p>
              <strong>{data.appendixNumber} </strong>
            </div>
          </div>
        </div>
      </div >
    </InfoStyle>
  )
}

export default Info