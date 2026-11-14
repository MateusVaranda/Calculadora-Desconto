
const button = document.getElementById("calculate-button")

function discountCalculate() {

    // Pegando os valores dos inputs
    const numberPrice = Number(document.getElementById("price").value)
    const discountPrice = Number(document.getElementById("discount").value)

    // Verificando os valores digitados
    if (numberPrice <= 0 || discountPrice < 0 || discountPrice > 100) {
        alert("Digite um preço válido e um desconto entre 0 e 100%")
        return
    }

    // Calculando o valor do desconto
    const discountValue = numberPrice * (discountPrice / 100)

    // Calculando o preço final
    const finalPrice = numberPrice - discountValue

    // Formatando os valores para Real
    const currency = (value) => {
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    // Mostrando os resultados na tela
    document.getElementById("discount-percentage").textContent = discountPrice + "%"
    
    document.getElementById("discount-result").textContent = currency(discountValue)

    document.getElementById("final-price").textContent = currency(finalPrice)

}

// Executando a função ao clicar no botão
button.addEventListener("click", discountCalculate)
