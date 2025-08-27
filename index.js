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


  const creditCoin = document.getElementById('credit-coin');
const callHistoryContainer = document.querySelector('.call-history');

document.querySelectorAll('.call-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let coins = parseInt(creditCoin.textContent);

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    creditCoin.textContent = coins;

    const card = btn.closest('.card');
    const serviceName = card.querySelector('h2.card-title').textContent;
    const serviceNumber = card.querySelector('h3').textContent;

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to Call History
    const historyItem = document.createElement('div');
    historyItem.classList.add('py-1', 'border-b', 'border-gray-300');
    historyItem.textContent = `${serviceName} - ${serviceNumber}`;
    callHistoryContainer.appendChild(historyItem);
  });
});