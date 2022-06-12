import styled from "styled-components";

export const InfoStyle = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 30px;
  .card-shifokor {
   width: 1300px;
   .card-title {
      display: flex;
      border-bottom: 1px solid #bdbdbd;

      .img-title {
        width: 25%;
        img {
          height: 100%;
        }
      }

      .content {
        width: 80%;
        padding: 20px;

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;

          .name {
            font-family: "Lato";
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;
            letter-spacing: 0.2px;
            color: #25282b;
          }

          .btns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
        }

        .content-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          column-gap: 60px;
          width: 90%;

          .d {
            display: flex;
            align-items: center;

            p {
              font-family: "Lato";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
              letter-spacing: 0.2px;
              color: #606060;
              width: 60%;
            }

            strong {
              font-family: "Lato";
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.2px;
              color: #000000;
              width: 100%;
            }
          }
        }
      }
    }

    .footer-title {
      padding: 25px;

      .shaxsiy {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.2px;
        color: #000000;
        margin-bottom: 20px;
      }

      .card-footer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        .d {
          display: flex;

          p {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.2px;
            color: #606060;
            width: 40%;
          }

          strong {
            font-family: "Lato";
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.2px;
            color: #000000;
          }
        }
      }

      .d {
        display: flex;

        p {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.2px;
          color: #606060;
          width: 12.8%;
        }

        strong {
          font-family: "Lato";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.2px;
          color: #000000;
        }
      }
    }
  }
`;
