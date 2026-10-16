/* activity 1 */

const shopName = "KD's anikssories";
const currentYear = new Date().getFullYear();

let productCount = 0;

const shopNameSl = document.getElementById("shopName");
if (shopNameSl) {
    shopNameSl.textContent = shopName;
}

const copyrightFooter = document.getElementById("copyrightLine");
if (copyrightFooter) {
    copyrightFooter.textContent = `© ${currentYear} ${shopName}`;
}

const productCountPl = document.getElementById("productCount");
if (productCountPl) {
    const productCards = document.querySelectorAll(".product-card");
    productCount = productCards.length;
}

/* activity 2
1. stocks */

const stockCount = 20;

let stockStatus;
if (stockCount > 10) {
    stockStatus = "In stock";
} else if (stockCount >= 2.5) {
    stockStatus = "Only a few left";
} else {
    stockStatus = "Sold out";
}

const stockStatusSl = document.getElementById("stockStatus");
if (stockStatusSl) {
    stockStatusSl.textContent = stockStatus;
}


/* 2. delivery */

const orderTotal = 1000; 
const isMember = true;

const isFreeDelivery = orderTotal >= 1000 && isMember === true;
const deliveryFee = isFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryLabelDl = document.getElementById("deliveryLabel");
if (deliveryLabelDl) {
    deliveryLabelDl.textContent = `Php ${finalTotal}`;
}

/* 3. open/close */

const isShopOpen = true;
const shopStatus =  isShopOpen ? "Open today" : "Closed today";

const shopStatusLabelSl = document.getElementById("shopStatusLabel");
if (shopStatusLabelSl) {
    shopStatusLabelSl.textContent = shopStatus;
}

console.log('Shop Name:', shopName);
console.log('Current Year:', currentYear);
console.log('Copyright:', copyrightFooter.textContent);
console.log('Number of Products:', productCount);
console.log('Stocks:', stockStatus);
console.log('Order Total:', orderTotal);
console.log('Delivery Fee:', deliveryFee);
console.log('FinalTotal:', finalTotal);
console.log('Shop Operation:', shopStatus);
