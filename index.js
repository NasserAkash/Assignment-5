const heartCountEl = document.getElementById("heart-count");
  let heartCount = 0;


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

    alert(`📞 Calling ${serviceName} at ${serviceNumber}...`); 
  });
});


const callHistoryList = document.getElementById("call-history-list");
  const clearBtn = document.getElementById("clearBtn");

  document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card"); 
      const serviceName = card.querySelector("p.text-gray-500").innerText;
      const serviceNumber = card.querySelector("h3").innerText;
      const timestamp = new Date().toLocaleTimeString();

      const entry = document.createElement("div");
      entry.className = "flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm";
      entry.innerHTML =
       `<div>
          <p class="font-medium text-gray-800">${serviceName}</p>
          <p class="text-sm text-gray-500">${serviceNumber}</p>
        </div>
        <span class="text-xs text-gray-400">${timestamp}</span>`;

      callHistoryList.prepend(entry);
    });
  });
  clearBtn.addEventListener("click", () => {
    callHistoryList.innerHTML = "";
  });


let totalCopies = 0;

  function copyNumber(number) {
    navigator.clipboard.writeText(number)
      .then(() => {
        totalCopies++;
        document.getElementById('copy-count').textContent = totalCopies;
        alert(`Copied ${number}!`);
      })
      .catch(err => console.error('Failed to copy:', err));
  }


  document.getElementById('copy-btn-1').addEventListener('click', () => {
    const number = document.querySelector('#card-1 h3').textContent;
    copyNumber(number);
  });

  document.getElementById('copy-btn-2').addEventListener('click', () => {
    const number = document.querySelector('#card-2 h3').textContent;
    copyNumber(number);
  });

   document.getElementById('copy-btn-3').addEventListener('click', () => {
    const number = document.querySelector('#card-3 h3').textContent;
    copyNumber(number);
  });

 document.getElementById('copy-btn-4').addEventListener('click', () => {
    const number = document.querySelector('#card-4 h3').textContent;
    copyNumber(number);
  });

 document.getElementById('copy-btn-5').addEventListener('click', () => {
    const number = document.querySelector('#card-5 h3').textContent;
    copyNumber(number);
  });

   document.getElementById('copy-btn-6').addEventListener('click', () =>{
    const number = document.querySelector('#card-6 h3').textContent;
    copyNumber(number);
  });