let btn = document.querySelectorAll('.calculator-button');
let result = document.getElementById('results');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        // Si existe un numero lo borramos
        if (result.textContent == '0') result.textContent = ''
        if (this.innerHTML == '=') {
            result.innerHTML = eval(result.innerHTML)
        } else {
            //Borramos
            if (this.innerHTML == 'AC') {
                result.innerHTML = '';
            } else { 
                // enviamos resultados
                result.innerHTML += this.innerHTML
                // si el contenido es mayor que 24 lo borramos
                maximumAllowed()
            }
        }
    })

}

function maximumAllowed() {
    if (result.textContent.length >= 24) {
        // console.log('es mayour que 24')
        result.textContent = ''
    }
}