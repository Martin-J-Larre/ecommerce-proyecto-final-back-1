const $registerButton = document.querySelector(".registerButton");

$registerButton.addEventListener("click", () => {
	window.location.pathname = "/register";
});

const $goToLoginButton = document.querySelector(".goToLoginButton");

$goToLoginButton.addEventListener("click", () => {
	window.location.pathname = "/login";
});
