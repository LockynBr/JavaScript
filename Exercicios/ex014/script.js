function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "img/foto-manha.png";
        document.body.style.background = '#cdc0b2';
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = "img/foto-tarde.png";
        document.body.style.background = '#e57e4b';
    } else {
        //Boa noite
        img.src = "img/foto-noite.png";
        document.body.style.background = '#146381';
    }
}
