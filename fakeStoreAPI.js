const img = document.querySelectorAll(".img")
const oferta = document.querySelector(".oferta")
const carrossel = document.querySelector(".carousel-container")
let urlNum = 0
let produtos = []


async function carregarAPI() {
    const res = await fetch('https://fakestoreapi.com/products')
    const json = await res.json()
    produtos = json
}

function mostrarProdutos(lista) {
    oferta.innerHTML = ""
    lista.forEach(product => {
        oferta.innerHTML += `
            <div class="oferta-item">
                <div class="casual">
                    <p>Casual</p>
                </div>
                <img class="foto" src="${product.image}" alt="">
                <p class="title">${product.title}</p>
                <div class="precoComprar">
                    <div class="precos">
                        <p class="precoRiscado">R$ ${(product.price + 20).toFixed(2)}</p>
                        <p class="precoReal">R$ ${(product.price).toFixed(2)}</p>
                    </div>
                    <p>Comprar</p>
                </div>
            </div>
        `
    })
}

function carregarProdutos() {
    mostrarProdutos(produtos.slice(0, 4))
}

const inputPesquisa = document.querySelector(".pesquisa")
inputPesquisa.addEventListener("input", () => {
    const termo = inputPesquisa.value.toLowerCase()
    if (inputPesquisa.value !== "") {
        carrossel.style.display = "none"
    }else{
        carrossel.style.display = "block"
    }

    if (termo === "") {
        carregarProdutos()
        return
    }

    const filtrados = produtos.filter(p =>
        p.title.toLowerCase().includes(termo) ||
        p.description.toLowerCase().includes(termo)
    )
    mostrarProdutos(filtrados)
})



carregarAPI().then(() => {
    carregarProdutos()
})
