
##Conversor de Moedas

#Descrição

Este é um conversor de moedas desenvolvido em HTML e JavaScript. Ele permite que o usuário insira um valor monetário e selecione duas moedas para conversão. O programa aplicará uma taxa de câmbio, que pode ser predefinida ou inserida manualmente pelo usuário, e exibirá o valor convertido.

Este projeto foi criado para demonstrar conceitos de programação funcional, como funções puras, imutabilidade e funções de ordem superior, aplicados em um contexto prático de conversão de moedas.

#Funcionalidades
- Entrada de valor a ser convertido.
- Seleção de moedas de origem e destino.
- Opção de inserir uma taxa de câmbio personalizada ou utilizar uma taxa predefinida.
- Validação do valor de entrada (deve ser numérico e positivo).
- Exibição do valor convertido.

#Conceitos de Programação Funcional Aplicados
1- **Funções Puras**: Todas as funções utilizadas para cálculo e validação são puras, ou seja, elas dependem apenas dos argumentos fornecidos e não alteram o estado externo.
- obterTaxaDeCambio: Função que retorna a taxa de câmbio com base nas moedas selecionadas.
- converterValor: Função que calcula o valor convertido multiplicando o valor de entrada pela taxa de câmbio.
- validarEntrada: Função que verifica se o valor de entrada é numérico e positivo.
2- Imutabilidade: O valor de entrada não é alterado diretamente; ao invés disso, uma nova versão do valor convertido é gerada e exibida.
3- Funções de Ordem Superior: A função realizarConversao utiliza a função validarEntrada para verificar o valor de entrada antes de proceder com a conversão, garantindo que a aplicação se mantenha funcional e imutável.

#Estrutura de Arquivos
- index.html: Estrutura HTML e interface do usuário.
- conversor.js: Lógica da aplicação, incluindo as funções de conversão e validação.