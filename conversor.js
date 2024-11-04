// Dicionário de taxas de câmbio predefinidas
const taxasDeCambio = {
    "USD_EUR": 0.85, // 1 USD = 0.85 EUR
    "USD_BRL": 5.2,  // 1 USD = 5.2 BRL
    "EUR_USD": 1.18, // 1 EUR = 1.18 USD
    "EUR_BRL": 6.1,  // 1 EUR = 6.1 BRL
    "BRL_USD": 0.19, // 1 BRL = 0.19 USD
    "BRL_EUR": 0.16  // 1 BRL = 0.16 EUR
};

// Função pura para obter a taxa de câmbio com base nas moedas de origem e destino
const obterTaxaDeCambio = (moedaOrigem, moedaDestino) => {
    return taxasDeCambio[`${moedaOrigem}_${moedaDestino}`] || 1; // Retorna 1 se as moedas forem iguais
};

// Função pura para converter o valor aplicando a taxa de câmbio
const converterValor = (valor, taxa) => valor * taxa;

// Função pura para validar o valor de entrada
const validarEntrada = valor => !isNaN(valor) && valor > 0;

// Função principal para realizar a conversão
function realizarConversao() {
    // Obtém o valor de entrada e as moedas selecionadas pelo usuário
    const valorEntrada = parseFloat(document.getElementById("valor").value);
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const taxaCambioPersonalizada = parseFloat(document.getElementById("taxaCambio").value);

    // Valida o valor de entrada
    if (!validarEntrada(valorEntrada)) {
        document.getElementById("resultado").textContent = "Por favor, insira um valor numérico positivo.";
        return;
    }

    // Determina a taxa de câmbio: se o usuário inseriu uma taxa personalizada, ela será usada
    const taxaDeCambio = validarEntrada(taxaCambioPersonalizada)
        ? taxaCambioPersonalizada
        : obterTaxaDeCambio(moedaOrigem, moedaDestino);

    // Converte o valor usando a função pura de conversão
    const valorConvertido = converterValor(valorEntrada, taxaDeCambio);

    // Exibe o valor convertido para o usuário
    document.getElementById("resultado").textContent = `Resultado: ${valorConvertido.toFixed(2)} ${moedaDestino}`;
}
