import '../functions/menu';
import { getHeaderHeight } from '../functions/header-height';

import SmoothScroll from 'smooth-scroll';

let sectionOffset = 150;

if (window.innerWidth <= 768) {
	sectionOffset = 80;
}

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 650,
  speedAsDuration: true,
	offset: sectionOffset
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
			document.querySelectorAll('.nav li > a').forEach((link) => {
        let id = link.getAttribute('href').replace('#', '');
        if (id === entry.target.id) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      });
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('[data-section]').forEach(section => { observer.observe(section)} );

getHeaderHeight();