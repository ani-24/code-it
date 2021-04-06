const text = document.querySelectorAll(".typed-text");

text.forEach((el) => {
  const words = el.dataset.words;
  let charIndex = 0;
  const type = () => {
    if (charIndex < words.length) {
      el.textContent += words[charIndex];
      charIndex++;
      setTimeout(type, 120);
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
  });
});
