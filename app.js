var quotes =[
  "Be yourself; everyone else is already taken -Oscar Wilde",
  "So many books, so little time -Frank Zappa", 
  "You only live once, but if you do it right, once is enough -Mae West",
  "A friend is someone who knows all about you and still loves you ― Elbert Hubbard",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that -Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
  "The world is full of magic things, patiently waiting for our senses to grow sharper. W.B. Yeats",
]
function newQuote() {
 // alert('hello')
var randNum = Math.floor(Math.random()*quotes.length)
 document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}