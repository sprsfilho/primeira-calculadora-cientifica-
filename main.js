operacao = prompt("digite a operação que deseja realizar: \n  soma \n  subtracao \n  multiplicacao \n  divisao \n quadrado \n raiz \n potencia \n seno \n cosseno \n tangente \n OBS: escreva sem acentuação e igual como aparece no texto")
num1 = parseFloat(prompt("digite o primeiro número: "))
num2 = parseFloat(prompt("digite o segundo número: ")) 

switch (operacao) {
    case "soma":
    soma = num1 + num2
    alert("O resultado da soma é: " + soma)
    break;

    case "subtracao":
    subtracao = num1 - num2
    alert("O resultado da subtração é: " + subtracao)
    break;

    case "multiplicacao":
    multiplicacao = num1 * num2
    alert("O resultado da multiplicação é: " + multiplicacao)
    break;

    case "divisao":
    divisao = num1 / num2
    alert("O resultado da divisão é: " + divisao)
    break;

    case "quadrado":
    let quadrado = num1 *  num1
    alert("O resultado do quadrado é: " + quadrado)
    break;     

    case "raiz":
    let raiz = Math.sqrt(num1)
    alert("O resultado da raiz quadrada é: " + raiz)
    break;

    case "potencia":
    let potencia = Math.pow(num1, num2)
    alert("O resultado da potencia é: " + potencia)
    break;

    case "seno":
    let seno = Math.sin(num1)
    alert("O resultado do seno é: " + seno)
    break;

    case "cosseno":
    let cosseno = Math.cos(num1)
    alert("O resultado do cosseno é: " + cosseno)
    break;

    case "tangente":
    let tangente = Math.tan(num1)
    alert ("O resultado da tangente é: " + tangente)

    default:
    alert("operação inválida")
}