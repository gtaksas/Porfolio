function getValue(){
  var out = document.getElementById('output');
  var out1 = document.getElementById('output-1');
  var monthlysavings = parseInt(document.getElementById('savings-input').value);
  var savings = monthlysavings * 12;
  var currency = document.getElementById('currency-input').value;
  var yields = parseInt(document.getElementById('yield-range').value);
  var n = parseInt(document.getElementById('years').value);
  var years = parseInt(document.getElementById('years').value);
  out.innerHTML=savings.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' ' + currency;
  out1.innerHTML=(savings * (yields/100)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')       + ' ' + currency;
  document.getElementById('percent').innerHTML= yields + '%';
  var yield100 = 1 + yields/100;
  var equity = 0;
  //create a while loop to calculate compound interest
  while(0 <= years) {
    equity += savings;
    equity *= yield100;
    years--;
    document.getElementById('t-value').innerHTML="Your total balance after " + n + " years       of continuous saving at " + yields + "% yield is " + equity.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " " + currency + ".";
    }
  }


//SLIDER

var rangeSlider = document.getElementById("yield-range");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 120) + "px";
}
