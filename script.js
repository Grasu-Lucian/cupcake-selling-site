const filter = Array.from(document.querySelectorAll(".fillter"));
const display = Array.from(document.querySelectorAll(".display"));
const options=document.querySelector('.fa-bars')
const det=document.querySelector('.options1')
filter.forEach((filter) => {
  filter.addEventListener("click", Filter);
});
function Filter(e) {
  let item = e.target;
  let context = item.textContent;
  switch (context) {
    case "All":
      display.forEach((display) => {
        display.style.display = "grid";
      });
      break;
    case "Cake":
      display.forEach((display) => {
        let name = display.querySelector(".name").textContent;
        if (name !== `${context} Item`) {
          display.style.display = "none";
        } else {
          display.style.display = "grid";
        }
      });
      break;
    case "Cupcake":
      display.forEach((display) => {
        let name = display.querySelector(".name").textContent;
        if (name !== `${context} Item`) {
          display.style.display = "none";
        } else {
          display.style.display = "grid";
        }
      });
      break;
    case "Sweets":
      display.forEach((display) => {
        let name = display.querySelector(".name").textContent;
        if (name !== `${context} Item`) {
          display.style.display = "none";
        } else {
          display.style.display = "grid";
        }
      });
      break;
    case "Doughnut":
      display.forEach((display) => {
        let name = display.querySelector(".name").textContent;
        if (name !== `${context} Item`) {
          display.style.display = "none";
        } else {
          display.style.display = "grid";
        }
      });
      break;
  }
}
const search = document.querySelector(".search");

search.addEventListener("keyup", () => {
  const searchFilter = document.querySelector('.search').value.toLowerCase().trim();
  display.forEach((display) => {
    let x=display.querySelector(".name").textContent.toLowerCase();
    if(x.includes(searchFilter)){
        display.style.display = 'grid'
    }
    else{
        display.style.display = 'none'
    }
  });
});
options.addEventListener('click',()=>{
  console.log('e')
  if(det.style.display ==='none') {det.style.display ='flex'}
 else{det.style.display ='none'}
})