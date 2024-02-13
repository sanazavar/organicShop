const allProdutsData = [
  {
    id: 1,
    img: "images/coffee-asorted-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 720 ,
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
    id: 3,
    img: "images/coffee-asorted-400x400.jpg",
    category: "Juice",
    name: "Astory ",
    rating: "",
    price: 320 ,
  },
  {
    id: 4,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Diabet Coffee",
    rating: "",
    price: 117.25 ,
  },
  {
    id: 5,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Coockie",
    rating: "",
    price: 456 ,
  },
  {
    id: 6,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Juice",
    name: "Astory Coffee",
    rating: "",
    price: 32.95 ,
  },
  {
    id: 7,
    img: "images/edible-oil-400x400.jpg",
    category: "Groccery",
    name: "edible oil",
    rating: "",
    price: 850 ,
  },
  {
    id: 8,
    img: "images/eggs-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 46 ,
  },
  {
    id: 9,
    img: "images/orage-juice-kariz-400x400.jpg",
    category: "Groccery",
    name: "Juice Karazi",
    rating: "",
    price: 556 ,
  },
  {
    id: 10,
    img: "images/organic-products-home-hero.png",
    category: "Juice",
    name: "Free",
    rating: "",
    price: 46.5 ,
  },
  {
    id: 11,
    img: "images/product11-free-img.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 156 ,
  },
  {
    id: 12,
    img: "images/pulses-400x400.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 99 ,
  },
  {
    id: 13,
    img: "images/red-chillies-400x400.jpg",
    category: "Juice",
    name: "Red Chillies",
    rating: "",
    price: 16 ,
  },
  {
    id: 14,
    img: "images/sanitizer-400x400.jpg",
    category: "Groccery",
    name: "sanitizer",
    rating: "",
    price: 456 ,
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
  },
  {
    id: 17,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
  },
  {
    id: 18,
    img: "images/wheat-400x400.jpg",
    category: "Juice",
    name: "wheat",
    rating: "",
    price: 540 ,
  },
  {
    id: 19,
    img: "images/product11-free-img.jpg",
    category: "Groccery",
    name: "Astory Coffee",
    rating: "",
    price: 156 ,
  },
  {
    id: 20,
    img: "images/diabetic-cookies-400x400.jpg",
    category: "Groccery",
    name: "Coockie",
    rating: "",
    price: 456 ,
  },
  {
    id: 21,
    img: "images/orage-juice-kariz-400x400.jpg",
    category: "Groccery",
    name: "Juice Karazi",
    rating: "",
    price: 556,
  },
];
let $ = document;
let listAllProductsContainer = document.getElementById("productsContainer");

let paginationContainer = document.querySelector("#pagination");

let filterInputElem = $.querySelector(".filter__range");
let minValueTextFilter = $.querySelector(".filter__min_value");
let manValueTextFilter = $.querySelector(".filter__max_value");

let GrocoriesNavLink = $.querySelector("#Grocories");
let JuiceNavLink = $.querySelector("#Juice");

let currentPage = 1;
let rowsCount = 9;

function displayAllProducts(
  allProductsArray,
  productsContainer,
  rowsCount,
  currentPage
) {
  productsContainer.innerHTML = "";
  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let paginatedProduct = allProductsArray.slice(startIndex, endIndex);
  // console.log(paginatedProduct)
  paginatedProduct.forEach(function (product) {
    listAllProductsContainer.insertAdjacentHTML(
      "beforeend",
      ' <div class="col-12 col-sm-6 col-lg-4 "><div class="sideProducts__wrapper" id="sideProducts__wrapper"> <div class="best__product"><div class="best__product__photo"><a href="eachProduct.html?id='+product.id+'" class="best__product__photo__link"><img src=' +
        product.img +
        ' alt="" style="width: 200px; height: 200px;"></a></div><p class="best__product__category">' +
        product.category +
        '</p><p class="best__product__name">' +
        product.name +
        '</p><span class="best__product__price">' +
        product.price +
        "$</span></div></div></div> "
    );
  });
}


// console.log()

function setupPagination(allProductsArray, pagsContainer, rowsCount) {
  pagsContainer.innerHTML = "";
  let pageCount = Math.ceil(allProductsArray.length / rowsCount);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationBtnGenerator(i, allProductsArray);
    pagsContainer.appendChild(btn);
  }
}

function paginationBtnGenerator(page, allProductsArray) {
  let button = document.createElement("button");
  button.innerHTML = page;
  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentPage = page;
    displayAllProducts(
      allProductsArray,
      listAllProductsContainer,
      rowsCount,
      currentPage
    );
    let prevButtn = $.querySelector("button.active");
    prevButtn.classList.remove("active");

    button.classList.add("active");
  });
  return button;
}

displayAllProducts(
  allProdutsData,
  listAllProductsContainer,
  rowsCount,
  currentPage
);
setupPagination(allProdutsData, paginationContainer, rowsCount);

window.addEventListener("load", function () {
  let locationSearch = this.location.search;
  let locationSearchParam = new URLSearchParams(locationSearch);
  let idNavLink = locationSearchParam.get("id");


  let filterdProduct = allProdutsData.filter(function (product) {
    return product.category === idNavLink;
  });
  // console.log(filterdProduct)

  if (filterdProduct.length) {
    // اگر عضوی داشته باشد
    displayAllProducts(
      filterdProduct,
      productsContainer,
      rowsCount,
      currentPage
    );
    setupPagination(filterdProduct, paginationContainer, rowsCount);
  } else {
    // اگر عضوی نداشته باشد

    displayAllProducts(
      allProdutsData,
      listAllProductsContainer,
      rowsCount,
      currentPage
    );
    setupPagination(allProdutsData, paginationContainer, rowsCount);
  }

});


