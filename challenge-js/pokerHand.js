class PokerHand {
  constructor(hand) {
    this.hand = hand;
    this.state = {
      rank: ''
    }
  }

  getCards = (hand) => {
    let convertedHand = hand;
    const replaceFaceCardValue = {
      //A not accounting for high or low since not comparing to another hand
      "A": "1",
      "K": "13",
      "Q": "12",
      "J": "11"
    }

    //convert any face cards to values above
    for (const key in replaceFaceCardValue) {
      convertedHand = convertedHand.replace(new RegExp(key, "g"), replaceFaceCardValue[key]);
    }

    //separate each card from string into array
    convertedHand = convertedHand.split(" ");

    //turn each card into object with value and suit
    convertedHand = convertedHand.map((card) => ({ value: parseInt(card), suit: card.substr(card.length - 1)}));

    //sort array by value
    convertedHand.sort((a, b) => parseInt(a.value) - parseInt(b.value));

    this.checkCards(convertedHand);
  }

  //helper function to find if there are duplicates (values or suits)
  findDuplicates(cards, key) {
    const cardSet = new Set();
    const duplicates = [];
  
    for (const card of cards) {
      const value = card[key];
      if (cardSet.has(value)) {
        duplicates.push(card);
      } else {
        cardSet.add(value);
      }
    }
    return duplicates;
  }

  //helper function to find if the cards are consecutive
  isConsecutive(array) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[i-1]+1) {
        return false;
      }
      return true;
    }
  }

  checkCards(cards) {
    let duplicateValues = this.findDuplicates(cards, "value");
    let duplicateSuits = this.findDuplicates(cards, "suit");
    let valuesArray = cards.map((card) => card.value);
  
    const allEqual = array => array.every(value => value.value === array[0].value);
    
    let isFlush = false;
    let isStraight = false;
    let isRoyal = "1,10,11,12,13";

    //check for flush - comparing 4 duplicates to 1 existing in Set
    if (duplicateSuits.length === 4) {
      isFlush = true
    }

    //check for straight
    if (this.isConsecutive(valuesArray) || valuesArray.toString() === isRoyal) {
      isStraight = true
    }

    //check for duplicates - comparing duplicates to 1 existing in Set
    if (duplicateValues.length === 1) {
      this.state.rank = "One Pair";
    } else if (duplicateValues.length === 2) {
      if (allEqual(duplicateValues)) {
        this.state.rank = "Three of a Kind";
      } else {
        this.state.rank = "Two Pair";
      }
    } else if (duplicateValues.length === 3) {
      if (allEqual(duplicateValues)) {
        this.state.rank = "Four of a Kind";
      } else {
        this.state.rank = "Full House";
      }
    } else if (duplicateValues.length === 0) {
      if (isFlush && isStraight) {
        if (valuesArray.toString() === isRoyal) {
          this.state.rank = "Royal Flush"
        } else {
          this.state.rank = "Straight Flush"
        }
      } else if (isFlush && !isStraight) {
        this.state.rank = "Flush"
      } else if (!isFlush && isStraight) {
        this.state.rank = "Straight"
      } else if (!isFlush && !isStraight) {
        this.state.rank = "High Card"
      }
    } 
  }
  
  getRank() {
    this.getCards(this.hand)

    // Implement poker hand ranking
    if (this.state.rank !== '') {
      return (this.state.rank);
    }
  }
}

module.exports = PokerHand;
