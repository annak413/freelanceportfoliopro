const btnDarkMode = document.querySelector('.dark-mode-btn')

//1. Chek dark mode System settings
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
   btnDarkMode.classList.add('dark-mode-btn--active')
   document.body.classList.add('dark')
}

//2. Chek dark mode LocalStorage
if (localStorage.getItem('darkMode') === 'dark') {
   btnDarkMode.classList.add('dark-mode-btn--active')
   document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
   btnDarkMode.classList.remove('dark-mode-btn--active')
   document.body.classList.remove('dark')
}

//3.Changes in system settings, accordingly changing the theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
   const newColorScheme = event.matches ? 'dark' : 'ligh'
  
   if (newColorScheme === 'dark') {
      btnDarkMode.classList.add('dark-mode-btn--active')
      document.body.classList.add('dark')
      localStorage.setItem('darkMode', 'dark')
   } else {
      btnDarkMode.classList.remove('dark-mode-btn--active')
      document.body.classList.remove('dark')
      localStorage.setItem('darkMode', 'ligt')
   }
})

//4. Dark mode btn
btnDarkMode.onclick = function() {
   btnDarkMode.classList.toggle('dark-mode-btn--active')
   const isDark = document.body.classList.toggle('dark')

   if (isDark) {
      localStorage.setItem('darkMode', 'dark')
   } else {
      localStorage.setItem('darkMode', 'light')
   }
}