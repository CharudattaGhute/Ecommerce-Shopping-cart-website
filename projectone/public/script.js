const product = [
  {
    id: 1,
    productname: "iphone 11",
    Des: "This is a smart phone",
    price: 30000,
    imgsrc: "image/iphone11.jpeg",
  },
  {
    id: 2,
    productname: "iphone 12",
    Des: "This is a smart phone with extra feature",
    price: 40000,
    imgsrc: "image/iphone12.jpeg",
  },
  {
    id: 3,
    productname: "iphone 12 pro",
    Des: "This is a smart phone with good camera quality",
    price: 45000,
    imgsrc: "image/ihone12 pro.webp",
  },
  {
    id: 4,
    productname: "iphone 13",
    Des: "This is a smart phone with good camera quality",
    price: 50000,
    imgsrc: "image/img13.webp",
  },
  {
    id: 5,
    productname: "iphone 14",
    Des: "This is a smart phone with good camera quality",
    price: 65000,
    imgsrc: "image/img14.avif",
  },
  {
    id: 6,
    productname: "iphone 15",
    Des: "This is a smart phone with good camera quality",
    price: 80000,
    imgsrc: "image/ihone15.jpeg",
  },
];

ContainerProducts = document.getElementById("ContainerProducts");

product.forEach((element) => {
  newProduct = document.createElement("div");
  newProduct.className = "card";
  newProduct.style.width = "18rem";
  newProduct.innerHTML = `<div class="card-body">
                            <img class="card-title" src="${element.imgsrc}"height="130px">
                            <h5 class="card-title">${element.productname}</h5>
                            <p class="card-text">${element.Des}</p>
                            <p class="card-text">${element.price}</p>
                            <a href="#" class="btn btn-primary" type="button" onclick="addToCart(${element.id});"> Add To Cart</a>
                            </div>`;
  ContainerProducts.appendChild(newProduct);
});

cart = [];

count = 0;

function showCartProducts() {
  var totalPrice = 0;
  showproduct = document.getElementById("showCartProducts");
  showproduct.innerHTML = "";
  cart.forEach((elmn) => {
    cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
                                <h4>${elmn.productname}</h4>
                                <p>${elmn.price}</p>`;
    showproduct.appendChild(cartProduct);
    console.log(showproduct);
    totalPrice += elmn.price;
    document.getElementById("totalPrice").innerHTML = totalPrice;
  });
}
function addToCart(id) {
  addedProduct = product.find((p) => p.id === id);
  console.log(addedProduct);
  if (!cart.some((p) => p.id === id)) {
    cart.push(addedProduct);
    document.getElementById("productCount").innerHTML = cart.length;
  }
  showCartProducts();
}
