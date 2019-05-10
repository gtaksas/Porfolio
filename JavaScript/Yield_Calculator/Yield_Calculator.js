function getValue(){
      var v = document.getElementById('output');
      var w = document.getElementById('output-1');
      var x = parseInt(document.getElementById('savings-input').value);
      var z = document.getElementById('currency-input').value;
      var y = document.getElementById('yield-range').value;
      var n = document.getElementById('years').value;
      v.innerHTML=12 * x + ' ' + z;
      w.innerHTML=12 * x * (y/100) + ' ' + z;
      document.getElementById('percent').innerHTML= y + '%';
      var monthlysavings = parseInt(document.getElementById('savings-input').value);
      var savings = monthlysavings * 12;
      var currency = document.getElementById('currency-input').value;
      var yields = parseInt(document.getElementById('yield-range').value);
      var years = parseInt(document.getElementById('years').value);
      var yield100 = 1 + yields/100;
      var equity = 0;
      //create a while loop to calculate compound interest
      while(0 <= years) {
        equity += savings;
        equity *= yield100;
        years--;
        document.getElementById('t-value').innerHTML="Your total equity (cash) after " + n + " years of continuous saving at " + yields + "% yield is " + equity + " " + currency + ".";
      }
    }