const convertButton = document.querySelector(".main-button")
const tiposDeMonedas = document.querySelector(".monedas-A-convertir")


const selectPrincipal = document.querySelector(".moneda-principal")



function convertValores() {
    const inputValores = document.querySelector(".input-valores").value
    const valorEnReal = document.querySelector(".resultado-real")
    const valorCambioMonedas = document.querySelector(".resultado-dolar")


    const dolarToday = 5.0
    const euroToday = 5.27
    const libra = 6.05
    const bolivar = 7.022
    const bitcoin = 169721.01


    if (tiposDeMonedas.value == "Dolar") {
        valorCambioMonedas.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValores / dolarToday)
    }

    if (tiposDeMonedas.value == "Euro") {
        valorCambioMonedas.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValores / euroToday)
    }

    if (tiposDeMonedas.value == "Libra") {
        valorCambioMonedas.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValores / libra)
    }

    if (tiposDeMonedas.value == "Bolivar") {
        valorCambioMonedas.innerHTML = new Intl.NumberFormat("es-VE", {
            style: "currency",
            currency: "VEF"
        }).format(inputValores * bolivar)
    }

    if (tiposDeMonedas.value == "Bitcoin") {
        valorCambioMonedas.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValores / bitcoin)
    }

    if (tiposDeMonedas.value == "Reales") {
        valorCambioMonedas.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValores / euroToday)
    }

    function nombreDeMonedaPrincipal() {

        const selectPrincipal = document.querySelector(".moneda-principal").value

        if (selectPrincipal == "Real") {
            valorEnReal.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValores)
        }

        if (selectPrincipal == "Dolar Americano") {
            valorEnReal.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValores)
        }

        if (selectPrincipal == "euro") {
            valorEnReal.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputValores)
        }

        if (selectPrincipal == "libra")
            valorEnReal.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputValores)

        if (selectPrincipal == "bitcoin")
            valorEnReal.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputValores)

        if (selectPrincipal == "bolivar")
            valorEnReal.innerHTML = new Intl.NumberFormat("es-VE", {
                style: "currency",
                currency: "VEF"
            }).format(inputValores)
    }

    nombreDeMonedaPrincipal()
}


function trocaDeBandera() {
    const nombresDemodenas = document.getElementById("Paises-moneda")
    const trocaDeBanderas = document.querySelector(".Img-bandera")


    if (tiposDeMonedas.value == "Dolar") {
        nombresDemodenas.innerHTML = "Dólar Americano"
        trocaDeBanderas.src = "./assets/Dolar.png"
    }

    if (tiposDeMonedas.value == "Euro") {
        nombresDemodenas.innerHTML = "Euro"
        trocaDeBanderas.src = "./assets/Euro.png"
    }

    if (tiposDeMonedas.value == "Libra") {
        nombresDemodenas.innerHTML = "Libra Esterlina"
        trocaDeBanderas.src = "./assets/Libra.png"
    }

    if (tiposDeMonedas.value == "Bolivar") {
        nombresDemodenas.innerHTML = "Bolivar Soberano"
        trocaDeBanderas.src = "./assets/Venezuela.jpg"
    }

    if (tiposDeMonedas.value == "Bitcoin") {
        nombresDemodenas.innerHTML = "Bitcoin"
        trocaDeBanderas.src = "./assets/bitcoin.png"
    }
    //  EXPERIMENTO

    if (tiposDeMonedas.value == "Reales") {
        nombresDemodenas.innerHTML = "Reales Brasileiros"
        trocaDeBanderas.src = "./assets/Real.png"
    }

    function inputPrincipal() {
        const selectPrincipal = document.querySelector(".moneda-principal").value
        const banderasPrincipales = document.querySelector(".bandera-principal")
        const nombreDeMonedaPrincipal = document.querySelector(".nombres-modena-principal")


        if (selectPrincipal == "Dolar Americano") {
            nombreDeMonedaPrincipal.innerHTML = "Dólar Americano"
            banderasPrincipales.src = "./assets/Dolar.png"
        }

        if (selectPrincipal == "euro") {
            nombreDeMonedaPrincipal.innerHTML = "Euro"
            banderasPrincipales.src = "./assets/Euro.png"
        }

        if (selectPrincipal == "Real") {
            nombreDeMonedaPrincipal.innerHTML = "Reales Brasileiros"
            banderasPrincipales.src = "./assets/Real.png"
        }

        if (selectPrincipal == "libra") {
            nombreDeMonedaPrincipal.innerHTML = "Libra Esterlina"
            banderasPrincipales.src = "./assets/Libra.png"
        }

        if (selectPrincipal == "bolivar") {
            nombreDeMonedaPrincipal.innerHTML = "Bolivares Soberano"
            banderasPrincipales.src = "./assets/Venezuela.jpg"
        }

        if (selectPrincipal == "bitcoin") {
            nombreDeMonedaPrincipal.innerHTML = "Bitcoin"
            banderasPrincipales.src = "./assets/bitcoin.png"
        }

    }


    selectPrincipal.addEventListener("click", inputPrincipal)
    inputPrincipal()
    convertValores()


}

tiposDeMonedas.addEventListener("change", trocaDeBandera)
convertButton.addEventListener("click", convertValores)
