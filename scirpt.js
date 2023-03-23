const a = document.querySelector("a");
console.log(a);
a.setAttribute("href", "https://www.google.co.th/?hl=th");
a.setAttribute("target", "blank");

const result = {
  first_name: "worapon",
  last_name: "phongpaitoon",
};
const fullname = `${result.first_name}${result.last_name}`;

const p = document.querySelector("p");
p.innerHTML = fullname;
//`` Grave Access
