const searchForm = document.querySelector('.search-form');

if (searchForm) {
  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
  };

  window.onscroll = () => {
    searchForm.classList.remove('active');

    const header2 = document.querySelector('.header-2');
    if (header2) {
      if (window.scrollY > 80) {
        header2.classList.add('active');
      } else {
        header2.classList.remove('active');
      }
    }
  };

  window.onload = () => {
    const header2 = document.querySelector('.header-2');
    if (header2) {
      if (window.scrollY > 80) {
        header2.classList.add('active');
      } else {
        header2.classList.remove('active');
      }
    }
  };
}
