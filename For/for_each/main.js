var lista = ['Rodrigo','Nicolas','Raniel']

lista.forEach(function(valor,indice,array){
    // document.write(array+'<br>')
    if(valor === 'Rodrigo'){
        array[indice]= 'Meu Apelido é Digo'
        console.log(valor)
    }
    // document.write('<br>'+valor +'<br>')
    document.write(indice+ ' '+ valor +'<br>')

})

document.write('<br>'+'<br>'+lista[0]+'<br>')

// lista.forEach(valor,indice,array){   
// }

var f =function(valor){
    document.write('<br>'+valor)
}

lista.forEach(f)