import React, { useState } from 'react';
//Hangman.js would have been too messy and complex if i added this there.
function Help() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="Help">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Help me 
      </button>
      {isShown && (
        <div>
        This is a letter guessing game based on Harry Potter.
         You are shown a set of blank letters that match a word 
         and you have to guess what these letters are to reveal
          the hidden word. 
          You guess by picking letters from those displayed 
          on the sides. If you pick a letter that is in 
          the word, a sound is played and that letter is 
          revealed from the blank letters; however, if you 
          pick a letter that is not in the word, then a 
          stickman is slowly drawn. With each wrong letter 
          guess, the man is drawn more and more. When the man 
          is finished, he is hung and the game is lost. 
         You only have 6 wrong guesses.
        </div>
      )}
    </div>
  );
}

export default Help;