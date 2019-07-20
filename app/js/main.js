
const closeWidget = () => {
  const elem = document.getElementById('lightboxModal');
  elem.classList.add("close");
}

const initWidget = () => {
  const elem = document.getElementById('widgetCancelButton');
  elem.addEventListener("click", closeWidget);
}

initWidget();
