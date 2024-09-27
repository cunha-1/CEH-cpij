function submitProduct() {
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const info = document.getElementById('info').value;

    const expense = { product, quantity, info };

    // Recupera as despesas existentes ou inicializa um array vazio
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense); // Adiciona a nova despesa
    localStorage.setItem('expenses', JSON.stringify(expenses)); // Armazena no localStorage

    // Mensagem de sucesso
    const formMessage = document.getElementById('formMessage');
    formMessage.innerText = "Produto lançado com sucesso!";

    // Redireciona para a página de despesas após 2 segundos
    setTimeout(() => {
        window.location.href = 'despesas.html';
    }, 2000);

    return false; // Previne o envio do formulário
}
