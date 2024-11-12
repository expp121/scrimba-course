import {menuArray} from './data.js'

class Order{
    constructor(price=0,products=[]){
        this.price=price;
        this.products=products;
    }
    addProduct(id){
        this.price+=menuArray[id].price;
        this.products.push({name: menuArray[id].name, price:menuArray[id].price});
    }
    removeProduct(productName){
        for (let i = 0; i < order.products.length; i++) {
            if(productName === order.products[i].name){
                this.price-=order.products[i].price;
                this.products.splice(i,1);
                break
            }
        }
    }
}

const productContainer = document.getElementById("products-container")
const orderContainer = document.getElementById("order")
const purchasedProductsContainer = document.getElementById("purchased-products-container")

const order = new Order(0,[])

document.addEventListener('click',function(e) {
    const btnDataId  = e.target.dataset.id
    if (btnDataId){
        order.addProduct(btnDataId)
        renderToCart()
        order.products.length && orderContainer.classList.remove("hidden")
    }
    const productName = e.target.dataset.productName
    if (productName){
        order.removeProduct(productName)
        renderToCart()
        !order.products.length && orderContainer.classList.add("hidden")
    }

    if(e.target.id === "complete-order-btn"){
        document.getElementById("card-details").classList.remove("hidden")
    }else if(e.target.id === "close-modal"){
        document.getElementById("card-details").classList.add("hidden")
    }
})

document.addEventListener('submit', function(e){
    e.preventDefault()
    document.getElementById("card-details").classList.add("hidden")
    purchasedProductsContainer.innerHTML = `
    <p class='purchase-success'>Thanks, ${document.getElementById('name').value}! Your order is on its way!</p>`
    order.price=0
    order.products=[]
})

function renderToCart(){
purchasedProductsContainer.innerHTML= order.products.map(function(purchasedItem){
return `<div class="purchased-item">
            <p class="purchased-item-name">${purchasedItem.name}</p>
            <p class="purchased-item-remove" data-product-name="${purchasedItem.name}">remove</p>
            <p class="purchased-item-price">\$${purchasedItem.price}</p>
        </div>`
}).join('') +
        `<hr>
        <div class="purchase-total">
            <p>Total price:</p>
            <p id="purchase-total-price">$0</p>
        </div>
        <button id="complete-order-btn">Complete order</button>`
document.getElementById("purchase-total-price").textContent=`\$${order.price}`
}

function renderProducts(){
    productContainer.innerHTML = menuArray.map(function(menuItem) {
        return `<section class='product'>
                    <p class="product-img">${menuItem.emoji}</p>
                    <div class="product-info">
                        <h1>${menuItem.name}</h1>
                        <p class="product-info-ingredients">${menuItem.ingredients.join(',')}</p>
                        <p class="product-info-price">\$${menuItem.price}</p>
                    </div>
                    <button class="add-to-cart-btn" data-id="${menuItem.id}">+</button>
                </section>
                `
    }).join('')
}
renderProducts()