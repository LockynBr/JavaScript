function tabuada() {
    let numtxt = document.getElementById('txtnumero')
    let tab = document.getElementById('seltab');
    if (numtxt.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let numero = Number(numtxt.value);
        let c = 1;
        tab.innerHTML = '';
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${numero} X ${c} = ${numero*c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
            c++
        }
    }

}