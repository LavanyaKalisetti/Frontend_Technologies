// let h = document.getElementById("head");
// let m = document.getElementById("main");
// let f = document.getElementById("foot");

// let mainDiv = document.getElementById("mainDiv");

// //////////////// header section /////////////////

// let headPara = document.createElement("p");
// headPara.classList.add("headPara");
// headPara.textContent = "Welcome to the Quote on click";

// h.append(headPara);

// //////////////// body section ///////////////////

// let btn = document.createElement("button");
// btn.classList.add("btn","btn-primary");
// btn.textContent = "click me to get the quote";
// btn.addEventListener("click", randomQuotes);

// // let butn = document.createElement("span");
// // butn.appendChild(btn);
// m.appendChild(btn);

// function randomQuotes() {
//   mainDiv.innerHTML = "";

//   fetch("https://dummyjson.com/quotes/random")
//     .then((response) => response.json())
//     .then((res) => {
//       let quotes = document.createElement("p");
//       let titleA = document.createElement("h2")
//       titleA.textContent="Author:-"
//       let titleQ = document.createElement("h2")
//       titleQ.textContent="Quote:-"

//       let q= document.createElement("p")
//       q.textContent = `${res.quote}`;
//       let a=document.createElement("p");
//       a.textContent=`${res.author}.`
//       let br = document.createElement("br")
//       quotes.append(titleQ,q,titleA,a)
//       mainDiv.appendChild(quotes);
//     })
//     .catch((err) => {
//       alert("There is an error: " + err.message);
//     });
// }


/////////////// footer section ///////////////////


const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

fetchBtn.addEventListener('click', fetchData);

function fetchData() {
    fetch('(link unavailable)')
        .then(response => response.json())
        .then(data => {
            const html = data.map(post => {
                return `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
            }).join('');
            dataContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}


