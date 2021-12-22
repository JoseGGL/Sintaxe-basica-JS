function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1-soma (+)\n 2-subtração (-) \n 3-multiplicação(*) \n 4-divisão real (/)\n 5-divisão inteira (resto)\n 6-potenciação(**)'));

    if (!operacao || operacao >= 7 ) {
    alert('operacao invalida!');
    calculadora()
    } else {
    var v1 = Number(prompt('insira o primeiro valor'));
    var v2 = Number(prompt ('insira o segundo valor'));
    var resultado;

    function soma(){
        resultado = v1 + v2;
        alert(`${v1} + ${v2} = ${resultado}`)
        novaop()
    }

    function subtracao(){
        resultado = v1 - v2;
        alert(`${v1} - ${v2} = ${resultado}`)
        novaop()
    }

    function multiplicacao(){
        resultado = v1 * v2;
        alert(`${v1} * ${v2} = ${resultado}`)
        novaop()
    }

    function divisaoreal(){
        resultado = v1 / v2;
        alert(`${v1} / ${v2} = ${resultado}`)
        novaop()
    }

    function divisaointeira(){
        resultado = v1 % v2;
        alert(`O resto da divisão entre ${v1} e ${v2} é ${resultado}`)
        novaop()
    }

    function potenciacao(){
        resultado = v1 ** v2;
        alert(`${v1} ** ${v2} = ${resultado}`)
        novaop()
    }

    function novaop(){
        let opcao = prompt('deseja fazer uma nova operação?\n 1- sim \n 2 - nao');
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2 ){
            alert('ate mais!');
        } else {
            alert('Digite uma opção valida')
            novaop()
        }
}
if (operacao == 1) {
    soma();
} else if (operacao == 2){
    subtracao();
} else if (operacao == 3){
    multiplicacao();
   } else if (operacao == 4){
       divisaoreal();
   }
   else if (operacao == 5){
       divisaointeira();
   }
   else if(operacao == 6){
       potenciacao();
   }
}
}
calculadora();