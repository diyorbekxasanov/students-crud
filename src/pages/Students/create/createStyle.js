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

export const CreateStyle = styled.div`
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  h2 {
    margin-bottom: 20px;
  }
  form {
    max-width: 1300px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    align-items: center;
    & > .password {
      position: relative;
    }
    & > div {
      display: flex;
      flex-flow: wrap;
      line-height: 2em;
      margin: 5px;
      position: relative;
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
        height: 40px;
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
        position: absolute;
        bottom: -30px;
        left: 0;
      }
    }
    & > .buttons {
      margin-top: 40px;
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
