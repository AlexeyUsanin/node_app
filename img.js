const img = document.querySelector('img');

img.addEventListener('load', () => {
  console.log(`Width: ${img.clientWidth}; Height: ${img.clientHeight}`);
});

