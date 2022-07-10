const slider = document.body.querySelector("#interest-rate");
const output = document.body.querySelector("#demo");
const result = document.body.querySelector("#result");
const amount = document.body.querySelector("#amount");
const years = document.body.querySelector("#years");
let isDynamic = false;
output.innerHTML = slider.value; // Display the default slider value

function compute() {
  let amt = amount.value;
  let year = years.value;
  let rate = slider.value;
  let interest = 0;
  // let rate = slider.value;
  //   var year = new Date().getFullYear() + parseInt();

  if (amt <= 0) {
    window.alert(`Enter a positive number`);
    console.log(`In if`);
  } else {
    interest = (amt * year * rate) / 100;
    result.innerHTML = `If you deposit <span class="highlight">${amt},</span><br />
            at an interest rate of <span class="highlight">${rate}%,</span><br />
            You will receive an amount of
            <span class="highlight">${interest.toFixed(2)},</span><br />
            in the year <span class="highlight">${
              new Date().getFullYear() + parseInt(year)
            }</span><br />`;
    isDynamic = true;
  }

  console.log(`Outside if else`);
}

function dynamicRate() {
  if (isDynamic === true) {
    compute();
  }
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};
