import styled from "styled-components";

export const StyleStudentList = styled.div`
  .student {
    margin: 30px 0 50px 0;

    .card {
      background: #ffffff;
      box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
      border-radius: 8px;
      position: relative;

      .pagination {
        display: flex;
        justify-content: space-between;
        padding: 20px;

        .pages {
          display: flex;

          div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            margin-left: 4px;
            border: 1px solid #e8e8e8;
            border-radius: 4px;
            color: #25282b;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
          }

          .page1 {
            background: #336cfb;
            border-radius: 4px;
            color: #fff;
          }
        }
      }

      .addBemor {
        position: absolute;
        bottom: -30px;
        right: -30px;
        cursor: pointer;
      }
    }

    .title {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 46px;
      letter-spacing: 0.2px;
      color: #25282b;
      margin: 40px 0 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .add {
        width: 60px;
        height: 40px;
        border: none;
        outline: none;
        border: 1px solid #1e69f7;
        background-color: #fff;
        color: #1e69f7;
        border-radius: 5px;
        transition: all 0.3s linear;
        cursor: pointer;
        &:hover {
          background-color: #1e69f7;
          color: #fff;
        }
      }
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      justify-content: start;
      background: #e8e8e8;
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: #25282b;
      padding: 20px;
      text-align: start;
      border-bottom: 1px solid #e8e8e8;
    }

    .card-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      justify-content: start;
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: #25282b;
      padding: 10px 20px;
      border-bottom: 1px solid #e8e8e8;
    }
    .card-body {
      position: relative;
      padding: 10px;
    }
    .card-header,
    .card-body {
      .name {
        width: 18%;
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
      }

      .univer {
        width: 24%;
      }

      .faqulty {
        width: 20%;
      }

      .spec {
        width: 13%;
      }

      .btns {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 15px;

        .editBtn {
          margin: 0 17px;
        }
      }
    }

    .pagination {
      .leftBtn {
        transform: rotate(180deg);
      }

      .rightBtn {
      }
    }
  }
`;