
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDescription = document.getElementById('productDescription');
var addProductBtn = document.getElementById('ADD');
var Inputs = document.getElementsByClassName('form-control');

var producSmlName = document.getElementById('sml-Name');
var producSmlPrice = document.getElementById('sml-Price');
var producSmlCategory = document.getElementById('sml-Cat');
var producSmlDescription = document.getElementById('sml-desc');

var products = [];

if (localStorage.getItem("ourProducts") != null) {
    products = JSON.parse(localStorage.getItem("ourProducts"));
    displayData();
}


function GetProdect() {
    addProduct();
    displayData();

}
function addProduct() {
    if (Vailedname(productName.value) && VailedPrice(productPrice.value)
        && VailedCategory(productCategory.value)) {
        var product = {
            name: productName.value,
            Price: productPrice.value,
            Category: productCategory.value,
            Description: productDescription.value,
        }
        if (addProductBtn.innerHTML != "Updata Product") {
            products.push(product);
        }

        else {
            products[addProductBtn.value] = product;
            addProductBtn.innerHTML = "Add Product ";
            addProductBtn.className = 'btn btn-outline-info';

        }

        console.log(products);
        clearForm();
    }
    else {
        window.alert("Unvailed Data you enter ..")

    }

}

function updataProdect(index) {
    productName.value = products[index].name
    productPrice.value = products[index].Price
    productCategory.value = products[index].Category
    productDescription.value = products[index].Description
    addProductBtn.innerHTML = "Updata Product";
    addProductBtn.className = 'btn btn-outline-warning';
    addProductBtn.value = index;
}
function deleteProdect(index) {
    products.splice(index, 1);
    displayData();

}
function displayData() {
    var trs = "";
    for (let i = 0; i < products.length; i++) {
        trs += ` <tr>
    <th scope="row ">${i + 1}</th>
    <td>${products[i].name}</td>
    <td>${products[i].Price}</td>
    <td>${products[i].Category}</td>
    <td>${products[i].Description}</td>
    <td>    
    <button class=" btn btn-outline-warning  " onclick="updataProdect(${i})">Updata </button>
    </td><td>   
          <button class=" btn btn-outline-danger " onclick="deleteProdect(${i})">Delete </button>
    
    </td>
    </tr>`
    }
    document.getElementById('tbodyData').innerHTML = trs;
    localStorage.setItem("ourProducts", JSON.stringify(products));
}
function clearForm() {
    for (let i = 0; i < Inputs.length; i++) {
        Inputs[i].value = "";
    }
}

function search(term) {
    var trs = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(term.toLowerCase())) {
            trs += ` <tr>
    <th scope="row ">${i + 1}</th>
    <td>${products[i].name}</td>
    <td>${products[i].Price}</td>
    <td>${products[i].Category}</td>
    <td>${products[i].Description}</td>
    <td>   
    <button class=" btn btn-outline-warning   " onclick="updataProdect(${i})">Updata </button>
    </td>
    <td>   
          <button class=" btn btn-outline-danger " onclick="deleteProdect(${i})">Delete </button>
   
    </td>
    </tr>`
        }

        document.getElementById('tbodyData').innerHTML = trs;
    }



}





function Vailedname(term) {

    var regexName = /^[a-zA-Z]{3,6}$/;
    if (regexName.test((term))) {
        producSmlName.innerHTML = " productName must be char only  ";
        producSmlName.className = "text-muted";

        return true;
    }
    else {
        producSmlName.innerHTML = "Enter Vailed Name Must be 3-5 Char";
        producSmlName.className = "text-danger";

        return false;
    }
}

function VailedPrice(term) {

    var regexPrice = /^\d+(\.\d{1,2})?$/;
    if (regexPrice.test((term))) {
        producSmlPrice.innerHTML = " productPrice must be 2 digits after  .     ";
        producSmlPrice.className = "text-muted";
        return true;
    }
    else {
        producSmlPrice.innerHTML = "Enter Vailed Price Must be 2 digits after  .  ";
        producSmlPrice.className = "text-danger";
        return false;
    }
}

function VailedCategory(term) {

    var regexCat = /^(\b\w{2,7}\b\s)?\b\w{1,7}\b$/;
    if (regexCat.test(term)) {
        producSmlCategory.innerHTML = " producCategory must be char ";
        producSmlCategory.className = "text-muted";

        return true;
    }
    else {
        producSmlCategory.innerHTML = "Enter Vailed  Category at  Must bt  3-20 char";
        producSmlCategory.className = "text-danger";
        return false;
    }
}

// function VailedDescription(term) {

//     var regexDes = /^.{10, }$/;
//     if (regexDes.test(term)) {
//         producSmlDescription.innerHTML = " producSmlDescription must be char only  ";
//         producSmlDescription.className = "text-muted";
//         return true;
//     }
//     else
//     {
//         producSmlDescription.innerHTML = "Enter Vailed Name Must be 3  Char at less ";

//         producSmlDescription.className = "text-danger";
//         return false;
//     }
// }