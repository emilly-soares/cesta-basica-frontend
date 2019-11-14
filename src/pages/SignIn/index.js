import React, { useState } from 'react';
import { Container } from './styles';
import api from "../../services/api"
import bag from '../../assets/bag.svg';
import { Link } from "react-router-dom";
export default function Login({ history }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function handleSubmit(event) {
      event.preventDefault()
      try {
         const response = await api.post("/sessions", {
            email,
            password
         });

         const { token } = response.data;

         if (token) {
            localStorage.setItem("@CESTA/token", token);
         }
         history.push("/admin");
      } catch (error) {
         // toast.error("Erro ao entrar");
         console.log("Erro ao entrar", error)

      }
   }
   return (
      <Container>
         <div>
            <form onSubmit={handleSubmit}>
               <img src={bag} alt="icon" />
               <h2> Entrar </h2>
               <input type="email" placeholder="Email:" onChange={(event) => setEmail(event.target.value)} required />
               <input type="password" placeholder="Senha:" onChange={(event) => setPassword(event.target.value)} required />
               <button type="submit"> Entrar </button>
               <hr />
               <Link to="/register">Criar conta</Link>
            </form>
         </div>
      </Container >
   );
}