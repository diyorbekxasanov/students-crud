import styled from "styled-components";
export const StyleNavbar = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
   margin-bottom: 30px;
    .form-search {
      display: flex;
      align-items: center;
      position: relative;
      width: 25%;

      input,
      select {
        background-color: #ffffff;
        border-radius: 100px;
        letter-spacing: 0.1px;
        color: #a0a4a8;
        border: none;
        outline: none;
        padding: 15px 20px;
        padding-left: 50px;
      }

      select {
        background-color: #eeeeee;
        padding: 9px 12px;
        margin-left: 10px;
      }

      img {
        position: absolute;
        top: 15px;
        left: 20px;
      }
    }

    .navbar-avatar {
      text-align: end;
      width: 6%;
      display: flex;
      align-items: center;
      justify-content: end;
      justify-content: space-between;

      .col-1 {
        margin-right: 10px;
        position: relative;

        div {
          position: absolute;
          top: -7px;
          right: -8px;
          width: 15px;
          height: 15px;
          background-color: rgb(255, 101, 101);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          box-shadow: 0px 0px 0px 2px #fff;

          p {
            font-size: 10px;
          }
        }
      }
    }
  }
`;
