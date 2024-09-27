const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function submitExpense() {
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const info = document.getElementById('info').value;

    const expense = { product, quantity, info };
    expenses.push(expense);

    // Salvar despesas no localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    document.getElementById('formMessage').textContent = 'Despesa lançada com sucesso!';
    document.getElementById('expenseForm').reset();

    return false; // Prevenir envio do formulário
}

document.getElementById('viewExpenses').addEventListener('click', () => {
    const tbody = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpar entradas anteriores

    expenses.forEach(expense => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = expense.product;
        row.insertCell(1).textContent = expense.quantity;
        row.insertCell(2).textContent = expense.info;
    });
});

// Carregar despesas na página de despesas
window.onload = function() {
    const tbody = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];
    expenses.forEach(expense => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = expense.product;
        row.insertCell(1).textContent = expense.quantity;
        row.insertCell(2).textContent = expense.info;
    });

    // Adicionar funcionalidade para o botão de voltar
    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirecionar para a página de lançamento
    });
};
