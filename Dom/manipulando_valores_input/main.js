function distribuir() {
    var caracter = document.getElementById('entrada').value
    document.getElementById('entrada').value + ''
    console.log(caracter)
    // trim para remover espaços desnecessarios
    caracter.trim()

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById('so_numeros').value += caracter
            break;
        default:
            document.getElementById('so_letras').value += caracter 
    }
}
