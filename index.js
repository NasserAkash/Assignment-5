const heartCountEl = document.getElementById("heart-count");
  let heartCount = 0;

  // Select all spans with id starting with "heart-"
  const hearts = document.querySelectorAll("[id^='heart-']");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      heartCount++;
      heartCountEl.textContent = heartCount;
    });
  });