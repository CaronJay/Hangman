import React from 'react';
import Hangman from './components/Hangman';
import Header from './components/Header';
//Added both header and game(Hangman) components to the APp.js file whih will render 
//onto the index.js file.

function App() {
  return (
    <div className="App">
    <Header/>
      <Hangman/>
      
    </div>
  );
}

export default App;
