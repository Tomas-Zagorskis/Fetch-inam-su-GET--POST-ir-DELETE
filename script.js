// 1.Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę):

fetch("https://golden-whispering-show.glitch.me")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((result) => {
      document.querySelector(".item-list").innerHTML += `<div class="item-card">
        <img src="${result.image}" alt="Item photo" class="img" />
        <p class="item-title">${result.title}</p>
        <h2 class="text-red">${result.price} Eur</h2>
        <button id="${result.id}">Delete</button>
      </div>`;
    });
    // 3.Padarykite, kad paspaudus delete mygtuką - back-end'ui būtų išsiunčiamas Fetch Delete Request (baseURL + /:id). T.y. į url turėsite paduoti produkto ID parametrą (pvz.: DELETE baseURL/1 ištrins pirmą įrašą).

    document.querySelectorAll(".item-card button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.id;
        // 4. Padarykite, kad ištrynus produktą - puslapis persikrautų. Taip nėra labai efektyvu - pagalvokite, kokiais kitais būdais galima būtų pasiekti šį rezultatą? Hint: gavus success message iš back-end'o filtruoti duomenis ir ištrinti su front-end'u irgi.

        btn.parentElement.style.display = "none";
        fetch(`https://golden-whispering-show.glitch.me/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        })
          .then((res) => res.json())
          .then(() => alert("Delete successful"));
      });
    });
  })
  .catch((e) => console.log(e.message));
