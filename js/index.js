const state = {
  hamburger: {
    listVisibility: false
  }
};

const toggleListVisibilityState = (state) => {
  state.hamburger.listVisibility = ! state.hamburger.listVisibility;
}

const hideListVisibilityState = (state) => {
  state.hamburger.listVisibility = false;
}

const toggleListVisibility = (state) => {
  const hamburgerList = document.querySelector('.hamburger-list');

  const listVisibility = state.hamburger.listVisibility;

  if (listVisibility) {
    hamburgerList.style.display = 'inherit';
    return;
  }

  hamburgerList.style.display = 'none';
}

const toggleHamburger = () => {
  const hamburgerButton = document.querySelector('.hamburger-button');

  hamburgerButton.addEventListener('click', () => {
    toggleListVisibilityState(state);
    toggleListVisibility(state);
  });

  window.addEventListener('mouseup', function(event){
    try {
      const tryGetTheElement = document.querySelector(`.hamburger-menu .${event.target.className}`);
    } catch (error) {
      hideListVisibilityState(state);
      toggleListVisibility(state);
    }
  });
}

toggleHamburger();

