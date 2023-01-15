var allFilters = document.getElementsByClassName('filter');
var allBrandsDivs = document.getElementsByClassName('product');
for (let filter of allFilters) {
    filter.addEventListener("click", filterCategory);
}

function filterCategory() {
    var currInput = this;
    var brand = currInput.value;
    var divsOfBrand = document.getElementsByClassName(brand);
    if (currInput.checked) {
        for (let div of divsOfBrand) {
            div.style.display = "none";
        }
    } else {
        for (let div of divsOfBrand) {
            div.style.display = "block";
        }
    }
}

function filterCategory() {
    var currInput = this;
    var brand = currInput.value;

}