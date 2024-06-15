import React from 'react';
import Form from './components/Form';
import bgImage from './assets/img1.jpg';

function App() {
  return (
    <>
      <div className="flex w-full h-screen p-10 bg-gray-100">
        <div className="w-full flex items-center justify-center lg:w-7/12">
          <Form />
        </div>

        <div 
          className="hidden lg:flex lg:w-5/12 justify-center items-center rounded-xl bg-cover bg-center" 
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="text-white text-3xl font-bold">Bienvenue</div>
        </div>
      </div>
    </>
  );
}

export default App;
