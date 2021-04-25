const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
async function getJackets() {
console.log()

try {
const response = await fetch('https://api.skole.tech/wp-json/wc/store/products/lookup.php?i=' + id);
const jsonResults = await response.json();
const value = jsonResults[0];

document.title = jsonResults;
document.querySelector('main').innerHTML += `
<div>
<img class="#" src="${value.image.src}" />
<h1>WHY DOSENT THIS WORK OMG</h1>
<h2>${value.name}</h2>
</div>
`;
} catch (error) {
} finally {
}
}
getJackets(id);