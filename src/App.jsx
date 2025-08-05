import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex flex-col items-center justify-center py-10">
        <img src="/logo.jpg" alt="Luuz Church Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-4xl font-bold">Luuz Church</h1>
        <p className="text-lg text-orange-400">Uma Família para Amar, um Lugar para Adorar</p>
      </header>

      <main className="max-w-3xl mx-auto p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Nossa História</h2>
          <p className="text-gray-300">
            A Luuz Church nasceu com o propósito de ser uma família acolhedora, um lugar de adoração
            onde vidas são transformadas pelo encontro com Deus.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Onde Estamos</h2>
          <p className="text-gray-300">
            📍 Rua Manoel Dias, 291 – Barra, Teresópolis, RJ, Brasil
          </p>
          <p className="text-gray-300">Horários de culto:</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Quarta-feira: 20h – “Noites SOBRENATURAIS”</li>
            <li>Domingo: 19h30 – Culto de adoração e palavra</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Programação Semanal</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Quarta-feira – Cultos de 20h com momentos de cura, libertação e presença sobrenatural</li>
            <li>Domingo – Culto principal às 19h30 com adoração intensa e palavra profética</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Eventos e Destaques</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Conferência de Milagres – noites de derramamento da presença de Jesus</li>
            <li>Noites de adoração especial – cultos marcados por zelo espiritual e renovo da fé</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Slogan & Filosofia</h2>
          <blockquote className="italic text-gray-400">
            “Uma Família para Amar, um Lugar para Adorar”
          </blockquote>
        </section>
      </main>

      <footer className="text-center text-gray-500 py-6 text-sm">
        &copy; {new Date().getFullYear()} Luuz Church. Todos os direitos reservados.
      </footer>
    </div>
  );
}