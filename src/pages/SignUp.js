import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { LOGIN2 } from "../assets/images_path";
import { Link, useNavigate } from "react-router-dom";
import LoginLink from "../components/login/LoginLink";
import { LogInWrapper } from "./LogIn";
import { NOEYE, YESEYE } from "../assets/icon_path";
import { instance } from "../api/instance/instance";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const { t } = useTranslation();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();
  const register = () => {
    instance
      .post("api/register", data)
      .then((res) => {
        console.log(res.data);
        const { ok, message, user, token } = res.data;
        if (ok) {
          toast.success(message);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
          navigate("/profile");
          window.location.reload();
        } else {
          toast.error(message);
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data.message);
      });
    // navigate("/profile");
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (user && token) {
      navigate("/profile");
    }
  });
  return (
    <>
      <ToastContainer />
      <LogInWrapper in={true}>
        <div className="container mx-auto">
          <div className="login">
            <div className="input">
              <h2 className="uppercase">{t("Ro’yxatdan")}</h2>
              <Link to="/" className="plus">
                +
              </Link>
              <input
                type="text"
                name="first_name"
                value={data.first_name}
                onChange={handleChange}
                placeholder="Ism"
              />
              <input
                type="text"
                name="last_name"
                value={data.last_name}
                onChange={handleChange}
                placeholder="Familiya"
              />
              <input
                type="number"
                name="phone"
                inputMode="numeric"
                autoComplete="cc-number"
                value={data.phone}
                onChange={handleChange}
                placeholder="Telefon nomer"
              />
              <div className="pasword">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Parol"
                />
                <img
                  className="show"
                  onClick={() => setshow(!show)}
                  src={show ? NOEYE : YESEYE}
                  alt=""
                />
              </div>
              <div className="pasword">
                <input
                  type={show2 ? "text" : "password"}
                  placeholder="Parolni takrorlang"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  onChange={handleChange}
                />
                <img
                  className="show"
                  onClick={() => setshow2(!show2)}
                  src={show2 ? NOEYE : YESEYE}
                  alt=""
                />
              </div>
              <button onClick={register}>{t("Ro’yxatdan")}</button>
            </div>
            <div className="text">
              <p>{t("allaqachon")}? </p>
              <Link to="/login">{t("Kirish")}</Link>
            </div>
          </div>
          <div className="img top-30">
            <img className="mx-auto img-1" src={LOGIN2} alt="" />
            <LoginLink />
          </div>
        </div>
      </LogInWrapper>
    </>
  );
};

export default SignUp;
