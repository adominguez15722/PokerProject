class Cards {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
};

let aceS = new Cards('Ace', 'Spades');
let twoS = new Cards('Two', 'Spades');
let threeS = new Cards('Three', 'Spades');
let fourS = new Cards('Four', 'Spades');
let fiveS = new Cards('Five', 'Spades');
let sixS = new Cards('Six', 'Spades');
let sevenS = new Cards('Seven', 'Spades');
let eightS = new Cards('Eight', 'Spades');
let nineS = new Cards('Nine', 'Spades');
let tenS = new Cards('Ten', 'Spades');
let jackS = new Cards('Jack', 'Spades');
let queenS = new Cards('Queen', 'Spades');
let kingS = new Cards('King', 'Spades');


let aceD = new Cards('Ace', 'Diamonds');
let twoD = new Cards('Two', 'Diamonds');
let threeD = new Cards('Three', 'Diamonds');
let fourD = new Cards('Four', 'Diamonds');
let fiveD = new Cards('Five', 'Diamonds');
let sixD = new Cards('Six', 'Diamonds');
let sevenD = new Cards('Seven', 'Diamonds');
let eightD = new Cards('Eight', 'Diamonds');
let nineD = new Cards('Nine', 'Diamonds');
let tenD = new Cards('Ten', 'Diamonds');
let jackD = new Cards('Jack', 'Diamonds');
let queenD = new Cards('Queen', 'Diamonds');
let kingD = new Cards('King', 'Diamonds');


let aceH = new Cards('Ace', 'Hearts');
let twoH = new Cards('Two', 'Hearts');
let threeH = new Cards('Three', 'Hearts');
let fourH = new Cards('Four', 'Hearts');
let fiveH = new Cards('Five', 'Hearts');
let sixH = new Cards('Six', 'Hearts');
let sevenH = new Cards('Seven', 'Hearts');
let eightH = new Cards('Eight', 'Hearts');
let nineH = new Cards('Nine', 'Hearts');
let tenH = new Cards('Ten', 'Hearts');
let jackH = new Cards('Jack', 'Hearts');
let queenH = new Cards('Queen', 'Hearts');
let kingH = new Cards('King', 'Hearts');


let aceC = new Cards('Ace', 'Clubs');
let twoC = new Cards('Two', 'Clubs');
let threeC = new Cards('Three', 'Clubs');
let fourC = new Cards('Four', 'Clubs');
let fiveC = new Cards('Five', 'Clubs');
let sixC = new Cards('Six', 'Clubs');
let sevenC = new Cards('Seven', 'Clubs');
let eightC = new Cards('Eight', 'Clubs');
let nineC = new Cards('Nine', 'Clubs');
let tenC = new Cards('Ten', 'Clubs');
let jackC = new Cards('Jack', 'Clubs');
let queenC = new Cards('Queen', 'Clubs');
let kingC = new Cards('King', 'Clubs');


let deckOfCards = [aceS, twoS, threeS, fourS, fiveS, sixS, sevenS, eightS, nineS, tenS, jackS, queenS, kingS, aceD, twoD, threeD, fourD, fiveD, sixD, sevenD, eightD, nineD, tenD, jackD, queenD, kingD, aceH, twoH, threeH, fourH, fiveH, sixH, sevenH, eightH, nineH, tenH, jackH, queenH, kingH, aceC, twoC, threeC, fourC, fiveC, sixC, sevenC, eightC, nineC, tenC, jackC, queenC, kingC];

let result = [];
let discard = [];
let playerOne = [];
let playerTwo = [];
let playerThree = [];
let playerFour = [];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
function burnDeck()  {
    
     // get rid of let burn =
	const randomInd = Math.floor(Math.random() * deckOfCards.length)

    let rand = deckOfCards[randomInd]


    for (let i = 0; i < 1; i++) {
        discard.push(rand)
        deckOfCards.splice(randomInd, 1)

    }
};


function dealCards() {
    
    burnDeck();
    
    for (let i = 0; i < 2; i++) {
    
    let randOne = Math.floor(Math.random() * deckOfCards.length)
    let randPlayOne = deckOfCards[randOne]
    playerOne.push(randPlayOne)
    deckOfCards.splice(randOne, 1)

    let randTwo = Math.floor(Math.random() * deckOfCards.length)
    let randPlayTwo = deckOfCards[randTwo]
    playerTwo.push(randPlayTwo)
    deckOfCards.splice(randTwo, 1)
   
    let randThree = Math.floor(Math.random() * deckOfCards.length)
    let randPlayThree = deckOfCards[randThree]
    playerThree.push(randPlayThree)
    deckOfCards.splice(randThree, 1)
    
    let randFour = Math.floor(Math.random() * deckOfCards.length)
    let randPlayFour = deckOfCards[randFour]
    playerFour.push(randPlayFour)
    deckOfCards.splice(randFour, 1)

    }
}

function flopDeck() {
    
    burnDeck();
    
    for (let i = 0; i < 3; i++) {
         let randFlop = Math.floor(Math.random() * deckOfCards.length)
         let flop = deckOfCards[randFlop]
         result.push(flop)
         deckOfCards.splice(randFlop, 1)
 
    }

};


function turnDeck() {
    
    burnDeck();

    for (let i = 0; i < 1; i++) {
        let randTurn = Math.floor(Math.random() * deckOfCards.length)
        let turn = deckOfCards[randTurn]
        result.push(turn)
        deckOfCards.splice(randTurn, 1)
    }
};



function riverDeck() {
    
    burnDeck();

    for (let i = 0; i < 1; i++) {
        let randRiver = Math.floor(Math.random() * deckOfCards.length)
        let river = deckOfCards[randRiver]
        result.push(river)
        deckOfCards.splice(randRiver, 1)
    }
};

function playPoker()    {
    shuffle(deckOfCards)
    dealCards()
    flopDeck()
    turnDeck()
    riverDeck()
};

playPoker();

console.log(result);
console.log(discard);
console.log(playerOne);
console.log(playerTwo);
console.log(playerThree);
console.log(playerFour);

console.log(deckOfCards.length);
console.log(deckOfCards)

