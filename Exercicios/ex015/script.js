function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png');
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/foto-jovem-m.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-m.png');
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png');
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/foto-jovem-f.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-f.png');
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        img.style.display = 'block';
        img.style.margin = '10px auto 2px auto';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}