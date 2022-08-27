let btn = document.querySelectorAll('.calculator-button');
let result = document.getElementById('results');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        if (this.innerHTML == '=') {
            result.innerHTML = eval(result.innerHTML)
        } else {
            //Pressing AC deletes the numbers
            if (this.innerHTML == 'AC') {
                result.innerHTML = '';
            } else { 
                // Send results
                result.innerHTML += this.innerHTML
            }
        }
    })
}