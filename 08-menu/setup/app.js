const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Fluffy, golden-brown buttermilk pancakes served with butter and maple syrup.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Diner Double: Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `A monstrously delicious blend of vanilla ice cream, caramel, and chocolate sauce, topped with a chocolate Godzilla figurine.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `a hearty blend of traditional farm-fresh ingredients, perfect for satisfying your cravings for a taste of the countryside.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `A delicious combination of scrambled eggs with sautéed vegetables and bacon.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Rich and creamy Oreo ice cream with chunks of Oreo cookies.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `A hearty breakfast dish with crispy bacon, scrambled eggs, and hash browns.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `A cheeseburger with all the fixings and a side of fries.`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `A comforting bowl of homemade mac and cheese.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 36.99,
    img: "./images/item-10.jpeg",
    desc: ` A succulent 8 oz. steak cooked to perfection with a side of roasted vegetables.`,
  },
];

const secCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//loads items
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
    <header>
    <h4>${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">
    ${item.desc}
            </p>
          </div>
        </article>`;
  });

  //now we will join the displayMenu array
  displayMenu = displayMenu.join(""); //"" because else commas will be there when joining
  secCenter.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  //get unique buttons from array so to populate them dynamically
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
