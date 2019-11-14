import React, { useState } from 'react';
import { Container } from './styles';
import bag from '../../assets/bag.svg';
import api from "../../services/api"
export default function Register({ history }) {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function handleSubmit(event) {
      event.preventDefault()
      try {
         await api.post("/register", {
            name,
            email,
            password
         })
         history.push("/")
      } catch (erro) {
         alert("Usuário já existe");
      }
   }

   return (

      <Container>
         <form onSubmit={handleSubmit}>
            <img src={bag} alt="icon" />
            <h2>Cadastre-se</h2>
            <input type="text" placeholder="Nome:" onChange={(event) => setName(event.target.value)} required />
            <input type="email" placeholder="Email:" onChange={(event) => setEmail(event.target.value)} required />
            <input type="password" placeholder="Senha:" onChange={(event) => setPassword(event.target.value)} required />
            <button type="submit"> Cadastrar </button>
         </form>
      </Container>

   );
}