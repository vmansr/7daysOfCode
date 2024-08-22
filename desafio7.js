document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    function clearDisplay() {
        currentInput = '';
        operator = '';
        firstOperand = null;
        display.value = '0';
    }

    function appendToDisplay(value) {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        display.value = currentInput;
    }

    function performOperation(op, a, b = null) {
        switch (op) {
            case '√':
                if (a < 0) {
                    throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
                }
                return Math.sqrt(a);
            case '%':
                return a / 100;
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    throw new Error('No se puede dividir por cero');
                }
                return a / b;
            default:
                throw new Error('Operador no válido');
        }
    }

    function calculateResult() {
        if (currentInput !== '') {
            if (firstOperand !== null && operator !== '') {
                const secondOperand = parseFloat(currentInput);
                try {
                    const result = performOperation(operator, firstOperand, secondOperand);
                    display.value = result.toFixed(2);
                    currentInput = result.toString();
                    operator = '';
                    firstOperand = null;
                } catch (error) {
                    alert(error.message);
                    clearDisplay();
                }
            } else {
                firstOperand = parseFloat(currentInput);
                currentInput = '';
            }
        }
    }

    function setOperator(op) {
        if (currentInput !== '') {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else {
                calculateResult();
            }
            operator = op;
            currentInput = '';
        }
    }

    function changeSign() {
        if (currentInput !== '') {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;
        }
    }

    function calculatePercentage() {
        if (currentInput !== '') {
            const percentage = parseFloat(currentInput) / 100;
            display.value = percentage.toFixed(2);
            currentInput = percentage.toString();
        }
    }

    function calculateSquareRoot() {
        if (currentInput !== '') {
            try {
                const result = performOperation('√', parseFloat(currentInput));
                display.value = result.toFixed(8);
                currentInput = result.toString();
            } catch (error) {
                alert(error.message);
                clearDisplay();
            }
        }
    }

    document.querySelectorAll('.calculator button').forEach(function(button) {
        button.addEventListener('click', function() {
            const value = this.textContent;
            if (value === 'AC') {
                clearDisplay();
            } else if (['+', '-', '*', '/'].includes(value)) {
                setOperator(value);
            } else if (value === '=') {
                calculateResult();
            } else if (value === '+/-') {
                changeSign();
            } else if (value === '√') {
                calculateSquareRoot();
            } else if (value === '%') {
                calculatePercentage();
            } else {
                appendToDisplay(value);
            }
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (!isNaN(key) || key === '.') {
            appendToDisplay(key);
        } else if (['+', '-', '*', '/'].includes(key)) {
            setOperator(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || '0';
        } else if (key === 'Escape') {
            clearDisplay();
        } else if (key === '%') {
            calculatePercentage();
        } else if (key === 'r' || key === 'R') {
            calculateSquareRoot();
        }
    });

    // Inicializar la pantalla
    clearDisplay();
});