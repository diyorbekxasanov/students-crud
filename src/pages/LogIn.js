import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN, NAQSH } from "../assets/images_path";
import { Link, useNavigate } from "react-router-dom";
import LoginLink from "../components/login/LoginLink";
import { NOEYE, YESEYE } from "../assets/icon_path";
import { instance } from "../api/instance/instance";
import { useTranslation } from "react-i18next";

export const LogInWrapper = styled.div`
  background-image: url(${NAQSH});
  background-repeat: no-repeat;
  background-position: left top;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #fdfdfd;
  .container {
    padding-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 150px;
  }
  .login {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .input {
    width: 100%;
    max-width: 550px;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 3.57818px 35.7818px rgba(124, 124, 124, 0.1);
    border-radius: 17px;
    padding: 30px 40px;
    position: relative;

    h2 {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #1258af;
      text-align: center;
    }
    .plus {
      position: absolute;
      top: 13px;
      transform: rotate(45deg);
      transition: all 0.3s linear;
      right: 40px;
      z-index: 5;
      font-weight: 200;
      font-size: 45px;
      line-height: 120%;
      color: #1258af;
    }
    input {
      background: #ffffff;
      border: 1px solid #d8dae9;
      border-radius: 10px;
      margin-top: 20px;
      width: 100%;
      padding: 18px 25px;
      outline: none;
      /* text */
      font-weight: 500;
      font-size: 16.1018px;
      line-height: 19px;
      color: #121332;
      &::placeholder {
        color: #121332;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type="number"] {
        -moz-appearance: textfield;
      }
    }
    button {
      background: #1258af;
      border: 0.894545px solid #1258af;
      border-radius: 10px;
      padding: 18px;
      margin-top: ${(props) => (props.in ? "20px" : "210px")};
      width: 100%;
      /* text */
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }
    .pasword {
      position: relative;
      img {
        position: absolute;
        top: 46%;
        right: 10%;
        cursor: pointer;
        width: 30px;
        height: 30px;
        object-fit: cover;
        object-position: center;
        transition: all 0.3s linear;
      }
    }
  }
  .text {
    display: flex;
    align-items: center;
    width: 500px;
    margin-top: 30px;
    justify-content: center;
    p,
    a {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #121332;
    }
    a {
      color: #1258af;
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 1280px) {
    .container {
      gap: 100px;
    }
    .input {
      max-width: 460px;
      padding: 25px 35px;
      .plus {
        top: 11px;
        right: 35px;
        font-size: 45px;
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    .container {
      grid-template-columns: 1fr;
      gap: 0px;
    }
    .login {
      align-items: center;
    }
    .img {
      display: flex;
      justify-content: center;
      .img-1 {
        display: none;
      }
    }
    top-30 {
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 800px) {
    .input {
      max-width: 460px;
      padding: 25px 35px;
      h2 {
        font-size: 18px;
        line-height: 22px;
      }
      .plus {
        top: 11px;
        right: 35px;
        font-size: 45px;
      }
      input {
        margin-top: 18px;
        padding: 16px 22px;
        /* text */
        font-size: 14px;
        line-height: 17px;
      }
      button {
        padding: 16px;
        margin-top: ${(props) => (props.in ? "20px" : "20px")};
        width: 100%;
        /* text */
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .input {
      max-width: 100% !important;
      padding: 15px 20px;
      h2 {
        font-size: 16px;
        line-height: 20px;
      }
      .plus {
        top: -4px;
        right: 20px;
      }
      input {
        margin-top: 12px;
        padding: 12px 16px;

        font-size: 12px;
        line-height: 15px;
      }
      button {
        padding: 12px;
        margin-top: ${(props) => (props.in ? "15px" : "15px")};
        /* text */
        font-size: 12px;
        line-height: 15px;
      }
      .pasword {
        img {
          top: 44%;
          right: 9%;
          width: 20px;
          height: 20px;
        }
      }
    }
    .text {
      width: 100%;
      margin-top: 15px;
      p,
      a {
        font-size: 14px;
        line-height: 18px;
      }
      a {
        color: #1258af;
        margin-left: 10px;
      }
    }
  }
`;

const LogIn = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [data, setData] = useState({
    phone: "",
    password: "",
  });
  const login = () => {
    // const { phone, password } = data;
    instance
      .post("api/login", data)
      .then((res) => {
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
      <LogInWrapper>
        <div className="container mx-auto">
          <div className="login">
            <div className="input">
              <h2>{t("Kirish")}</h2>
              <Link to="/" className="plus">
                +
              </Link>
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
              <Link
                className="text-[#121332] text-base mt-5 text-center block"
                to="/"
              >
                {t("Parolni")}?
              </Link>
              <button onClick={login}>{t("Kirish")}</button>
            </div>
            <div className="text">
              <p>{t("akkaunt")}?</p>
              <Link to="/signup">{t("Ro’yxatdan")}</Link>
            </div>
          </div>
          <div className="img top-30">
            <img className="mx-auto img-1" src={LOGIN} alt="" />
            <LoginLink />
          </div>
        </div>
      </LogInWrapper>
    </>
  );
};

export default LogIn;
