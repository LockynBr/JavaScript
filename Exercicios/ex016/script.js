function contar() {
    var iniciotxt = document.getElementById('inicio');
    var fimtxt = document.getElementById('fim');
    var passotxt = document.getElementById('passo');
    
    // var resposta = document.getElementById('res');


    if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0) {
        res.innerHTML = 'Impossivel contar!';
    } else {
        res.innerHTML = 'Contando: <br>';
        var inicio = Number(iniciotxt.value);
        var fim = Number(fimtxt.value);
        var passo = Number(passotxt.value);
        if (!passo) {
            window.alert('Passo inválido! Considerando passo 1');
            passo = 1;
        }
        if(inicio < fim) {
            for (var i = inicio; i <= fim; i += passo) {
                res.innerHTML += ` ${i} \u{1F449}`;
            }
        } else {
            for (var i = inicio; i >= fim; i -= passo) {
                res.innerHTML += ` ${i} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`; 
    }
};