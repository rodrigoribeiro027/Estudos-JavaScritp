//frutas
var listaFrutas = Array()
 
listaFrutas[0]='banana'
listaFrutas[1]='maça'
listaFrutas[2]='lichia'
listaFrutas[3]='pera'


for (var listagem = 0; listagem< listaFrutas.length; listagem++) {
 document.write(listaFrutas[listagem]+'<br>');    
}
document.write('<br>')


//tabuada while

var x = 1
var y = 1

while (x <= 10) {
    y= 1;
    while (y <=10) {
        document.write(+x + ' x ' + y + ' = ' + x * y+'<br>')
        //break || y++
        y++;
    }
    document.write('<hr>')
    x++;
}