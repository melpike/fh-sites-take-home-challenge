var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * Royal Flush test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * Straight Flush test
 */
describe('Rank a Straight Flush', function() {
  it('Return straight flush when hand given', function() {
    var hand = new PokerHand('9s 10s 8s 6s 7s');
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

/**
 * Four of a Kind test
 */
describe('Rank a Four of a Kind', function() {
  it('Return four of a Kind when hand given', function() {
    var hand = new PokerHand('9s 9d 9c 9h 2s');
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});

/**
 * Full House test
 */
describe('Rank a Full House', function() {
  it('Return full House when hand given', function() {
    var hand = new PokerHand('Ad As Ac 7c 7h');
    assert.equal(hand.getRank(), 'Full House');
  });
});

/**
 * Flush test
 */
describe('Rank A Flush', function() {
  var hand = new PokerHand('3d 8d 6d Kd 10d');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

/**
 * Straight test
 */
describe('Rank a Straight', function() {
  it('Return straight when hand given', function() {
    var hand = new PokerHand('8h 7s 6d 9c 10s');
    assert.equal(hand.getRank(), 'Straight');
  });
});

/**
 * Three of a Kind test
 */
describe('Rank a Three of a Kind', function() {
  it('Return Three of a Kind when hand given', function() {
    var hand = new PokerHand('Kh Kc Ks 3h 2d');
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});

/**
 * Two Pair test
 */
describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'Two Pair');
  });
});

/**
 * One Pair test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});

/**
 * High Card test
 */
describe('Rank a High Card', function() {
  it('Return high card when hand given', function() {
    var hand = new PokerHand('2h 7d 8c Js 10h');

    assert.equal(hand.getRank(), 'High Card');
  });
});



