const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://newsapi.org/v2/top-headlines?'+'country=mx&'+'apiKey=13f8c711183c43c1b74dd5912de8310a', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.articles.forEach(noticia => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = noticia.title;

      const p = document.createElement('p');
      if(noticia.description!=null){
      noticia.description = noticia.description;
      p.textContent = `${noticia.description}...`}
      else{
      noticia.url = noticia.url;
      p.textContent = `${noticia.url}...`;}

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `ALGO SALIO MAL`;
    app.appendChild(errorMessage);
  }
}

request.send();
