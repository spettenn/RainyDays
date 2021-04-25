async function getJackets() {
	try {
		const response = await fetch('https://api.skole.tech/wp-json/wc/store/products');
		const jacketArray = await response.json();
		console.log(jacketArray);

		jacketArray.forEach(function (value) {
			document.querySelector('section').innerHTML += `
            <div class="card">
            <div><img src="${value.images.src}"/></div>
            <div>
                    <h3>${value.name}</h3>
                    <p id="prices">£${value.prices.price}</p>
                    <a id="Vproduct" href="details.html?id=${value.id}">View Product</a> 
                </div>
            </div>
        `;
		});
	}
    catch(error){

    }
    finally{} 
}

getJackets();