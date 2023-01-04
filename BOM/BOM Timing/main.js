setTimeout(function(){document.write('teste'+ '<br>')}, 2000 )

var i = 5



var x = setInterval(function() { document.write(i)
    i--    
    if(i == 0 ){
        clearInterval(x)
        // window.location.reload()  //relogar usuario ou dar reload nos dados na pagina
    } },1000 
)

