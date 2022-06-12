import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import StyleForm from "./StyleForm";
import { EYE, EYE1, EYE2 } from "../../assets/icon_path";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Registr = () => {
  const navigate = useNavigate()
  const [log, setLog] = useState('login')
  const [bool, setBool] = useState(false)

  const Login = async (values) => {
    console.log(values)
    axios.post('https://online-excel-heroku.herokuapp.com/auth/token', values)
      .then(res => {
        const { success, data } = res.data.data
        if (success) {
          toast.success("successfully")
          localStorage.setItem("user", JSON.stringify(values))
          localStorage.setItem("token", data.accessToken)
          navigate('/students')
          
        } else {
          toast.error("error")
        }
      }).catch(err => {
        console.log(err)
      })
  };

  const Registr = async (values) => {
    axios.post('https://online-excel-heroku.herokuapp.com/auth/register', values)
      .then(res => {
        const { success } = res.data.data
        console.log(success)
        if (success) {
          toast.success("successfully")
          setLog("login")
        } else {
          toast.error("error")
        }
      }).catch(err => {
        console.log(err)
      })
  };
  const user = localStorage.getItem("user")
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (user && token) {
      navigate('/students')
    }
  }, [])
  return (
    <StyleForm>
      {
        log === "login" ?
          <div className="login">
            <div className="log">
              <h2 onClick={() => setLog("login")} style={{ backgroundColor: `${log === "login" ? "white" : ""}` }}>Login</h2>
              <h2 onClick={() => setLog("registr")} style={{ backgroundColor: `${log === "registr" ? "white" : ""}` }}>Registr</h2>
            </div>
            <Form
              onSubmit={Login}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "username is undefined";
                }
                if (!values.password) {
                  errors.password = "password is undefined";
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
                reset
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="username">
                    {({ input, meta }) => (
                      <div>
                        <label>Username</label>
                        <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="Username" />
                        {(meta.error || meta.submitError) && meta.touched && (
                          <span>{meta.error || meta.submitError}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div className="password">
                        <label>Password</label>
                        <input {...input} style={{ border: `${meta.error && meta.touched ? "2px solid red" : ''}` }} type={`${!bool ? "password" : "text"}`} placeholder="Password" />
                        {
                          bool ? <img onClick={() => setBool(bool => !bool)} src={EYE2} alt="" /> : <img onClick={() => setBool(bool => !bool)} src={EYE1} alt="" />
                        }
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  {submitError && <div className="error">{submitError}</div>}
                  <div className="buttons">
                    <button type="submit" disabled={submitting}>
                      Log In
                    </button>
                  </div>
                </form>
              )}
            />
          </div> :
          <div className="registr">
            <div className="log">
              <h2 onClick={() => setLog("login")} style={{ backgroundColor: `${log === "login" ? "white" : ""}` }}>Login</h2>
              <h2 onClick={() => setLog("registr")} style={{ backgroundColor: `${log === "registr" ? "white" : ""}` }}>Registr</h2>
            </div>
            <Form
              onSubmit={Registr}
              validate={(values) => {
                const errors = {};
                if (!values.fullname) {
                  errors.fullname = "fullname is undefined";
                }
                else if (values.fullname.length < 3) {
                  errors.fullname = "Must be min 3"
                }
                if (!values.username) {
                  errors.username = "username is undefined";
                }
                else if (values.username.length < 3) {
                  errors.username = "Must be min 3"
                }
                if (!values.password) {
                  errors.password = "password is undefined";
                }
                if (!values.phone) {
                  errors.phone = "Phone is undefined";
                } else if (isNaN(values.phone)) {
                  errors.phone = "Must be a number"
                } else if (values.phone.length < 9) {
                  errors.phone = "Must be min 9 numbers"
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
                  <Field name="fullname">
                    {({ input, meta }) => (
                      <div>
                        <label>FullName</label>
                        <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="FullName" />
                        {(meta.error || meta.submitError) && meta.touched && (
                          <span>{meta.error || meta.submitError}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="username">
                    {({ input, meta }) => (
                      <div>
                        <label>Username</label>
                        <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="Username" />
                        {(meta.error || meta.submitError) && meta.touched && (
                          <span>{meta.error || meta.submitError}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div className="password">
                        <label>Password</label>
                        <input {...input} style={{ border: `${meta.error && meta.touched ? "2px solid red" : ''}` }} type={`${!bool ? "password" : "text"}`} placeholder="Password" />
                        {
                          bool ? <img onClick={() => setBool(bool => !bool)} src={EYE2} alt="" /> : <img onClick={() => setBool(bool => !bool)} src={EYE1} alt="" />
                        }
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ input, meta }) => (
                      <div>
                        <label>Phone</label>
                        <input {...input} style={{ border: `${(meta.error || meta.submitError) && meta.touched ? "2px solid red" : ''}` }} type="text" placeholder="Phone" />
                        {(meta.error || meta.submitError) && meta.touched && (
                          <span>{meta.error || meta.submitError}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  {submitError && <div className="error">{submitError}</div>}
                  <div className="buttons">
                    <button type="submit" disabled={submitting}>
                      Save
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
      }
    </StyleForm>
  );
};

export default Registr;
