let balanco = {
    receitas: [203, 520, 450, 780, 987],
    despesas: [0, 458, 698, 478, 214]
}

const estadoDoSaldo = () => {
    let totalReceitas = calcFinancas(balanco.receitas);
    let totalDespesas = calcFinancas(balanco.despesas);

    const saldo = totalReceitas - totalDespesas;

    if (saldo > 0) {
        console.log(`Saldo postivo R$${saldo}`);
    } else {
        console.log(`Saldo Negativo R$${saldo}`);
    }
}

const calcFinancas = dados => {
    let total = dados.reduce((total, dado) => total + dado, 0);
    return total;
}

estadoDoSaldo();



