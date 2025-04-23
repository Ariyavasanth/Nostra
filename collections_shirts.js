let close = document.getElementById("close");
let offer_section = document.getElementById("offer-section");

let filter_icon = document.getElementById("filter");
let side_filter = document.getElementById("side-filter");
let side_filter_close = document.getElementById("side-filter-close");

//offer section
close.addEventListener("click", function () {
  offer_section.style.display = "none";
});

//side filter section open
filter_icon.addEventListener("click", function () {
  side_filter.style.left = "0";
});

//side filter section close
side_filter_close.addEventListener("click", function () {
  side_filter.style.left = "-60%";
});

//nav bar
let menu = document.getElementById("menu");
let side_nav_close = document.getElementById("side-nav-close");
let side_navbar = document.getElementById("side-navbar");

//open
menu.addEventListener("click", function () {
  side_navbar.style.left = "0";
});

//close
side_nav_close.addEventListener("click", () => {
  side_navbar.style.left = "-60%";
});

//products
// Product Data
const products = [
  {
    id: 1,
    name: "Floral Summer Shirt",
    src: "./assets/images/shirts/beach_shirts/f2.jpg",
    desc: "",
    price: 220,
    tags: ["new", "blue", "summer"],
  },
  {
    id: 2,
    name: "Summer Green",
    src: "./assets/images/shirts/beach_shirts/f4.jpg",
    desc: "",
    price: 260,
    tags: ["new", "green", "beach"],
  },
  {
    id: 3,
    name: "Party Floral Shirt",
    src: "./assets/images/shirts/beach_shirts/f5.jpg",
    desc: "",
    price: 399,
    tags: ["old", "red", "party"],
  },
  {
    id: 4,
    name: "Floral Summer Shirt",
    src: "./assets/images/shirts/party_shirts/f6.jpg",
    desc: "",
    price: 399,
    tags: ["old", "white", "beach"],
  },
  {
    id: 5,
    name: "Beach Shirt",
    src: "./assets/images/shirts/summer_shirts/f1.jpg",
    desc: "",
    price: 579,
    tags: ["old", "white", "beach"],
  },
  {
    id: 6,
    name: "Shirt Party Red",
    src: "./assets/images/shirts/party_shirts/f3.jpg",
    desc: "",
    price: 579,
    tags: ["old", "red", "party"],
  },
];

// Select the container element
var container = document.getElementById("products");

// Check if container exists

products.forEach((product) => {
  // Create a product card
  let createItem = document.createElement("div");
  createItem.classList.add("product");
  // createItem.classList.add("FlexGrow-2");

  // Add product details to the card
  createItem.innerHTML = `<div class="product-box ">
      <div class="product-image">
        <img  src="${product.src}" alt="${product.name}">
      </div>
      <div class="product-details">
        <h1>${product.name}</h1>
        <p>₹${product.price}</p>
        <span class="product-tags" data-tags="${product.tags.join(",")}"></span>

      </div>
      </div>`;

  // Append the card to the container
  container.append(createItem);
});

var filterList = [];
var tags = Array.from(document.getElementsByName("tags"));
console.log(tags);

tags.forEach((tag) => {
  tag.addEventListener("change", function (e) {
    if (e.target.checked) {
      filterList.push(e.target.value);
      console.log(filterList);
      update();
    } else {
      filterList = filterList.filter((item) => item !== e.target.value);
      update();
    }
  });
});

//update function
function update() {
  var productList = document.querySelectorAll(".product");
  for (var i = 0; i < productList.length; i++) {
    var check = false;
    var product = productList[i];
    console.log(product);
    var temp = product.querySelector(".product-tags").getAttribute("data-tags");


    console.log("element " + temp);

    const tempFilterArray = temp.split(",");

    console.log("tempfilterarray " + tempFilterArray);
    console.log("filterlist " + filterList);

    filterList.forEach((j) => {
      tempFilterArray.forEach((i) => {
        if (j == i) {
          check = true;
        }
      });
    });

    if (!check && filterList.length > 0) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  }
}
