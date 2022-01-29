if (window.location.hash === "#login") {
  document.querySelector(".popup-login").style.display = "flex";
} else {
  document.querySelector(".popup-login").style.display = "none";
  document.querySelector(".overlay").classList.remove('active');
}

window.addEventListener("popstate", function (e) {
  e.preventDefault();
  const currentHash = this.document.location.hash;
  if (currentHash === "#login") {
    document.querySelector(".popup-login").style.display = "flex";
    document.querySelector(".overlay").classList.add('active');
  } else {
    document.querySelector(".popup-login").style.display = "none";
    document.querySelector(".overlay").classList.remove('active');
  }
});

document
  .querySelector(".popup-login__btn-close")
  .addEventListener("click", (e) => {
    document.querySelector(".popup-login").style.display = "none";
    document.querySelector(".overlay").classList.remove('active');
    history.pushState('', document.title, window.location.pathname);
    e.preventDefault(); 
  });


  document.querySelector('.popup-login__btn').addEventListener('click' , (e) =>{
    e.preventDefault();
  })