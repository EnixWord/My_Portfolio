openNav = () => {
  document.getElementById("myNav").style.width = "100%";
};

closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
};
const project = {
  name: 'portfolio',
  description:
    'Personal portfolio that contains project information, skills, and contact',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  liveVersion: 'https://enixword.github.io/My_Portfolio/ ',
  sourceCode: 'https://github.com/EnixWord/My_Portfolio',
};

const buttonPopup = document.querySelector("button");
const modalPopup = document.querySelector(".block-popup");
function Display() {
  modalPopup.style.display = "block";
}

function closePopup() {
  modalPopup.style.display = "none";
}
