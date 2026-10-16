/* activity 1 */

const shopName = "KD's anikssories";
const currentYear = new Date().getFullYear();

let productCount = 0;

document.getElementById("shopName").textContent = shopName;
document.getElementById("copyrightLine").textContent = `© ${currentYear} ${shopName}`;

const productCards = document.querySelectorAll(".product-card");
productCount = productCards.length;

document.getElementById("productCount").textContent = productCount;

console.log('Shop Name:', shopName);
console.log('Current Year:', currentYear);
console.log('Copyright:', copyrightLine.textContent);
console.log('Number of Products:', productCount);
