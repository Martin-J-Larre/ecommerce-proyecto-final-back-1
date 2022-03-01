// ---------------Login
const $registerButton = document.querySelector(".registerButton");
$registerButton.addEventListener("click", () => {
	window.location.pathname = "/register";
});

//-----------------Form
//! Add products
const form = document.querySelector(".addProductForm");

form.addEventListener("submit", async (e) => {
	e.preventDefault();

//--Get input values
	const title = e.target.querySelector("#title").value;
	const price = e.target.querySelector("#price").value;
	const imageUrl = e.target.querySelector("#imageUrl").value;
	const stock = e.target.querySelector("#stock").value;
	const newProduct = { title: title, price: price, imageUrl: imageUrl, stock: stock };

	try {
		await fetch("/products/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
		form.reset();
	} catch (err) {
		console.log(err);
	}
});
