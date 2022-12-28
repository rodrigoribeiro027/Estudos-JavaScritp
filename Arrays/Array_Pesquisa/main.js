var lista_frutas = Array()

    lista_frutas[0] = 'banana'
    lista_frutas[1] = 'Maçâ'
    lista_frutas[2] = 'Morango'
    lista_frutas[3] = 'Uva'

if(lista_frutas.indexOf('Morango') === -1){
    document.write('<h2>O elemento nao existe</h2>')
}
else{
    document.write('O elemento existe e esta na posição\n' + lista_frutas.indexOf('Morango'))
}
