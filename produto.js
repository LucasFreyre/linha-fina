function abrirProduto(produto) {
    localStorage.setItem("produtoSelecionado", JSON.stringify(produto))
    window.location.href = "produto.html"
}

const container = document.querySelector(".container")
const produto = JSON.parse(localStorage.getItem("produtoSelecionado"))



if (produto) {
    container.innerHTML = `
    <h2>${produto.title}</h2>
    <img src="${produto.image}" alt="">
    <p class="preco">Preço: R$ ${produto.price}</p>
    <p class="descricao">${produto.description}</p>
`
}else{
    container.innerHTML = "Produto não Econtrado"
}