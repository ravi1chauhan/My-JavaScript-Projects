console.log("Welcome to My Project, Creating a News Website");

// Initialize the news api parameters
let source = "the-times-of-india";
let apiKey = "40775fe4f59145e9aa5da5471c8b5a0c";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element, index) {
      // console.log(element, index);
      let news = `<div class="card">
                    <div class="card-header" id="heading${index}">
                      <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="false" aria-controls="collapse${index}">
                        <b>Breaking News ${index+1}:</b> ${element["title"]}
                      </button>
                      </h2>
                    </div>

                    <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                      <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a> </div>
                      </div>
                  </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();