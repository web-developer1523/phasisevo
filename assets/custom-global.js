const smoothScrollToElement = (element) => {
  if (!element) return;
  
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

const smoothScrollToHash = () => {
  const hash = window.location.hash;
  
  if (!hash) return;
  
  const targetElement = document.querySelector(hash);
  
  if (!targetElement) return;
  
  if (document.readyState === 'complete') {
    setTimeout(() => smoothScrollToElement(targetElement), 100);
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => smoothScrollToElement(targetElement), 100);
    });
  }
};

const initSmoothScrollLinks = () => {
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      const hash = href.includes('#') ? href.substring(href.indexOf('#')) : null;
      
      if (!hash || hash === '#') return;
      
      const targetElement = document.querySelector(hash);
      
      if (!targetElement) return;
      
      e.preventDefault();
      smoothScrollToElement(targetElement);
      history.pushState(null, null, hash);
    });
  });
};

const initApparelWaitlist = () => {
  document.querySelectorAll('.apparel-waitlist').forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(['openForm', 'SVFxXb']);
    });
  });

  document.querySelectorAll('.future-products-waitlist').forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(['openForm', 'S8Pewn']);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  smoothScrollToHash();
  initSmoothScrollLinks();
  initApparelWaitlist();
});

if (document.readyState === 'complete') {
  smoothScrollToHash();
  initSmoothScrollLinks();
  initApparelWaitlist();
}