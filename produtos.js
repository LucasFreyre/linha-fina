const container = document.querySelector(".produtos-container")


// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json()).then(data => {
//         container.innerHTML = ""

//         data.forEach(produto => {
//             container.innerHTML += `
//             <button data-id="${produto.id}" class="ver-produto">
//             <div class="oferta-item">
//                 <img class="foto" src="${produto.image}" alt="">
//                 <p class="title">${produto.title}</p>
//                 <div class="precoComprar">
//                     <div class="precos">
//                         <p class="precoRiscado">R$ ${(produto.price + 20).toFixed(2)}</p>
//                         <p class="precoReal">R$ ${(produto.price).toFixed(2)}</p>
//                     </div>
//                     <p>Comprar</p>
//                 </div>
//             </div>
//             </button>
//             `
//         });

//     })

async function carregarAPI() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    produtos = data
}

function mostrarProdutos(lista) {
    container.innerHTML = ""
    lista.forEach(product => {
        container.innerHTML += `
             <button data-id="${product.id}" class="ver-produto">
            <div class="oferta-item">
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
            </button>
        `
    })
    const botoes = document.querySelectorAll(".ver-produto")
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.id
            const produtoSelecionado = lista.find(p => p.id == id)
            localStorage.setItem("produtoSelecionado", JSON.stringify(produtoSelecionado))

            window.location.href = "produto.html"
        })
    })
}

function carregarProdutos() {
    mostrarProdutos(produtos)
}
const inputPesquisa = document.querySelector(".pesquisa")
inputPesquisa.addEventListener("input", () => {
    const termo = inputPesquisa.value.toLowerCase()

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
