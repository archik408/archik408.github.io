'use strict';

// Fabric methods

function createArticle(film) {

  return $('<article>').append([
    createHeader(film.header),
    createDetails(film.details),
    createFooter(film.footer)
  ]);

  // Native JS code
  //
  // var article = document.createElement('article');
  //
  // article.appendChild(createHeader(film.header));
  // article.appendChild(createDetails(film.details));
  // article.appendChild(createFooter(film.footer));
  //
  // return article;
}

function createHeader(header) {
  var titleParts = header.title.split(':');

  return $('<header>').append(
    $('<h1>').append(
      $('<a>')
        .attr('href', header.url)
        .append([
          $('<mark>').text(titleParts[0]),
          ':' + titleParts[1]
        ])
    )
  );

  // Native JS code
  //
  // var section = document.createElement('header');
  //
  // var anchor = document.createElement('a');
  // anchor.setAttribute('href', header.url);
  //
  // var titleParts = header.title.split(':');
  // var mark = document.createElement('mark');
  //
  // mark.appendChild(document.createTextNode(titleParts[0]));
  // anchor.appendChild(mark);
  // anchor.appendChild(document.createTextNode(':' + titleParts[1]));
  //
  // section.appendChild(document.createElement('h1')).appendChild(anchor);
  //
  // return section;

  // HTML code
  //
  // <header>
  //     <h1>
  //       <a href="page1.html">
  //         <mark>Властелин колец</mark>
  //         : Возвращение Короля
  //       </a>
  //     </h1>
  // </header>
}

function createDetails(details) {
  return $('<div>')
    .attr('class', 'movie-description')
    .append([
      $('<figure>').html('<img src="' + details.poster + '" /><figcaption>Обложка фильма</figcaption>'),
      $('<div>').append([
        $('<section>').html('<h1>Описание</h1><p>' + details.description + '</p>'),
        $('<section>').html('<h1>Актеры</h1><p>' + details.actors + '</p>'),
      ])
    ]);

  // Native JS code
  //
  // var section = document.createElement('div');
  // section.setAttribute('class', 'movie-description');
  //
  // var poster = document.createElement('figure');
  // poster.innerHTML =
  //   '<img src="' +
  //   details.poster +
  //   '" />' +
  //   '<figcaption>Обложка фильма</figcaption>';
  //
  // var text = document.createElement('div');
  // var description = document.createElement('section');
  // description.innerHTML = '<h1>Описание</h1><p>' + details.description + '</p>';
  // var actors = document.createElement('section');
  // actors.innerHTML = '<h1>Актеры</h1><p>' + details.actors + '</p>';
  // text.appendChild(description);
  // text.appendChild(actors);
  //
  // section.appendChild(poster);
  // section.appendChild(text);
  //
  // return section;

  // HTML code
  //
  // <div class="movie-description">
  //   <figure>
  //     <img src="assets/images/img1.jpg" />
  //     <figcaption>
  //       Обложка фильма
  //     </figcaption>
  //   </figure>
  //   <div>
  //     <section>
  //         <h1>Описание</h1>
  //         <p>
  //             Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя спасения Средиземья.
  //             Повелитель сил Тьмы Саурон направляет свои бесчисленные рати под стены Минас-Тирита, крепости Последней Надежды.
  //         </p>
  //     </section>
  //     <section>
  //         <h1>Актеры</h1>
  //         <p>
  //             Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл
  //         </p>
  //     </section>
  //   </div>
  // </div>
}

function createFooter(footer) {
  return $('<footer>').append([
    $('<strong>').text('Год:'),
    $('<time>')
      .attr('datetime', footer.time)
      .text(' ' + footer.time.split('-')[0]),
    ',',
    $('<strong>')
      .text(' Оценка ')
      .append([
        $('<abbr>')
          .attr('aria-label', 'Internet Movie Database')
          .text('IMDb')
          .append(
            $('<span>')
              .attr('aria-hidden', true)
              .attr('class', 'tooltip')
              .text('Internet Movie Database')
          ),
          ':'
      ]),
    ' ' + footer.imdb.estimate,
    $('<small>').text(' (' + footer.imdb.add + ') '),
    ',',
    $('<strong>').text(' Бюджет:'),
    ' ' + footer.budget + ',',
    $('<strong>').text(' Страна:'),
    ' ' + footer.country
  ]);


  // Native JS code
  //
  // var section = document.createElement('footer');
  //
  // var paragraph = document.createElement('p');
  //
  // /* Год */
  // var year = document.createElement('strong');
  // year.textContent = 'Год:';
  //
  // var time = document.createElement('time');
  // time.setAttribute('datetime', footer.time);
  // time.textContent = ' ' + footer.time.split('-')[0];
  //
  // /* Оценка */
  // var estimate = document.createElement('strong');
  // estimate.textContent = ' Оценка ';
  //
  // var abbr = document.createElement('abbr');
  // abbr.setAttribute('aria-label', 'Internet Movie Database');
  // var tooltip = document.createElement('span');
  // tooltip.setAttribute('aria-hidden', true);
  // tooltip.setAttribute('class', 'tooltip');
  // tooltip.textContent = "Internet Movie Database";
  // abbr.appendChild(document.createTextNode('IMDb'));
  // abbr.appendChild(tooltip);
  // estimate.appendChild(abbr);
  // estimate.appendChild(document.createTextNode(':'));
  //
  // var additional = document.createElement('small');
  // additional.textContent = ' (' + footer.imdb.add + ') ';
  //
  // /* Бюджет */
  // var budget = document.createElement('strong');
  // budget.textContent = ' Бюджет:';
  //
  // /* Страна */
  // var country = document.createElement('strong');
  // country.textContent = ' Страна:';
  //
  // section.appendChild(year);
  // section.appendChild(time);
  // section.appendChild(document.createTextNode(','));
  // section.appendChild(estimate);
  // section.appendChild(document.createTextNode(' ' + footer.imdb.estimate));
  // section.appendChild(additional);
  // section.appendChild(document.createTextNode(','));
  // section.appendChild(budget);
  // section.appendChild(document.createTextNode(' ' + footer.budget + ','));
  // section.appendChild(country);
  // section.appendChild(document.createTextNode(' ' + footer.country));
  //
  // return section;

  // HTML code
  //
  // <footer>
  //     <p>
  //         <strong>Год:</strong> <time datetime="2003-12-23">2003</time>,
  //         <strong>
  //           Оценка
  //           <abbr aria-label="Internet Movie Database">IMDb
  //             <span aria-hidden="true" class="tooltip">Internet Movie Database</span>
  //           </abbr>
  //              :
  //         </strong> 8.90 <small>(1 349 172)</small>,
  //         <strong>Бюджет:</strong> $94 000 000,
  //         <strong>Страна:</strong> США
  //     </p>
  // </footer>
}


