let url = "https://13.51.121.126:9090/books/get";

const cardContainer = document.getElementById("cardContainer");

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        ihtml = "";
        for(item in data){
            ihtml += `
            <div class="card my-4 mx-4" style="width: 18rem;">
            <img src=${data[item].bookUrl}
              class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[item].bookName}</h5>
              <p class="card-text"><b>Auther: </b>${data[item].bookAuthor}</p>
              <p class="card-text"><b>Language: </b>${data[item].language}</p>
              <p class="card-text"><b>Rating: </b>${data[item].rating}</p>
              <p class="card-text"><b>Price$: </b>${data[item].bookPrice}</p>
              <p class="card-text"><b>Publish-On: </b>${data[item].publishDate}</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>
            `
        }
        cardContainer.innerHTML = ihtml;
    })
    .catch(error => {
        console.log(error);
    });
