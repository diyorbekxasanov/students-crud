import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=Inter&family=Radley&display=swap');
   *{
     padding:0 ;
     margin:0 ;
     box-sizing:border-box ;
     font-family: 'Inter', sans-serif;
   }

::-webkit-scrollbar {
  width: 10px;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background: #87DED4; 
}

::-webkit-scrollbar-thumb:hover {
  background: #6fb8af; 
}
   
   @media only screen and (max-width: 575px){
      .container{
         padding-left:0 10px !important;
         padding-right:0 10px !important;
      }
   }
`;
export default GlobalStyle;
