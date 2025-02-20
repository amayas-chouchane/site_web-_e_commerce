const priceRange = document.querySelector('#priceRange');
const currentPrice = document.querySelector('#currentPrice');

const minPrice = 3000000; // prix minimum
const maxPrice = 30000000; // prix maximum

priceRange.addEventListener('input', () => {
  const rangeValue = parseInt(priceRange.value); // valeur de l'input range
  const priceRangeRatio = rangeValue / parseInt(priceRange.max); // ratio de l'input range
  const realPrice = minPrice + (maxPrice - minPrice) * priceRangeRatio; // calcul du prix réel

  currentPrice.textContent = `${realPrice.toFixed(2)} DA`; // affichage du prix réel avec 2 décimales
});