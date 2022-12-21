function carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

        // var hora = 19 
    if (hora >= 0 && hora < 12 ) { 
        img.src = 'foto-manha.png'
        document.body.style.background ='#FEECC6'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'foto-tarde.png'
        document.body.style.background = '#7E807A'
    } else {
        img.src = 'foto-noite.png'
        document.body.style.background = '#061E22'
    }
}