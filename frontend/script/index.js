async function query() {
  let query = document.getElementById("query").value;
  let url = `https://orbitz-ujjawal-api.herokuapp.com/airports?q=${query}`;
  let responce = await fetch(url);
  let data = await responce.json();
  

  console.log(data);
  append(data, query);
}

let id;
function debouncing(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

function append(data, query) {
  let container = document.getElementById("container");
  let display = document.getElementsByClassName("search_box_third")
  display.innerHTML =null


  if (query == "") {
    return container.innerHTML = null;
  }
  container.innerHTML = null;
  data.forEach(function (el) {
    let div = document.createElement("div");
    div.style.boderbottom = "1px solid black"
    div.style.cursor = "pointer"
    div.addEventListener("click", function () {
      localStorage.setItem("searchQuery", JSON.stringify(query));
    });

    let h3 = document.createElement("h5");
    h3.innerText = `${el.name} (${el.city})`;
    let p = document.createElement("p");
    p.innerText = el.state;
    div.append(h3, p);
    container.append(div);
  });
}
