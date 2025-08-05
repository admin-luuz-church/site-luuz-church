
import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)' }}></div>
      <div className="relative z-10 text-center max-w-4xl px-6">
        <img src="/logo.jpg" alt="Luuz Church" className="mx-auto mb-8 w-32 h-32 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Luuz Church</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">Uma igreja apaixonada por Jesus e por pessoas</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-lg font-semibold">Quarta 20h</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-lg font-semibold">Domingo 19h30</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Nossa História</h2>
        <div className="bg-gray-700/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/30">
          <p className="text-xl leading-relaxed text-gray-300">A Luuz Church nasceu com o propósito de ser luz no mundo, seguindo os ensinamentos de Cristo e servindo a comunidade com amor, palavra e ação. Cremos em um evangelho vivo, poderoso e transformador.</p>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Nossos Pastores Presidentes</h2>
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 mb-8">
          <img src="/pastores-bruno-dani-estevao.png" alt="Pastores Bruno, Danielle e Estevão" className="mx-auto mb-8 max-w-lg w-full rounded-xl shadow-2xl" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-3 text-white">Pr Bruno Marques</h3>
            <p className="text-gray-300 text-lg">Pastor Presidente</p>
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-3 text-white">Pra Danielle Januizo</h3>
            <p className="text-gray-300 text-lg">Pastora Presidente</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Venha nos visitar</h2>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600/30 text-center hover:border-gray-500/50 transition-all">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-3">Localização</h3>
            <p className="text-gray-300">Rua Manoel Dias, 291<br />Teresópolis - RJ</p>
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600/30 text-center hover:border-gray-500/50 transition-all">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-3">Horários dos Cultos</h3>
            <p className="text-gray-300">Quarta-feira: 20h<br />Domingo: 19h30</p>
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600/30 text-center hover:border-gray-500/50 transition-all">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">Redes Sociais</h3>
            <a href="https://www.instagram.com/luuzchurch" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              Instagram: @luuzchurch
            </a>
          </div>
        </div>
        
        <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30">
          <iframe
            className="w-full h-96 rounded-xl shadow-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.7317197601164!2d-42.98088792546848!3d-22.401469020005653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984cdfaaf4bcad%3A0x110101d7b16587c0!2sR.%20Manoel%20Dias%2C%20291%20-%20Barra%20do%20Imbu%C3%AD%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025965-660!5e0!3m2!1spt-BR!2sbr!4v1754399992126!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-8 border-t border-gray-700/30">
      <p className="text-gray-400">© {new Date().getFullYear()} Luuz Church. Todos os direitos reservados.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Hero />
      <About />
      <Leadership />
      <Location />
      <Footer />
    </>
  );
}

export default App;
