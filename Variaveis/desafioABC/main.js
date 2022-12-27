var a = 10
    var b = 20
    var c = null
    
    document.write('A:' + a + '<br/>')
    document.write('B:' + b + '<br/>')
    document.write('C:' + c + '<br/>')

    document.write('<hr/>')
    document.write('<h4>Logica de inversao dos valores das variaveis A e B<h4/>')
    //Logica de inversao dos valores das variaveis A e B
    c = a
    a = b
    b = c
    c = null

    document.write('A:' + a + '<br/>')
    document.write('B:' + b + '<br/>')
    document.write('C:' + c + '<br/>')
    document.write('<hr/>')