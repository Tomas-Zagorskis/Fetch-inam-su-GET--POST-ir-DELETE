// 2.Kitame puslapyje pasirašykite formą, kuri pridės produktą. Pridėjus, išmes alert'ą, kad sėkmingai pridėtas ir nukreips (redirect) į pirminį produktų atvaizdavimo puslapį.

const itemImage = document.getElementById("image");
const itemTitle = document.getElementById("title");
const itemPrice = document.getElementById("price");
function addNewItem(img, title, price) {
  const data = {
    image: img,
    title: title,
    price: price,
  };
  fetch("https://golden-whispering-show.glitch.me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Sekmingai prideta!");
      window.location.replace("http://127.0.0.1:5500/index.html");
    })
    .catch((err) => console.log(err));
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const img = itemImage.value;
  const title = itemTitle.value;
  const price = itemPrice.value;
  addNewItem(img, title, price);
});
