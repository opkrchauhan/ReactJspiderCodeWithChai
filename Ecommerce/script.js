let fetching = async () => {
  let resp = await fetch(`https://fakestoreapi.com/products`);
  let data = await resp.json();
  console.log(data);
}
fetching();

let card = document.querySelector('#mainDiv')