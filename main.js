    function Calcular(){
/*DECLARAÇÃO DAS VARIAVEIS DIGITADAS*/
        var aluno =         document.getElementById("nome")
        var notaBimestre1 = document.getElementById("nota1")
        var notaBimestre2 = document.getElementById("nota2")
        var notaBimestre3 = document.getElementById("nota3")
        var notaBimestre4 = document.getElementById("nota4")

/*INFORMANDO O SISTEMA COMO ELE DEVE TRATAR OS VALORES COLOCADOS PELO USUARIO*/
        var nomePreenchido =  aluno.value
        var nota1 =           notaBimestre1.value
        var nota2 =           notaBimestre2.value
        var nota3 =           notaBimestre3.value
        var nota4 =           notaBimestre4.value

/*INFORMANDO QUE O OS VALORES DIGITADOS SERÃO DECIMAIS*/
        var valor1 = parseFloat(nota1)
        var valor2 = parseFloat(nota2)
        var valor3 = parseFloat(nota3)
        var valor4 = parseFloat(nota4)

/*DECLARAÇÃO DA VARIAEL MEDIA E CALCULO DOS VALORES DIGITADOS*/
        var valorMedia = (
            valor1+
            valor2+
            valor3+
            valor4
            ) / 4
/*TRECHO PARA EXIBIR AO USUARIO O RESULTADO*/
        var exibirTela = document.getElementById("valorDaMedia")

        if (valorMedia >= 5) {
          var aprovado = nomePreenchido + " sua media foi " + valorMedia + ", você foi aprovado"
          exibirTela.innerHTML = aprovado
        } else {
          var reprovado = nomePreenchido + " sua media foi " + valorMedia + ", você foi reprovado"
          exibirTela.innerHTML = reprovado
        }

    }