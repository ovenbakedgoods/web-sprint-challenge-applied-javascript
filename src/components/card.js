import axios from 'axios'
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
//console.log(article)
  //article.forEach(e => {
    
    
    //console.log(e)
   // e[1].forEach(x => {
     //console.log(article)
      const card = document.createElement('div')
      const headLine = document.createElement('div')
      const author = document.createElement('div')
      const imgCon = document.createElement('div')
      const authorimg = document.createElement('img')
      const authorname = document.createElement('span')

      card.appendChild(headLine)
      card.appendChild(author)
      author.appendChild(imgCon)
      imgCon.appendChild(authorimg)
      author.appendChild(authorname)

      card.classList.add('card')
      headLine.classList.add('headline')
      author.classList.add('author')
      imgCon.classList.add('img-container')
      //console.log(article)
      authorimg.setAttribute('src', article.authorPhoto)
      //console.log(article.headline)
      //console.log('hello world')
      headLine.textContent = article.headline
      authorname.textContent = article.authorName
      card.addEventListener('click', () => {
      console.log(article.headline)
      })
      //console.log(card)
      return card
   // })
  //})



}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const entryPoint = document.querySelector(selector)
  //console.log(document.body.querySelector(selector))
  //console.log(entryPoint)
  var sortable = [];
  axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res => {
      //console.log(res.data.topics.length)
      //console.log(res.data.articles)
      for (let piece in res.data.articles) {
        sortable.push([piece, res.data.articles[piece]]);
        //console.log(piece)
        for(let x in res.data.articles[piece])
        {
           const anewcard = Card(res.data.articles[piece][x])
           entryPoint.appendChild(anewcard)
        }
      }
    })
    .catch(err => {
      console.log(err)
    });
}
export { Card, cardAppender }
