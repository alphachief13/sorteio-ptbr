//sorteia de 1 até o parametro passado
function sortearNumero(numMaxPossiveis){
    do{
        randNum = Math.floor(Math.random() * (numMaxPossiveis + 1))
    }
    while(randNum === 0)
    return randNum;
}

//cria um jogo com um numero de acertos e um com o numero maximo de numeros possiveis para acertar
//exemplo, megasena seria 6 numeros maximos de acertos e 60 numeros maximos possiveis para acertar
function organizarSorteio(numMaxDeAcertos, numMaxPossiveis){
    let array = [];
    let num;

    for(let i = 0; i < numMaxDeAcertos; i++){
        num = sortearNumero(numMaxPossiveis);
        array.push(num);
    }

    //caso tenha numeros iguais ele substitui por um diferente
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j] && i != j){
                while(array[i] === array[j]){
                    array[j] = sortearNumero(numMaxPossiveis);
                }
            }
        }
    }


    return array;
}

//verifica se dois arrays são iguais
function arraysIguais(arr1, arr2){
    let resultado = JSON.stringify(arr1) === JSON.stringify(arr2);
    return resultado;
}



//cria um jogo vencedor e faz com que o pc acerte o jogo vencedor
//n1 sendo n de acertos | n2 sendo n de numeros possiveis | info sendo um boolean que mostra as informaçoes dos sorteios e etc..
//não executar jogos quase impossiveis, risco do computador ficar lento
function executaHipotese(n1,n2,info){
    let vencedor = organizarSorteio(n1,n2);
    let aleatorioSorteado = organizarSorteio(n1,n2);
    let i = 0;

    if(info){
        while(!(arraysIguais(vencedor, aleatorioSorteado))){
            console.log("sorteio: n° " + i + " --> " + vencedor + " <=> " + aleatorioSorteado)
            i++
            aleatorioSorteado = organizarSorteio(n1,n2);
        }
    } else{
        while(!(arraysIguais(vencedor, aleatorioSorteado))){
            i++
            aleatorioSorteado = organizarSorteio(n1,n2);
        }
    }

    console.log("\nACHOU, VENCEU! : numero de tentativas " + i + " \n\n--> " + vencedor + " <=> " +     aleatorioSorteado)
}




