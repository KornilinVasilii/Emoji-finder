// import { data } from "./emoji.js"

const cardsWrapper = document.querySelector('.cards')
const input = document.querySelector('input')


const data = await emojiHendler()

 async function emojiHendler() { 
  const response = await fetch('https://emoji.ymatuhin.workers.dev/') 
  const data = await response.json()
  return data
}

emojiHendler()

 const newData = doubleDelet(data)


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

  newData.forEach((elem) => { 
  cardsWrapper.append(creatCards(elem))
})


function searchData() { 
  const emj = newData.filter((el) =>
    el.title.toLowerCase().includes(input.value.trim().toLowerCase()) ||
    el.keywords.toLowerCase().includes(input.value.trim().toLowerCase())) 
  cardsWrapper.innerHTML = ''
  emj.forEach(e => cardsWrapper.append(creatCards(e))) 
}

function doubleDelet(data) { 
  return data.map((elem) => ({ ...elem, keywords: 
    [...new Set(elem.keywords.split(' '))].join(' ') }))
}

input.addEventListener('input', searchData)


