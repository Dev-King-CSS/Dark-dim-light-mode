//* Selectors
const dark_button = document.querySelector(".dark")
const dim_button = document.querySelector(".dim")
const light_button = document.querySelector(".light")
const { body } = document // (Same as) const body = document.body

//! Dark Mode Function
const darkTheme = () => {
  body.classList.remove("light")
  body.classList.remove("dim")
  body.classList.add("dark")
}

//! Dim Mode Function
const dimTheme = () => {
  body.classList.remove("light")
  body.classList.remove("dark")
  body.classList.add("dim")
}

//! Light Mode Function
const lightTheme = () => {
  body.classList.remove("dark")
  body.classList.remove("dim")
  body.classList.add("light")
}

// Event Listeners
dark_button.addEventListener("click", darkTheme)
dim_button.addEventListener("click", dimTheme)
light_button.addEventListener("click", lightTheme)
