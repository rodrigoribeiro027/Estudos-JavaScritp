var lista = []
lista['a'] = 'rodrigo'
lista[10] = 'digo'
lista[true] = 'Maria'


for (var x in lista) {
    document.write(x+'<br>')
}