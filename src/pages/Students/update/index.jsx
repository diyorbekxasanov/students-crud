import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Field } from "react-final-form";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CreateStyle } from '../create/createStyle';
const Create = () => {

  const [data, setData] = useState({})
  let { id } = useParams()
  useEffect(() => {
    axios.get(`https://online-excel-heroku.herokuapp.com/student/get/${id}`)
      .then(res => {
        console.log(res.data.data.data)
        setData(res.data.data.data || {})
      }).catch(err => {
        console.log(err)
      })
  }, [])
  const SaveBtn = (values) => {
    console.log(values)
    axios.post(`https://online-excel-heroku.herokuapp.com/student/update`, values)
      
      .then(res => {
        console.log(res.data)
        const { success } = res.data.data
        console.log(success)
        // if (success) {
        //   toast.success("successfully")
        // } else {
        //   toast.error("error")
        // }
      })
  }
  return (
    <CreateStyle>
      <h2>Update student</h2>
      <Form
        onSubmit={SaveBtn}
        validate={(values) => {
          const errors = {};
          if (!values.fullname) {
            errors.fullname = "fullname is undefined";
          }
          else if (values.fullname.length < 3) {
            errors.fullname = "Must be min 3"
          }
          if (!values.universityName) {
            errors.universityName = "universityName is undefined";
          }
          if (!values.entranceYear) {
            errors.entranceYear = "entranceYear is undefined";
          }
          if (!values.graduationYear) {
            errors.graduationYear = "graduationYear is undefined";
          }
          if (!values.faculty) {
            errors.faculty = "faculty is undefined";
          }
          if (!values.speciality) {
            errors.speciality = "speciality is undefined";
          }
          if (!values.studyType) {
            errors.studyType = "studyType is undefined";
          }
          if (!values.academicType) {
            errors.academicType = "academicType is undefined";
          }
          if (!values.diplomaSerial) {
            errors.diplomaSerial = "diplomaSerial is undefined";
          }
          if (!values.diplomaRegistrationNumber) {
            errors.diplomaRegistrationNumber = "diplomaRegistrationNumber is undefined";
          }
          if (!values.givenDate) {
            errors.givenDate = "givenDate is undefined";
          }
          if (!values.academicLevel) {
            errors.academicLevel = "academicLevel is undefined";
          }
          if (!values.appendixNumber) {
            errors.appendixNumber = "appendixNumber is undefined";
          }
          return errors;
        }}
        render={({
          submitError,
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field name="fullname" defaultValue={data.fullName}>
              {({ input, meta }) => (
                <div>
                  <label>FullName</label>
                  <input  {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="FullName" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="universityName" defaultValue={data.universityName}>
              {({ input, meta }) => (
                <div>
                  <label>UniversityName</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="UniversityName" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="entranceYear" defaultValue={data.entranceYear}>
              {({ input, meta }) => (
                <div>
                  <label>EntranceYear</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="EntranceYear" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="graduationYear" defaultValue={data.graduationYear}>
              {({ input, meta }) => (
                <div>
                  <label>GraduationYear</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="GraduationYear" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="faculty" defaultValue={data.faculty}>
              {({ input, meta }) => (
                <div>
                  <label>Faqulty</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="Faqulty" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="speciality" defaultValue={data.speciality}>
              {({ input, meta }) => (
                <div>
                  <label>Speciality</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="Speciality" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="studyType" defaultValue={data.studyType}>
              {({ input, meta }) => (
                <div>
                  <label>StudyType</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="StudyType" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="academicType" defaultValue={data.academicType}>
              {({ input, meta }) => (
                <div>
                  <label>AcademicType</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="AcademicType" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="diplomaSerial" defaultValue={data.diplomaSerial}>
              {({ input, meta }) => (
                <div>
                  <label>DiplomaSerial</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="DiplomaSerial" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="diplomaRegistrationNumber" defaultValue={data.diplomaRegistrationNumber}>
              {({ input, meta }) => (
                <div>
                  <label>DiplomaRegistrationNumber</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="DiplomaRegistrationNumber" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="givenDate" defaultValue={data.givenDate}>
              {({ input, meta }) => (
                <div>
                  <label>GivenDate</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="GivenDate" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="academicLevel" defaultValue={data.academicLevel}>
              {({ input, meta }) => (
                <div>
                  <label>AcademicLevel</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="AcademicLevel" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="appendixNumber" defaultValue={data.appendixNumber}>
              {({ input, meta }) => (
                <div>
                  <label>AppendixNumber</label>
                  <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="AppendixNumber" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            {/* {submitError && <div className="error">{submitError}</div>} */}
            <div className="buttons" >
              <button type="submit" disabled={submitting}>
                Save
              </button>
            </div>
          </form>
        )}
      />
    </CreateStyle>
  )
}

export default Create