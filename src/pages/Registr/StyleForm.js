import styled, { css } from "styled-components";

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnPrimary = btn("#4f93ce", "#285f8f");

export default styled.div`
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .log {
    display: flex;
    h2 {
      font-size: 30px;
      font-weight: 500;
      padding: 10px 20px;
      z-index: 3;
      cursor: pointer;
    }
  }
  form {
    width: 500px;
    padding: 30px 40px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    position: relative;
    background-color: #fff;
    & > .password {
      position: relative;
    }
    & > div {
      display: flex;
      flex-flow: wrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        font-size: 1em;
      }
      & > input {
        padding: 9px 12px;
        font-size: 1em;
        border: none;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100%;
        &:focus {
          border: 2px solid #0ec9c3;
        }
      }
      & > img {
        position: absolute;
        top: 45px;
        right: 5%;
        cursor: pointer;
        transform: scale(1.2);
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
      & > span {
        color: red;
        font-weight: bold;
        font-size: 13px;
      }
    }
    & > .buttons {
      display: flex;
      justify-content: end;
      margin-top: 15px;
    }
    button {
      cursor: pointer;
      width: 100px;
      height: 40px;
      &[type="submit"] {
        ${btnPrimary};
      }
    }
    .error {
      font-weight: bold;
      color: red;
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`;
