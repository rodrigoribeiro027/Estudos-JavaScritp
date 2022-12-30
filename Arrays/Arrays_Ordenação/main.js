var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Maça'

document.write(lista_frutas.sort())

var lista_numeros = Array()

lista_numeros[0] = 70
lista_numeros[1] = 80
lista_numeros[2] = 90
lista_numeros[3] = 100

document.write('<br>'+'<br>' +lista_numeros.sort(ordenarNumeros))

function ordenarNumeros(a,b){
    return a - b
}
