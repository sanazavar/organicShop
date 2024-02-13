let $ = document;
let fullnameManagerInputElem = $.querySelector("#fullname__manager__input");
let emailManagerInputElem = $.querySelector("#email__manager__input");
let usernameManagerInputElem = $.querySelector("#username__manager__input");
let passwordManagerInputElem = $.querySelector("#password__manager__input");
let okayBtnElem=$.querySelector('#okbtn')

let managersNameArray = [
//   {
//     id: 1,  0

//     fullnamemanager: "sanaz",  1
//     emailmanager: "sanaz",  2
//     usernamemanager: "sanaz", 3
//     passwordmanager: "sanaz", 4
//     role:manager; 5
//   },
];


function addNewManager() {
  let newManagerObj = {
    id: managersNameArray.length + 1,
    fullnamemanager: fullnameManagerInputElem.value,
    emailmanager: emailManagerInputElem.value,
    usernamemanager: usernameManagerInputElem.value,
    passwordmanager: passwordManagerInputElem.value,
    role:"manager",
  };
  managersNameArray.push(newManagerObj)
  setLocalStorage(managersNameArray)
//   console.log(managersNameArray);

}

okayBtnElem.addEventListener('click',function(e){
    e.preventDefault()
    addNewManager()
    location.href="panelPage.html"
    console.log(managersNameArray)
})

function setLocalStorage(managerListArry){
    localStorage.setItem('managers',JSON.stringify(managerListArry))
}


