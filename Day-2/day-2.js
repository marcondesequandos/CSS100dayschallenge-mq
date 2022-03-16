const menuIcon = document.querySelector(".icon")
const div = document.querySelectorAll("div")

function toggleClass() {

  div.forEach((item)=> {
    if (item.className.includes('no-animation')) {
      item.classList.remove('no-animation')
    }

  })
  console.log(div)
  console.log(menuIcon)
}

menuIcon.addEventListener("click", toggleClass())
