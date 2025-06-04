
import { useState } from 'react';

const clausulas = [
  {
    titulo: "Salário Normativo",
    tema: "Remuneração",
    acordo: "São Paulo",
    texto: "O salário normativo mensal será de R$ 1.700,00."
  },
  {
    titulo: "Auxílio-Creche",
    tema: "Benefícios",
    acordo: "Bragança Paulista",
    texto: "Valor de R$ 258,90 por filho recém-nascido."
  },
  {
    titulo: "PLR",
    tema: "Remuneração Variável",
    acordo: "São Carlos",
    texto: "Obrigatoriedade de negociação até junho de 2025."
  }
];

export default function Home() {
  const [cidade, setCidade] = useState("Todos");
  const filtradas = clausulas.filter(c => cidade === "Todos" || c.acordo === cidade);

  return (
    <div style={{ fontFamily: 'Arial', fontSize: '12px', backgroundColor: '#e6f0ff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#003366' }}>Acordos Coletivos</h1>
      <select onChange={e => setCidade(e.target.value)} style={{ marginBottom: '20px', padding: '5px' }}>
        <option>Todos</option>
        <option>São Paulo</option>
        <option>Bragança Paulista</option>
        <option>São Carlos</option>
      </select>
      {filtradas.map((c, i) => (
        <div key={i} style={{ backgroundColor: '#ffffff', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }}>
          <strong>{c.titulo}</strong> ({c.acordo})<br />
          <em>{c.tema}</em><br />
          <p>{c.texto}</p>
        </div>
      ))}
    </div>
  );
}
