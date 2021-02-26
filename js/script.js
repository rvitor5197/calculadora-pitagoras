function sum() {
    var lado1, lado2, lado3, res;
    lado1 = Number(document.getElementById('fnum').value);
    lado2 = Number(document.getElementById('secondnum').value);
    lado3 = Number(document.getElementById('thnum').value);
    res = document.getElementById('res');

    if (lado1 == "" || lado2 == "" || lado3 == "") {
        alert('Insira os lados do triângulo');
    }

    if (lado1 == lado2 && lado3 == lado2) {
        console.log('equilatero');
        res.innerHTML = 'Equilátero';
    } else if (lado1 == lado2 || lado3 == lado2 || lado3 == lado1) {
        console.log('isoceles');
        res.innerHTML = 'Isocéles';
    } else {
        console.log('Escaleno')
        res.innerHTML = 'Escaleno';
    }

}

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change',
    () => {
        //change theme 
        document.body.classList.toggle('dark');
    })
