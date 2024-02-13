let $ = document;
let usersLinkElem = $.querySelector(".users__link");
let informationsLinkElem = $.querySelector(".informations__link");
let ProductsLinkElem = $.querySelector(".Products__link");

let informationMainTitleElems = $.querySelector(".information__main__title");
let detailsTitleElem = $.querySelector(".details__title");
let informatinsWrapper = $.querySelector(".informatins__wrapper");

let teamsTitle = $.querySelector(".teams__title");
let teamsInformationElem = $.querySelector(".teams__information");
let addNewMemberTeamLink = $.querySelector(".add__new__memberTeam__link");
let adddNewMemberModal = $.querySelector(".addd__new__member__modal");
let leftMenuUpLinkpRroducts=$.querySelector('.left__menu__up__link')

let adminMemsArray = [
  {
    // id: 1,
    // name:"ali",
    // role:'admin'
    //img:,
    //des:,
  },
];

let managersNameArray = [
  //   {
  //     id: 1, 0
  //     fullnamemanager: "sanaz", 1
  //     emailmanager: "sanaz", 2
  //     usernamemanager: "sanaz", 3
  //     passwordmanager: "sanaz", 4
  //     role:manager; 5
  //   },
];

/* teams */

let newMemName = $.querySelector('#new__mem__name__input');

let newMemRole = $.querySelector("#new__mem__role__input");

let newMemPhoto = $.querySelector("#new__mem__photo__input__file");

let newMemInfo = $.querySelector("#new__mem__moreInfo");

let newMemAdd = $.querySelector(".new__mem__link__add");

let newMemCloseWin = $.querySelector(".new__mem__link__close");

/* teams */

/* ur informations */
let urName=$.querySelector('.ur__detaisl__name__input')
let urFamily=$.querySelector('.ur__detaisl__family__input')
let urUsername=$.querySelector('.ur__detaisl__username__input')
let urEmail=$.querySelector('.ur__detaisl__email__input')
let currentPass=$.querySelector('.current__pass__input')
/* ur informations */

window.addEventListener('load',function(){

let  mymanagersArray = JSON.parse(localStorage.getItem('managers'));
urName.value=mymanagersArray[1]
console.log(mymanagersArray[1]) /*  output=undifined ????? */

})




let tstImg=document.querySelector('.testimg')

function newAdmin() {
  let newAdminMemsObj = {
    id: adminMemsArray.length + 1,
    name: newMemName.value,
    role: newMemRole.value,
    img: newMemPhoto.file,
    // img: null,

    des: newMemInfo.value, // maybe innerhtml
  };

  adminMemsArray.push(newAdminMemsObj)
  setLocalStorage(adminMemsArray)
/* نمیفهمم */

  let file = document.getElementById('new__mem__photo__input__file').files[0];
  let reader = new FileReader();
  
  reader.onload = function(e) {
    let imageAddress = e.target.result;
    newAdminMemsObj.img = imageAddress;
    
    adminMemsArray.push(newAdminMemsObj);
    // ...
  };
  
  reader.readAsDataURL(file);
//   reader.readAsDataURL(input.files[0]);
tstImg.src = adminMemsArray[0].img

/* نمیفهمم */
console.log(imageAddress ) ///////
}

newMemAdd.addEventListener('click',newAdmin)
function setLocalStorage(newAdminListArray){
    localStorage.setItem('newAdmin',JSON.stringify(newAdminListArray))
  
}

/* 
   <><><><>Products link balaei asli<><><><><><

*/

let productsLinks=$.querySelector('.products__links')
let productsDisplay=$.querySelector('.Products__display')

let ProductsLink=$.querySelector('.Products__link')


ProductsLink.addEventListener('click',function(){
  productsDisplay.classList.toggle('displayNone')
})



usersLinkElem.addEventListener("click", function () {
  informationMainTitleElems.classList.toggle("displayNone");
});
detailsTitleElem.addEventListener("click", function () {
  informatinsWrapper.classList.toggle("displayBlock");
});

teamsTitle.addEventListener("click", function () {
  teamsInformationElem.classList.toggle("displayBlock");
});
addNewMemberTeamLink.addEventListener("click", function () {
  adddNewMemberModal.classList.toggle("displayFlex");
});




let spanCross=$.querySelector('.close__new__mem')
let modalAddteamsWapper=$.querySelector('.addd__new__member__modal')

spanCross.addEventListener('click',function(){
  modalAddProductWapper.remove() /*  close pink window */
})




/* 
   <><><><>Products link balaei asli<><><><><><

*/



// function getLocalStorage() {
//      storedNames = JSON.parse(localStorage.getItem("managers"));
// }


/*  get img from input  */

//let input = document.querySelector('.add__product__img');
//let files = input.files;

//  let reader = new FileReader();
//  reader.onload = function(e) {
//    let image = new Image();
//    image.src = e.target.result;
//    image.onload = function() {
// برای نمایش تصویر در صفحه، می توانید از این تصویر استفاده کنید
// مثال: document.body.appendChild(image);

// برای ذخیره تصویر در آرایه، می توانید از کد زیر استفاده کنید
//  let imageData = {
//    name: files[0].name,
//    data: e.target.result
//  };
//  let imagesArray = [];
//  imagesArray.push(imageData);

// در اینجا می توانید آرایه را استفاده یا به سرور ارسال کنید
//};
//};
//reader.readAsDataURL(files[0]);

/*  get img from input  */
