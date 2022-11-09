
//event one: image appears

let city = document.querySelector('button');
let popup = document.querySelector('.popup');

popup.style.display = "none";

city.onclick = showAndHide;

function showAndHide() {
  if (popup.classList.contains('showing')) {

    popup.style.display = 'none';

    popup.classList.remove('showing');
  } else {

    popup.style.display = 'block';

    popup.classList.add('showing');
  }
}

//event two: mouse over -> image change
const image = document.querySelector("#nice img");

let nice = "images/Nice.jpeg";
let nice2 = "images/Nice2.jpeg";


image.onmouseenter = (e) => {
   e.target.setAttribute('src', nice2);
};

image.onmouseleave = (e) => {
   e.target.setAttribute('src', nice);
};