// window.onload = function () {
$(document).ready(function () {

   var main = $('main');
  // var main = document.querySelector('main');
  // var main = document.getElementsByTagName('main')[0];

  // var searchResults = [
  //   {
  //     "header": {
  //       "title": "Властелин колец: Возвращение Короля",
  //       "url": "page1.html"
  //     },
  //     "details": {
  //       "poster": "assets/images/img1.jpg",
  //       "description": "Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя спасения Средиземья. Повелитель сил Тьмы Саурон направляет свои бесчисленные рати под стены Минас-Тирита, крепости Последней Надежды.",
  //       "actors": "Элайджа Вуд, Вигго Мортенсен, Шон Эстин, Иэн МакКеллен, Орландо Блум, Доминик Монахэн, Билли Бойд, Энди Серкис, Миранда Отто, Бернард Хилл"
  //     },
  //     "footer": {
  //       "time": "2003-12-23",
  //       "imdb": {
  //         "estimate": "8.90",
  //         "add": "1 349 172"
  //       },
  //       "budget": "$94 000 000",
  //       "country": "США"
  //     }
  //   },
  //   {
  //     "header": {
  //       "title": "Властелин колец: Две крепости",
  //       "url": "page2.html"
  //     },
  //     "details": {
  //       "poster": "assets/images/img3.jpg",
  //       "description": "Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены доверить свои жизни Голлуму, который взялся провести их к вратам Мордора. Громадная Армия Сарумана приближается: члены братства и их союзники готовы принять бой.",
  //       "actors": "Элайджа Вуд, Шон Эстин, Орландо Блум, Вигго Мортенсен, Иэн МакКеллен, Доминик Монахэн, Миранда Отто, Джон Рис-Дэвис, Энди Серкис, Билли Бойд"
  //     },
  //     "footer": {
  //       "time": "2002-12-23",
  //       "imdb": {
  //         "estimate": "8.70",
  //         "add": "1 221 214"
  //       },
  //       "budget": "$94 000 000",
  //       "country": "США"
  //     }
  //   },
  //   {
  //     "header": {
  //       "title": "Властелин колец: Братство кольца",
  //       "url": "page3.html"
  //     },
  //     "details": {
  //       "poster": "assets/images/img1.jpg",
  //       "description": "Сказания о Средиземье — это хроника Великой войны за Кольцо, войны, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал власть над всеми живыми тварями, но был обязан служить злу.",
  //       "actors": "Элайджа Вуд, Иэн МакКеллен, Вигго Мортенсен, Шон Бин, Орландо Блум, Джон Рис-Дэвис, Иэн Холм, Шон Эстин, Билли Бойд, Доминик Монахэн"
  //     },
  //     "footer": {
  //       "time": "2001-12-23",
  //       "imdb": {
  //         "estimate": "8.80",
  //         "add": "1 389 831"
  //       },
  //       "budget": "$93 000 000",
  //       "country": "США"
  //     }
  //   }
  // ];

  // for (var i = 0; i < searchResults.length; i++) {
  //   main.append(createArticle(searchResults[i]));
  // }


  $.getJSON('/assets/scripts/results.json', function(data) {
    for (var i = 0; i < data.searchResults.length; i++) {
      main.append(createArticle(data.searchResults[i]));
    }
  })
  .fail(function(error) {
    console.error(error, 'Error loading JSON');
  });
  // var request = new XMLHttpRequest();
  // request.open('GET', '/assets/scripts/results.json', true);
  // request.onreadystatechange = function () {
  //   if (request.readyState == 4) {
  //     if(request.status == 200) {
  //       var response = JSON.parse(request.responseText);
  //       var searchResults = response.searchResults;
  //
  //       for (var i = 0; i < searchResults.length; i++) {
  //         main.append(createArticle(searchResults[i]));
  //       }
  //       // main.appendChild(createArticle(searchResults[0]));
  //       // main.appendChild(createArticle(searchResults[1]));
  //       // main.appendChild(createArticle(searchResults[2]));
  //
  //     } else {
  //       console.error(request.status, 'Error loading JSON');
  //     }
  //   }
  // };
  // request.send(null);

  // var MyTagProto = Object.create(HTMLElement.prototype);
  //
  // MyTagProto.attachedCallback = function () {
  //   this.style = "color: blue;";
  //   var template = document.querySelector('#my-tag');
  //   var clone = document.importNode(template.content, true);
  //   var strongText = this.getAttribute('strong');
  //
  //   if (strongText) {
  //     var strong = clone.querySelector('strong');
  //     strong.textContent = strongText;
  //   }
  //
  //   this.appendChild(clone);
  // }
  //
  // document.registerElement('my-tag', { prototype: MyTagProto });
});
