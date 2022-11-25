import { data } from "./emoji.js"

// console.log(data)
// const container = document.querySelectorAll('.container')
// console.log(container)
// container[1].append(creatCards()) 
// container[1].append(creatCards()) 
// container[1].append(creatCards()) 
// container[1].append(creatCards()) 
// container[1].append(creatCards()) 
// container[1].append(creatCards()) 

const cardsWrapper = document.querySelector('.cards')

function creatCards(obj) { 
  const card = document.createElement('div')
  const emoji = document.createElement('p')
  const ftitle = document.createElement('p')
  const subtitle = document.createElement('p')
  card.className = 'emoji_cards'
  emoji.className = 'emoji__cards_img'
  ftitle.className = 'emoji__cards_title'
  subtitle.className = 'emoji__cards_subtitle'
  
  emoji.textContent = obj.symbol
  ftitle.textContent = obj.title
  subtitle.textContent = obj.keywords
  
  card.append(emoji)
  card.append(ftitle)
  card.append(subtitle)
 
  return card
}
console.log(cardsWrapper);


data.forEach((elem) => { 
  cardsWrapper.append(creatCards(elem))
})


 