function abrirProduto(produto) {
    localStorage.setItem("produtoSelecionado", JSON.stringify(produto))
    window.location.href = "produto.html"
}

const containerDiv = document.querySelector(".container")
const produto = JSON.parse(localStorage.getItem("produtoSelecionado"))
const p = document.querySelector(".p")



if (produto) {
    containerDiv.innerHTML = `
    <h2>${produto.title}</h2>
    <img src="${produto.image}" alt="">
    <p class="preco">Preço: R$ ${produto.price}</p>
    <p class="descricao">${produto.description}</p>
`
}else{
    p.innerHTML = "Produto não Econtrado"
}