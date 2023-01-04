

var altura =  window.screen.availHeight
var largura = window.screen.availWidth

document.write('altura é ' + altura + '<br>')
document.write('largura é ' + largura+ '<br>'+ '<br>')


if(largura < 500){
    document.write('Logica para impressao do menu para versao mobile')
}else{
    document.write('Logica para impressao do menu para versao web')
}
