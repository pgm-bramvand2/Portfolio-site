(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
      this.handleScroll();
      this.smoothAnchor();

    },

    cacheElements () {
      this.btnToTopElement = document.querySelector('#to-top-button');
      this.anchors = document.querySelectorAll('a[href^="#"]');
    },
    
    registerEventListeners () {
      document.addEventListener("scroll", this.handleScroll);
      
      if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
    },
    
    handleScroll () {
      const rootElement = document.documentElement;
      const button = document.querySelector('#to-top-button');
      let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if((rootElement.scrollTop / scrollTotal) > 0.20) {
        button.classList.add("shown");
      } else {
        button.classList.remove("shown");
      };
    },

    smoothAnchor () {
      this.anchors.forEach( anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    }

    
 
  };
  app.initialize();
})();
