const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function Calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

currencyEl_one.addEventListener('change', Calculate);
amountEl_one.addEventListener('input', Calculate);
currencyEl_two.addEventListener('change', Calculate);
amountEl_two.addEventListener('input', Calculate);
swap.addEventListener('click', () => {
  temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  Calculate();
});

Calculate();
