import React, { useState } from "react";
import "./App.css";
import mascot from "./mascot.png";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!loggedIn) {
    return (
      <div className="container login">
        <img src={mascot} alt="Mascot" className="mascot" />
        <h1>TEACHER MOMMY IA</h1>
        <div className="card">
          <input
            type="email"
            placeholder="E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="SENHA"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setLoggedIn(true)}>ENTRAR</button>
        </div>
        <p className="footer-msg">Com amor, Teacher Natáli 💖</p>
      </div>
    );
  }

  return (
    <div className="container main">
      <h2>OLÁ! EU SOU A TEACHER MOMMY IA</h2>
      <p className="subtitle">Como posso te ajudar com o livro do alfabeto?</p>
      <div className="chat-box">
        <div className="message">
          <img src={mascot} alt="Mascot" className="avatar" />
          <p>🤖 Olá! Qual letra você quer estudar hoje?</p>
        </div>
      </div>
      <input placeholder="Digite ou fale aqui..." className="input" />
      <div className="buttons">
        <button className="record">🎙️ Gravar</button>
        <button className="send">Enviar</button>
      </div>
      <button className="book-btn">📚 Acessar Livro do Alfabeto</button>
    </div>
  );
}

export default App;
