let firstCard = randomCard()
let SecondCard = randomCard()
let cards = [firstCard, SecondCard]
let sum = firstCard + SecondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent +=  cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if(sum <= 20){
        message= "You are in game"
    }else if(sum === 21){
        message = "You've got Blackjack"
        hasBlackJack = true
    }else{
        message = "You are out of game"
        isAlive = false
    }
    messageEl.textContent = message
}
function newcard(){
    let card = randomCard()
    sum += card
    cards.push(card)
    renderGame()
}
function randomCard(){
    let random = Math.floor(Math.random()*13) + 1
    return random
}