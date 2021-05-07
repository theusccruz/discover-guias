function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    if (!celciusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado');
    }

    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9;
    let degreeSign = 'C';

    if (celciusExists) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = celcius => celcius * 9/5 + 32;
        degreeSign = 'F';
    }

    return formula(updatedDegree) + degreeSign;
}

try {
    console.log(transformDegree(prompt("Fahrenheit para Celcius(ex: 50F ou 10C)")));
} catch (error) {
    console.log(error.message);
}