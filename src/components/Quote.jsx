import React, { useState } from 'react';
import "./Quote.css"

function Quote() {
  const [quotes, setQuotes] = useState([
    // men
    { text: "“Deux de mes jours comptés ne me tourmenteront jamais : Hier, déjà oublié, demain, dont je n'ai nulle envie.”", author: "Omar Khayyâm",gender:"male" },
    { text: "“Le moyen de supporter le malheur, c'est de voir quelqu'un de plus malheureux que soi. ”", author: "Thalès",gender:"male" },
    { text: "“En te levant le matin, rappelle-toi combien précieux est le privilège de vivre, de respirer, d'être heureux.”", author: "Marc-Aurèle",gender:"male" },
    { text: "“Il n'y a point de travail honteux.”", author: "Socrate",gender:"male" },
    { text: "“Il n'est point de bonheur sans liberté, ni de liberté sans courage.”", author: "Périclès", gender:"male" },
    { text: "“La vie s’achève, mais le travail jamais.”", author: "Moi", gender:"male" },
    { text: "“Les abus de la liberté tueront toujours la liberté.”", author: " André Maurois", gender:"male" },
    // women
    { text: "“Un âne à deux pieds peut devenir général et rester âne.”", author: "Comtesse de Ségur", gender:"female" },
    { text: "“Ne laissez personne venir à vous et repartir sans être plus heureux.”", author: "Mère Teresa", gender:"female" },
    { text: "“Nous sommes peu à penser trop, trop à penser peu.”", author: "Françoise Sagan", gender:"female" },
    { text: "“Lorsque tu sous-estimes ce que tu fais, le monde sous-estime qui tu es.”", author: "Oprah Winfrey", gender:"female" },
    { text: "“La réussite, ce n’est pas combien d’argent vous gagnez. C’est l’impact que vous avez sur la vie des gens.”", author: "Michelle Obama", gender:"female" },
    { text: "“La beauté commence au moment où vous décidez d’être vous-même.”", author: "Coco Chanel", gender:"female" },
    { text: "“Ma meilleure amie, c'est moi ”", author: "Diane Von Furstenberg", gender:"female" },
  ]);

  const [quoteIndex, setQuoteIndex] = useState(0);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
  };

  return (
    <div className='container'>
      <blockquote>
        <p className='quote'>{quotes[quoteIndex].text}</p>
        <div className='author'><p>{gender(quotes[quoteIndex].gender)} : {quotes[quoteIndex].author}</p></div>
      </blockquote>
      <div className='line'></div>
      <div className='under'>
        <button className='btn' onClick={generateRandomQuote}>nouvelle citation</button>
      </div>
      
    </div>
  );
}

function gender(sex){
  return(sex==="male" ? "Auteur" : "Auteure"
) 
}

export default Quote;
