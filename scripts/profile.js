let $ = document;

let usernamInputElem = $.querySelector(".username__input");
let passwordInputElem = $.querySelector(".password__input");
let checkboxInputElem = $.querySelector(".checkbox__input");
let loginBtn = $.querySelector(".login__submit");
let loginSubmitElem=$.querySelector('.login__submit')

let allUsersData = [{ id: 1, userName: "sanaz", password: "12345Sa@!" }];

function addNewMember() {
  let newMemObj = {
    id: allUsersData.length + 1,
    userName: usernamInputElem.value,
    passwordInputElem: passwordInputElem.value,
  };
  allUsersData.push(newMemObj);
  setLocalStorageMember(allUsersData)
  location.href='http://127.0.0.1:5501/index.html'
  console.log(allUsersData);
}

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addNewMember();
});



// function checkIsManager(){
//   if()
// }

function setLocalStorageMember(memArray){
    localStorage.setItem('mem',JSON.stringify(memArray))
}
// 
