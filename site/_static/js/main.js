import { MAPBOX_TOKEN, MAP_OPTIONS, OFFICE_COORDS } from './constants.js'

(() => {
  const app = {
    initialize () {
      this.map = null;
      this.marker = null;
      this.cacheElements();
      this.registerEventListeners();
      this.typeWriter();
      this.navBgChange();
      this.loadOnView();
      this.createMapAndMarker();
    },
    cacheElements () {
      this.btnToTopElement = document.querySelector('.btn-to-top');
      this.hamburger = document.querySelector('.hamburger');
      this.navItems = document.querySelector('.nav__list');
      this.subjectSelect = document.querySelector('#user__message-subject');
      this.fileField = document.querySelector('#file-field');
    },

    registerEventListeners () {
      if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }

      if (this.subjectSelect !== null) {
        this.subjectSelect.addEventListener('change', (e) => {
          if(e.target.value == 'job-application') {
            this.fileField.classList.remove('hidden');
          } else {
            this.fileField.classList.add('hidden');
          };
        });
      };

      this.hamburger.addEventListener('click', () => {
        if (!this.navItems.classList.contains('show')) {
          this.navItems.classList.add('show');
        } else {
          this.navItems.classList.remove('show');
        }
      });
    },

    typeWriter() {
      console.log(document.title)
      const title = document.title.slice(-63, -55);
      const homeTitle = 'The Fellowship'
      console.log(title)
      let letter = '';
      let index = 0;

      (function type() {
        if (title === 'Home') {
          letter = homeTitle.slice(0, ++index);
        } else {
          letter = title.slice(0, ++index);
        }
        const typer = document.querySelector('.typer');
        if (typer !== null) {
          typer.innerHTML = letter;
        }

        setTimeout(type, 200);
      }())
    },

    navBgChange () {
      window.onscroll = function() {
        const navFixed = document.querySelector('.text-container');
        if (!navFixed.classList.contains('bgcolor')) {
          navFixed.classList.add('bgcolor');
        };
      
        if (window.scrollY == 0 && navFixed.classList.contains('bgcolor')) {
          navFixed.classList.remove('bgcolor');
        };
      }
    },

    loadOnView () {
      let scroll = window.requestAnimationFrame || function(callback) {
          window.setTimeout(callback, 1000/60);
      }
      
      let elements = document.querySelectorAll('.show-on-scroll');
      function loop () {
          elements.forEach(function(element) {
              if (isElementInViewpoint(element)) {
                  element.classList.add('is-visible');
              } else {
                  element.classList.remove('is-visible');
              }
          });
      
          scroll(loop);
      }
      
      loop();
      
      function isElementInViewpoint(el) {
          let rect = el.getBoundingClientRect();
          return (
              (rect.top <= 0 && rect.bottom >= 0 || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)))
          );
      }
    },

    createMapAndMarker() {
      mapboxgl.accessToken = MAPBOX_TOKEN;
      this.map = new mapboxgl.Map(MAP_OPTIONS);
      this.marker = new mapboxgl.Marker()
        .setLngLat(OFFICE_COORDS)
        .addTo(this.map);
    }
  };
  app.initialize();
})();
