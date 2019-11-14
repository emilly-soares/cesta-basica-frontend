import styled from "styled-components";


export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

   img{
   height: 70px;
   width: 70px;
   }

   h2{
     padding-bottom: 20px;
     color: #848484;
   }

  input {
    height: 30px;
    margin-bottom: 15px;
    color: black;
    font-size: 15px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #848484;
    &::placeholder {
      color: #2E2E2E;
    }
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

 button {
    color: #fff;
    font-size: 16px;
    background-color:#086A87;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

    a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;