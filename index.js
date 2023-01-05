openNav = () => {
  document.getElementById(
    'myNav',
  ).style.width = '100%';
};
closeNav = () => {
  document.getElementById(
    'myNav',
  ).style.width = '0%';
};
const buttonPopup = document.querySelector('button');
const modalPopup = document.querySelector('.block-popup');
function Display(){
  modalPopup.style.display = 'block';
}
function closePopup(){
  modalPopup.style.display = 'none';
}