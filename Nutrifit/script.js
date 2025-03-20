function calcularNutrientes() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;
    const idade = parseInt(document.getElementById('idade').value);
    const objetivo = document.getElementById('objetivo').value;
    
    if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    
    const imc = peso / (altura * altura);
    let calorias, proteinas;
    
    switch (objetivo) {
        case 'emagrecer':
            calorias = (peso * 22 - idade * 0.1) * 1.3; // Aumento de 10%
            proteinas = peso * 1.5;
            break;
        case 'manter':
            calorias = (peso * 25 - idade * 0.1) * 1.5; // Aumento de 10%
            proteinas = peso * 1.2;
            break;
        case 'ganhar_musculo':
            calorias = (peso * 30 - idade * 0.1) * 1.5; // Aumento de 15%
            proteinas = peso * 2.0;
            break;
    }
    
    const cafeCalorias = calorias * 0.25;
    const almocoCalorias = calorias * 0.4;
    const jantarCalorias = calorias * 0.35;

    const dieta = `
        <h3>Plano Alimentar:</h3>
        <p><strong>Manhã:</strong> Vitamina com 1 banana (90 kcal), 30g de aveia (110 kcal), 200ml de leite (100 kcal), total: ${cafeCalorias.toFixed(0)} kcal</p>
        <p><strong>Almoço:</strong> 150g de arroz (200 kcal), 100g de feijão (90 kcal), 150g de frango grelhado (250 kcal), salada à vontade, total: ${almocoCalorias.toFixed(0)} kcal</p>
        <p><strong>Noite:</strong> Omelete com 3 ovos (210 kcal), 100g de batata doce (90 kcal), legumes refogados, total: ${jantarCalorias.toFixed(0)} kcal</p>
    `;

    document.getElementById('resultado').innerHTML = `
        <h3>Resultado:</h3>
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Calorias diárias: ${calorias.toFixed(2)} kcal</p>
        <p>Proteínas diárias: ${proteinas.toFixed(2)} g</p>
        ${dieta}
    `;
}
