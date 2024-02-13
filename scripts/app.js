let bestProductsData = [
  {
    id: 1,
    img: "images/coffee-asorted-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 456 ,
  },
  {
    id: 2,
    img: "images/cashew-butter-500-400x400.jpg",
    category: "Groccery",
    name: "butter",
    rating: "",
    price: 156 ,
  },
  {
    id: 4,
      img: "images/diabetic-cookies-400x400.jpg",
      category: "Groccery",
      name: "Diabet Coffee",
      rating: "",
      price: 117.25 ,
  },

];

// basketIcon.style.content = "'" + "x".repeat(arrayLength) + "'";


let $ = document;
let navMobileBars = $.querySelector(".nav__bars");
let mobileMenuList = $.querySelector(".mobile__menu__nav");
let bestProductsContainer = $.querySelector(".best__products");
let iconBasketAfterElem=$.querySelector('.icon__basket')
// iconBasketAfterElem.content=34
function showMobileMenu() {
  mobileMenuList.classList.toggle("mobile__menu__nav--open");
  navMobileBars.classList.toggle("nav__bars--open");
}

navMobileBars.addEventListener("click", showMobileMenu);

bestProductsData.forEach(function (product) {
  bestProductsContainer.insertAdjacentHTML(
    "beforeend",
    '<div class="best__product"><div class="best__product__photo"><a href="eachProduct.html?id='+product.id+'" class="best__product__photo__link"><img src=' +
      product.img +
      ' alt=""></a></div><p class="best__product__category">' +
      product.category +
      '</p><p class="best__product__name">' +
      product.name +
      '</p><div class="best__product__rate"><img src="images/icons/icons8-star-24.png" alt=""><img src="images/icons/icons8-star-24.png" alt=""><img src="images/icons/icons8-star-24.png" alt=""><img src="images/icons/icons8-star-24.png" alt=""><img src="images/icons/icons8-star-24.png" alt=""></div><span class="best__product__price">' +
      product.price +
      "$</span></div>"
  );
});

window.addEventListener('load',getLocalStorage)

function getLocalStorage() {
  let localStorageBasket = JSON.parse(localStorage.getItem("basket"));
  let basketProductCount=localStorageBasket.length
  console.log(iconBasketAfterElem)


  if(basketProductCount>=1){

    iconBasketAfterElem.style.content ="'"+basketProductCount+"'"

  }

}
