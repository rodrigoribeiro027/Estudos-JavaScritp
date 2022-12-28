var lista_coisas = Array() 

 lista_coisas['frutas'] = Array()
 lista_coisas['frutas'][0] = 'Morango'
 lista_coisas['frutas'][1] = 'Maçã'
 lista_coisas['frutas'][2] = 'Banana'
 lista_coisas['frutas'][3] = 'Uva'

 lista_coisas['pessoas'] = Array()
 lista_coisas['pessoas']['a'] = 'joao'
 lista_coisas['pessoas']['b'] = 'Rodrigo'
 lista_coisas['pessoas']['c'] = 'Maria'

console.log(lista_coisas)
document.write('<h2>Array frutas</h2>'+'<br>'+lista_coisas['frutas'][0])
document.write('<h2>Array pessoas</h2>'+'<br>'+lista_coisas['pessoas']['b'])

