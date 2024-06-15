import * as React from 'react';

const Form = () => {
  const [login, setLogin] = React.useState(true);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl text-center mb-5">{login ? "Connexion" : "Inscription"}</h1>

        <div className="border-2 border-gray-300 p-20 rounded-md shadow-lg w-full max-w-md">

          <div className="mb-4">

            <label className="block text-lg font-medium text-gray-700 ">Nom d'utilisateur</label>
            <input type="text" className="bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 block w-full " />
          </div>
          
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Mot de passe</label>
            <input type="password" className="bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 block w-full" />
          </div>
          
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">{login ? "Se connecter" : "S'inscrire"}</button>
          
          <div className="mt-4 text-center">
            <button 
              className="text-blue-500 hover:underline"
              onClick={() => setLogin(!login)}
            >
              {login ? "Créer un compte" : "Se connecter à un compte existant"}
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Form;
