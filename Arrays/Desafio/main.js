var objetos = Array('Cadeira', 'Impressora', 'Garfo')


function adicionarObj (){
    var objeto = document.getElementById("objeto").value
    if(objeto != '') {
        //verifica se o valor já não foi inserido anteriormente
        //se sim, informa que valor já existe, se não insere novo valor
        if( objetos.indexOf(objeto) !== -1) {
        alert('Objeto já foi adicionado')
        } else {
        objetos.push(objeto)
        console.log(objetos)
       
        document.getElementById('objeto').value = ''
        }
    }else {
        alert('Informe um objeto válido')
       
    }
    document.write(objetos)
}

function ordenarObj() {
    objetos.sort()
    document.write(objetos)
}