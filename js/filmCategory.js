const menuList = document.querySelector("#filmItem");
const item = document.querySelector("#listBlock");

const menuOpen = () => {
  item.style.display = "block";
};
const menuClose = () => {
  item.style.display = "none";
};

menuList.addEventListener("mouseover", menuOpen);
item.addEventListener("mouseout", menuClose);
menuList.addEventListener("mouseout", menuClose);
