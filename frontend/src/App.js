import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations ] = useState([])

   return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <header className='mb-8 text-center'>
        <h1 className="text-3xl font-bold mb-8">
          Recomendador de Produtos RD Station
        </h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station,
          cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial,
          temos uma solução para ajudar você a alcançar seus objetivos. Use o formulário abaixo para selecionar suas preferências e 
          funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
        </p>
      </header>
      
    <main className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 transition-all">
        <section className="border-r border-gray-100 pr-4">
          <Form setRecommendations={setRecommendations} />
        </section>

        <section className="pl-4">
          <RecommendationList recommendations={recommendations} />
        </section>
      </main>
    </div>
  );
}

export default App;
