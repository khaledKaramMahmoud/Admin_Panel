var addProduct = document.getElementById('addProduct');
var addseller = document.getElementById('addseller');
var products = document.getElementById('products');
var soldProducts = document.getElementById('soldProducts');
var problems = document.getElementById('problems');

var sectionAddPro = document.getElementById('sectionAddPro');
var sectionSeller = document.getElementById('sectionSeller');
var sectionProducts = document.getElementById('sectionProducts');
var sectionShowPro = document.getElementById('sectionShowPro');
var sectionSoldPro = document.getElementById('sectionSoldPro');
var sectionProblems = document.getElementById('sectionProblems');

addProduct.onclick = function() {
    sectionAddPro.style.display = 'unset'
    sectionSeller.style.display = 'none'
    sectionProducts.style.display = 'none'
    sectionShowPro.style.display = 'none'
    sectionSoldPro.style.display = 'none'
    sectionProblems.style.display = 'none'

    soldProducts.style.background = 'white'
    soldProducts.style.color = '#152569'
    addProduct.style.background = '#152569'
    addProduct.style.color = 'white'
    problems.style.background = 'white'
    problems.style.color = '#152569'
    products.style.background = 'white'
    products.style.color = '#152569'
    addseller.style.background = 'white'
    addseller.style.color = '#152569'
}


addseller.onclick = function() {
    sectionAddPro.style.display = 'none'
    sectionSeller.style.display = 'unset'
    sectionProducts.style.display = 'none'
    sectionShowPro.style.display = 'none'
    sectionSoldPro.style.display = 'none'
    sectionProblems.style.display = 'none'

    soldProducts.style.background = 'white'
    soldProducts.style.color = '#152569'
    addseller.style.background = '#152569'
    addseller.style.color = 'white'
    problems.style.background = 'white'
    problems.style.color = '#152569'
    products.style.background = 'white'
    products.style.color = '#152569'
    addProduct.style.background = 'white'
    addProduct.style.color = '#152569'
}
products.onclick = function() {
    sectionAddPro.style.display = 'none'
    sectionSeller.style.display = 'none'
    sectionProducts.style.display = 'unset'
    sectionShowPro.style.display = 'none'
    sectionSoldPro.style.display = 'none'
    sectionProblems.style.display = 'none'


    soldProducts.style.background = 'white'
    soldProducts.style.color = '#152569'
    products.style.background = '#152569'
    products.style.color = 'white'
    problems.style.background = 'white'
    problems.style.color = '#152569'
    addseller.style.background = 'white'
    addseller.style.color = '#152569'
    addProduct.style.background = 'white'
    addProduct.style.color = '#152569'
}
soldProducts.onclick = function() {
    sectionAddPro.style.display = 'none'
    sectionSeller.style.display = 'none'
    sectionProducts.style.display = 'none'
    sectionShowPro.style.display = 'none'
    sectionSoldPro.style.display = 'unset'
    sectionProblems.style.display = 'none'

    soldProducts.style.background = '#152569'
    soldProducts.style.color = 'white'
    problems.style.background = 'white'
    problems.style.color = '#152569'
    products.style.background = 'white'
    products.style.color = '#152569'
    addseller.style.background = 'white'
    addseller.style.color = '#152569'
    addProduct.style.background = 'white'
    addProduct.style.color = '#152569'
}
problems.onclick = function() {
    sectionAddPro.style.display = 'none'
    sectionSeller.style.display = 'none'
    sectionProducts.style.display = 'none'
    sectionShowPro.style.display = 'none'
    sectionSoldPro.style.display = 'none'
    sectionProblems.style.display = 'unset'

    problems.style.background = '#152569'
    problems.style.color = 'white'
    soldProducts.style.background = 'white'
    soldProducts.style.color = '#152569'
    products.style.background = 'white'
    products.style.color = '#152569'
    addseller.style.background = 'white'
    addseller.style.color = '#152569'
    addProduct.style.background = 'white'
    addProduct.style.color = '#152569'

}
var sellerIcon = document.getElementById('toggleSellerPass');
var sellerPass = document.getElementById('sellerPass');

sellerIcon.onclick = function() {
    if (sellerPass.type == "password") {
        sellerPass.type = "text";
    } else {
        sellerPass.type = "password";
    }
}

var backToPro = document.getElementById('backToPro');
var product1 = document.getElementById('product1');
backToPro.onclick = function() {

    sectionProducts.style.display = 'unset'
    sectionShowPro.style.display = 'none'
}
product1.onclick = function() {

    sectionProducts.style.display = 'none'
    sectionShowPro.style.display = 'unset'
}