// Novo projeto moderno com base na estrutura do site da Lagoinha L2
// Tecnologias: React + Vite + Tailwind CSS

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Hero() {
  return (
    <section className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)' }}>
      <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-2xl">
        <img src="/src/assets/logo.jpg" alt="Luuz Church" className="mx-auto mb-6 w-24 h-24 rounded-full border-4 border-white" />
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Luuz Church</h1>
        <p className="text-lg">Uma igreja apaixonada por Jesus e por pessoas. Conheça nossa história, valores e participe conosco.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
        <p className="text-lg">A Luuz Church nasceu com o propósito de ser luz no mundo, seguindo os ensinamentos de Cristo e servindo a comunidade com amor, palavra e ação. Cremos em um evangelho vivo, poderoso e transformador.</p>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Onde estamos</h2>
      <p className="text-lg mb-4">Rua Doutor Bueno, 251 – Macaé, RJ</p>
      <iframe
        className="w-full max-w-3xl h-80 mx-auto rounded-xl shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.3829449683913!2d-41.765000485021736!3d-22.490503136647794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98ab5f5d14d555%3A0x25071d84138c5db!2sR.%20Dr.%20Bueno%2C%20251%20-%20Centro%2C%20Maca%C3%A9%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1692040303512!5m2!1spt-BR!2sbr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p>© {new Date().getFullYear()} Luuz Church. Todos os direitos reservados.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Hero />
      <About />
      <Location />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);