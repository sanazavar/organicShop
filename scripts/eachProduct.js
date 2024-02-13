const allProdutsData = [
  {
    id: 1,
    img: "images/coffee-asorted-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 720 ,
    count:1
  },
  {
    id: 2,
    img: "images/cashew-butter-500-400x400.jpg",
    category: "Groccery",
    name: "butter",
    rating: "",
    price: 156,
    count:1

  },
  {
    id: 3,
    img: "images/coffee-asorted-400x400.jpg",
    category: "Juice",
    name: "Astory ",
    rating: "",
    price: 320 ,
    count:1

  },
  {
    id: 4,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Diabet Coffee",
    rating: "",
    price: 117.25,
    count:1

  },
  {
    id: 5,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Coockie",
    rating: "",
    price: 456 ,
    count:1

  },
  {
    id: 6,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Juice",
    name: "Astory Coffee",
    rating: "",
    price: 32.95 ,
    count:1

  },
  {
    id: 7,
    img: "images/edible-oil-400x400.jpg",
    category: "Groccery",
    name: "edible oil",
    rating: "",
    price: 850 ,
    count:1

  },
  {
    id: 8,
    img: "images/eggs-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 46 ,
    count:1

  },
  {
    id: 9,
    img: "images/orage-juice-kariz-400x400.jpg",
    category: "Groccery",
    name: "Juice Karazi",
    rating: "",
    price: 556 ,
    count:1

  },
  {
    id: 10,
    img: "images/organic-products-home-hero.png",
    category: "Juice",
    name: "Free",
    rating: "",
    price: 46.5 ,
    count:1

  },
  {
    id: 11,
    img: "images/product11-free-img.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 156 ,
    count:1

  },

  {
    id: 12,
    img: "images/pulses-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 99 ,
    count:1

  },
  {
    id: 13,
    img: "images/red-chillies-400x400.jpg",
    category: "Juice",
    name: "Red Chillies",
    rating: "",
    price: 16 ,
    count:1

  },
  {
    id: 14,
    img: "images/sanitizer-400x400.jpg",
    category: "Groccery",
    name: "sanitizer",
    rating: "",
    price: 456 ,
    count:1

  },
  {
    id: 15,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
  },
  {
    id: 16,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
    count:1

  },
  {
    id: 17,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
    count:1

  },
  {
    id: 18,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
    count:1

  },
  {
    id: 19,
    img: "images/product11-free-img.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 156 ,
    count:1

  },
  {
    id: 20,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Coockie",
    rating: "",
    price: 456 ,
    count:1

  },
  {
    id: 21,
    img: "images/orage-juice-kariz-400x400.jpg",
    category: "Groccery",
    name: "Juice Karazi",
    rating: "",
    price: 556 ,
    count:1

  },
];
let $ = document;
let productContainer = $.querySelector(".product__wrapper");
let productImgElem = $.querySelector(".product__photo__img");
let productTileElem = $.querySelector(".product__title");
let productPriceElem = $.querySelector(".product__price");
let productCountInputElem=$.querySelector('.product__count')


// productCountInputElem.addEventListener('change',function(){
//   // console.log('hi')
//   productCountInputElem.innerHTML=
// })










let addProductBtn = $.querySelector(".product__adding__link");
let bacElem = $.querySelector(".back");

let userBasketArray = [];

function addtoUserBasketArray(productId) {

  let chosenUserProduct = allProdutsData.find(function (product) {
    return product.id == productId;
  });
  userBasketArray.push(chosenUserProduct);
  // console.log(userBasketArray)
  setLocalStorage(userBasketArray);
}

window.addEventListener("load", function () {
  let locationSearch = this.location.search;
  let locationSearchParam = new URLSearchParams(locationSearch);
  let idMainProduct = locationSearchParam.get("id");

  let mainEachProductId = allProdutsData.find(function (product) {
    return product.id == idMainProduct;
  });
  // console.log(mainEachProductId.id)
  //  url id

  if (mainEachProductId) {
    productTileElem.innerHTML = mainEachProductId.name;
    productPriceElem.innerHTML = mainEachProductId.price;
    productImgElem.setAttribute("src", mainEachProductId.img);
    productCountInputElem.setAttribute('value',1)


    let storedBasket = JSON.parse(localStorage.getItem('basket'));
    if (storedBasket) {
      userBasketArray = storedBasket;
    }else{
      userBasketArray=[]
    }
  }



  
  addProductBtn.addEventListener("click", function () {
    addtoUserBasketArray(mainEachProductId.id);
  });
});

bacElem.addEventListener("click", function () {
  history.back(-1);
});

function setLocalStorage(basketArrays) {
  localStorage.setItem("basket", JSON.stringify(basketArrays));
}

