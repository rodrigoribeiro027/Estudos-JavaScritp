var nome = prompt('digite seu nome: ')
    var alturaCm = prompt('digite sua altura em Centimetros: ')
    var peso = prompt('digite seu peso: ')
    
    alturaCm = parseFloat(alturaCm)
    peso = parseFloat(peso)
    alturaCm = alturaCm / 100
    var IMC = peso / (alturaCm * alturaCm);
    
    var classificacao = ''
    if(IMC >= 16){
        classificacao = 'baixo Peso Grave'
    }
    else if(IMC >= 16 && IMC <= 16.99){
        classificacao = 'baixo Peso'
    }
    else if(IMC >= 17 && IMC <= 18.49){
        classificacao = 'Peso Normal'
    }
    else if(IMC >= 18.50 && IMC <= 24.99){
        classificacao = 'Sobrepeso'
    }
    else if(IMC >= 25 && IMC <= 29.99){
        classificacao = 'baixo Peso'
    }
    else if(IMC >= 30 && IMC <= 34.99){
        classificacao = 'baixo Peso'
    }
    else if(IMC >= 30 && IMC <= 34.99){
        classificacao = '1 grau de obesidade'
    }
    else if(IMC >= 35 && IMC <= 39.99){
        classificacao = '2 grau de obesidade'
    }
    else{
        classificacao = '3 grau de obesidade'
    }
    document.write(nome + ' Voce Possui indice de masssa Corporal igual a'+ IMC + ' Sendo Classificado como: ' + classificacao)
