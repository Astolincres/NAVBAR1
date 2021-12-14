const sections = document.querySelector('.navbar__div');
const sectionText = document.querySelector('.section__text');
const sectionElements = Array.from(sections.children);


sections.addEventListener('click', (e)=> {
  if (!e.target.classList.contains('link')) {
    return;
  }
  sectionElements.forEach((section) => {
    section.classList.remove('here');
  })
  e.target.classList.add('here');
  sectionText.textContent = e.target.textContent;
  
});



const check = ()=> {
  sectionElements.forEach((element) => {
    if(window.location.hash === element.hash) {
      element.classList.add('here');
      sectionText.textContent = element.textContent;
      return
    };
  });
};


window.addEventListener('hashchange', check());
