const allProdutsData = [
  {
    id: 1,
    img: "images/coffee-asorted-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 720 ,
    count: 1,
  },
  {
    id: 2,
    img: "images/cashew-butter-500-400x400.jpg",
    category: "Groccery",
    name: "butter",
    rating: "",
    price: 156 ,
    count: 1,
  },
  {
    id: 3,
    img: "images/coffee-asorted-400x400.jpg",
    category: "Juice",
    name: "Astory ",
    rating: "",
    price: 320 ,
    count: 1,
  },
  {
    id: 4,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Diabet Coffee",
    rating: "",
    price: 117.25 ,
    count: 1,
  },
  {
    id: 5,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Coockie",
    rating: "",
    price: 456 ,
    count: 1,
  },
  {
    id: 6,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Juice",
    name: "Astory Coffee",
    rating: "",
    price: 32.95 ,
    count: 1,
  },
  {
    id: 7,
    img: "images/edible-oil-400x400.jpg",
    category: "Groccery",
    name: "edible oil",
    rating: "",
    price: 850 ,
    count: 1,
  },
  {
    id: 8,
    img: "images/eggs-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 46 ,
    count: 1,
  },
  {
    id: 9,
    img: "images/orage-juice-kariz-400x400.jpg",
    category: "Groccery",
    name: "Juice Karazi",
    rating: "",
    price: 556 ,
    count: 1,
  },
  {
    id: 10,
    img: "images/organic-products-home-hero.png",
    category: "Juice",
    name: "Free",
    rating: "",
    price: 46.5 ,
    count: 1,
  },
  {
    id: 11,
    img: "images/product11-free-img.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 156 ,
    count: 1,
  },
  {
    id: 12,
    img: "images/pulses-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 99 ,
    count: 1,
  },
  {
    id: 13,
    img: "images/red-chillies-400x400.jpg",
    category: "Juice",
    name: "Red Chillies",
    rating: "",
    price: 16 ,
    count: 1,
  },
  {
    id: 14,
    img: "images/sanitizer-400x400.jpg",
    category: "Groccery",
    name: "sanitizer",
    rating: "",
    price: 456 ,
    count: 1,
  },
  {
    id: 15,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
    count: 1,
  },
  {
    id: 16,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
    count: 1,
  },
  {
    id: 17,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
    count: 1,
  },
  {
    id: 18,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
    count: 1,
  },
  {
    id: 19,
    img: "images/product11-free-img.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 156 ,
    count: 1,
  },
  {
    id: 20,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Coockie",
    rating: "",
    price: 456 ,
    count: 1,
  },
  {
    id: 21,
    img: "images/orage-juice-kariz-400x400.jpg",
    category: "Groccery",
    name: "Juice Karazi",
    rating: "",
    price: 556 ,
    count: 1,
  },
];

let basketContainer = document.querySelector(".products__wrapper");
let totalBasketPrice = document.querySelector(".pay__total__price");
let basketArray = [];

function RemoveProduct(productId) {
  basketArray = basketArray.filter(function (product) {
    return product.id !== productId;
  });
  basketProductGenerator(basketArray);
  calcTotalPrice(basketArray)

  setLocalStorage(basketArray);
}

function updateCountProduct(event) {
  console.log(event)
  let newCount=event.target.value
  let productId=event.target.id
  //  console.log(productId,newCount)
   basketArray.forEach(function(product){
    if(product.id===+productId){
      product.count=newCount
    }

   })

  calcTotalPrice(basketArray)
}

function basketProductGenerator(basketArray) {
  // create to dom
  basketContainer.innerHTML = "";

  basketArray.forEach(function (product) {
    basketContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="cart__products__wrapper"><div class="cart__product__img"><img src="' +
        product.img +
        '" style="width: 70px; height: 70px;" alt="" class="cart__product__img__photo"></div><div class="cart__product__name">' +
        product.name +
        '</div><div class="cart__product__price">' +
        product.price +
        '$</div><div class="cart__product__Quantity"><input type="number" value=1 style="width: 2.5rem; height: 2rem; padding: 0 0 0 .5rem;" min="1" max="5" onchange="updateCountProduct(event)" id='+product.id+'></div><div class="cart__product__Subtotal">1020$</div><div class="cart__product__Remove" onclick="RemoveProduct(' +
        product.id +
        ')">&times;</div></div>'
    );
  });

  calcTotalPrice(basketArray)

  /// تعداد محصولات
  console.log(basketArray.length)
}

function getLocalStorage() {
  let localStorageMem = JSON.parse(localStorage.getItem("mem"));
  let localStorageBasket = JSON.parse(localStorage.getItem("basket"));

  if (localStorageBasket) {
    basketArray = localStorageBasket;
  }

  basketProductGenerator(basketArray);
}

window.addEventListener("load", getLocalStorage);
function setLocalStorage(basketArrays) {
  localStorage.setItem("basket", JSON.stringify(basketArrays));
}

function calcTotalPrice(userBasketArray) {
  let totalPrice = 0;
  userBasketArray.forEach(function (product) {
    totalPrice += product.price * product.count;
  });
  totalBasketPrice.innerHTML=totalPrice
}
