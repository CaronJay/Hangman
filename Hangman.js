import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';
import Help from './Help.js';
//imported both words and help.js file as well as the css.
//added all the images that we'll be using for hangman
import step0 from './images/0.jpg';
import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';

//here i created a class component that allows the user to get only 6 wrong guesses which corrosponds to the 6 images.
//image 0 does not count. It is counted as an array and the game starts with image 0.
class Hangman extends Component {
    static defaultProps = {
        maxWrong:6,
        images:[step0  , step1, step2, step3, step4, step5, step6]
    }
//
constructor(props) {
    super(props);
    this.state ={
        mistake :0,
        guessed:new Set([]),
        answer: randomWord()
    }  
} 
handleGuess= e =>{
    let letter = e.target.value;
    this.setState(st =>({
        guessed: st.guessed.add(letter),
        mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }) );
}
guessedWord() {
    return this.state.answer.split("").map(letter=>(this.state.guessed.has(letter) ? letter : " _ " ));
}
// adds all the letters. including a onclick function and the disabled function.
//once letter is clicked you cannot click it again
generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter=> (
        <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
        >
            { letter }
        </button>
    ))
}
//starts the game from over
 resetButton = () =>{
     this.setState({
         mistake:0,
         guessed: new Set([]),
         answer: randomWord()
     });
 }

 //determines if you win or lose the game.
 //if the amount of mistakes > maxWrong(6), game over
 //if the guessed word is exactly (===) the same as the answer. User wins.
    render() {
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const isWinner =this.guessedWord().join("") === this.state.answer;
        let gameStat =this.generateButtons();
        
        if (isWinner) {
            gameStat = alert("10 points to Gryffindor - You won!")
        }

        if (gameOver) { 
            gameStat = alert("Mudblood - You lost.")
        }

        return (
            <div className="Hangman container">
                   
                <button onClick={this.resetButton}>Reset</button>
                <Help/>
                <div class
                Name= "float-right"> You have made {this.state.mistake} mistakes. Out of {this.props.maxWrong} </div>
                <div className="text-center">
                <img src={this.props.images[this.state.mistake]} alt="hangman"/>
                </div>
                <div className="text-center">
                <p> Guess words from Harry Potter:</p>
                     <p>
                         {!gameOver ? this.guessedWord() : this.state.answer}
                     </p>
                     <p>{gameStat}</p>
                    
                </div>
                
            </div> 
        )
    }
}
export default Hangman;