function apiWhatsapp(_this){
    console.log()
    let msg = `Mi nombre es ${_this.elements[0].value}. `
    msg += `    Mi numero es ${_this.elements[1].value} `
    msg += `    Detalle ${_this.elements[2].value}  `
    msg += `    Envio dede: ${_this.elements[3].value}  &NewLine;`
    msg += `    Hasta: ${_this.elements[4].value}  &NewLine;`
    window.open(`https://api.whatsapp.com/send?phone=51955052235&text=${msg}`, '_blank')
    
}

let formWhatsapp = document.querySelector('.api__whatsapp')
formWhatsapp.addEventListener('submit', function(e){
    e.preventDefault()
    apiWhatsapp(this)
})