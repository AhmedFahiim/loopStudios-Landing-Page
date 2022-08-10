let bar = document.querySelector(".bars");
let link = document.getElementById("mainLinks");

bar.onclick = () => {
  link.classList.toggle("active");
};
