document.addEventListener('DOMContentLoaded', function () {
  const smoothScrollLinks = document.querySelectorAll('.navigation');

  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop - 50; // Змінили тут
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 50; // Змінили тут
    const duration = 1000; // тривалість анімації в мілісекундах
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      );
      if (progress < duration) window.requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }

    window.requestAnimationFrame(step);
  }
});
