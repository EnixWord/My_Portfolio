// const openNav = () => {
//   document.getElementById('myNav').style.width = '100%';
// };

// const closeNav = () => {
//   document.getElementById('myNav').style.width = '0%';
// };
const projects = [
  {
    name: 'Tonic',
    des: ['Canopy', 'backend', '2015'],
    img: './images/Snapshoot Portfolio.svg',
    description:
    'Personal portfolio that contains project information, skills, and contact',
    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://enixword.github.io/My_Portfolio/ ',
    sourceCode: 'https://github.com/EnixWord/My_Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    des: ['Canopy', 'backend', '2015'],
    img: './images/Snapshoot Portfolio (1).svg',
    description: 'Personal portfolio that contains project information, skills, and contact',
    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://enixword.github.io/My_Portfolio/ ',
    sourceCode: 'https://github.com/EnixWord/My_Portfolio',
  },
  {
    name: 'Facebook 360',
    des: ['Canopy', 'backend', '2015'],
    img: './images/Snapshoot Portfolio (2).svg',
    description:
    'Personal portfolio that contains project information, skills, and contact',
    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://enixword.github.io/My_Portfolio/ ',
    sourceCode: 'https://github.com/EnixWord/My_Portfolio',
  },
  {
    name: 'Uber Navigation',
    des: ['Canopy', 'backend', '2015'],
    img: './images/Snapshoot Portfolio (3).svg',
    description:
    'Personal portfolio that contains project information, skills, and contact',
    desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    technologies1: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://enixword.github.io/My_Portfolio/ ',
    sourceCode: 'https://github.com/EnixWord/My_Portfolio',
  },
];

const workpage = document.querySelector('#workpage');
for (let i = 0; i < projects.length; i += 1) {
  workpage.innerHTML += `
  <div class="project-card flex column">
  <img src="${projects[i].img}" alt="project card image" />
  <div class="prject-card-info flex column">
    <h2 class="project-title">${projects[i].name}</h2>
    <div class="project-meta flex">
      <p class="bold">${projects[i].des[0]}</p>
      <div class="round"></div>
      <p>${projects[i].des[1]}</p>
      <div class="round"></div>
      <p>${projects[i].des[2]}</p>
    </div>
    <div class="project-note">
      <p>
      ${projects[i].description}
      </p>
    </div>
    <div class="project-tag">
      <ul class="project-skills flex">
        <li>${projects[i].technologies[0]}</li>
        <li>${projects[i].technologies[1]}</li>
        <li>${projects[i].technologies[2]}</li>
      </ul>
    </div>
    <button type="button" id="btn-${i}">See Project</button>
  </div>
  `;
}

const modal = document.getElementById('modal1');

for (let j = 0; j < projects.length; j += 1) {
  const seeBtn = document.querySelectorAll(`[id=btn-${j}]`);
  seeBtn.forEach((bt) => {
    bt.addEventListener('click', () => {
      modal.style.display = 'block';
      modal.innerHTML = `
      <div class="popup-container block-popup">
      <div id="popup-modal" class="pop-content">
        <div class="headline-popup">
          <h1>${projects[j].name}</h1>
          <a href="#" role="button" onclick="closePopup()">
            <div class="popup-clsbtn">x</div>
          </a>
        </div>
      </div>
      <ul class="small-tags">
        <li class="canopy-sm-tag">${projects[j].des[0]}</li>
        <li>
          <div class="round-popup"></div>
        </li>
        <li class="second-sm-tag">${projects[j].des[1]}</li>
        <li>
          <div class="round-popup"></div>
        </li>
        <li class="second-sm-tag">${projects[j].des[2]}</li>
      </ul>
      <div class="popup-image-container">
        <img src="${projects[j].img}" alt="pop-image" />
      </div>
      <div class="buttom-content-container">
        <div class="paragraph-description">
          <p class="paragraph-description-desktop">
            ${projects[j].desc1}
          </p>
        </div>
        <div class="action-content">
          <div class="popup-tags">
            <ul class="first">
            <li>${projects[j].technologies[0]}</li>
            <li>${projects[j].technologies[1]}</li>
            <li>${projects[j].technologies[2]}</li>
            </ul>
            <ul class="second">
            <li>${projects[j].technologies1[0]}</li>
            <li>${projects[j].technologies1[1]}</li>
            <li>${projects[j].technologies1[2]}</li>
            </ul>
          </div>
          <div class="divider-popup">
            <img src="./images/Vector 4.png" alt="Divider popup" />
          </div>
          <div class="popup-button-action">
            <button type="submit">
              <div class="source-code">
                <a href="">See live </a>
              </div>
              <div class="deploy-icon">
                <img src="./images/deploy.svg" alt="deployment icon" class="deploy-icon-popup" />
              </div>
            </button>
            <button class="submit-github">
              <div class="live-version">
                <a href="">See Source </a>
              </div>
              <div class="github-img">
                <img src="./images/github-popup.svg" alt="github icon" class="github-icon-popup" />
              </div>

            </button>
          </div>
        </div>
      </div>
    </div>
      `;

      const closeBtn = document.querySelector('.popup-clsbtn');
      closeBtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
      });
    });
  });
}

// ---------------------------Contact form validation---------------------
const formContact = document.getElementById('form');

function validateEmail() {
  const email = document.getElementById('email').value;
  const error = document.getElementById('errorMessage');
  if (email.toLowerCase() !== email) {
    error.innerHTML = 'Please enter your email in lowercase';
    error.style.display = 'block';
    error.style.color = '#FFFF';
    error.style.fontSize = 'larger';
    return false;
  }
  document.getElementById('errorMessage').innerHTML = '';
  return true;
}

formContact.addEventListener('submit', validateEmail);

// -----------------------Local storage --------------------
window.onload = function storage() {
  const fullName = document.getElementById('fullname');
  const email = document.getElementById('email');
  const textMessage = document.getElementById('message');

  // retrieve data from local storage
  fullName.value = localStorage.getItem('fullName');
  email.value = localStorage.getItem('Email');
  textMessage.value = localStorage.getItem('textMessage');

  function saveToLocalStorage() {
    // store data when user enters a new data
    localStorage.setItem('fullName', fullName.value);
    localStorage.setItem('Email', email.value);
    localStorage.setItem('textMessage', textMessage.value);
  }

  // store data when user changes an existing data
  fullName.addEventListener('input', saveToLocalStorage);
  email.addEventListener('input', saveToLocalStorage);
  textMessage.addEventListener('input', saveToLocalStorage);
};

// --------------------store the data collected in an object in the local storage--------------
window.onload = function objectStorage() {
  const fullName = document.getElementById('fullname');
  const email = document.getElementById('email');
  const textMessage = document.getElementById('message');

  // Create an object to store the data
  let data = {
    fullName: '',
    email: '',
    textMessage: '',
  };

  // Retrieve data from local storage
  data = JSON.parse(localStorage.getItem('formData')) || data;

  // Set the values of the form elements to the retrieved data
  fullName.value = data.fullName;
  email.value = data.email;
  textMessage.value = data.textMessage;

  function saveToLocalStorage() {
    // Update the data object with the values from the form elements
    data.fullName = fullName.value;
    data.email = email.value;
    data.textMessage = textMessage.value;

    // Save the data object to local storage
    localStorage.setItem('formData', JSON.stringify(data));
  }

  // Store data when user changes an existing data
  fullName.addEventListener('input', saveToLocalStorage);
};
