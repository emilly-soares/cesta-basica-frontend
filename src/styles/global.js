
import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

   form{
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
   }

  img {
    width: 100px;
    margin: 10px 0 40px;
  }
   
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #CEECF5;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}

 `;