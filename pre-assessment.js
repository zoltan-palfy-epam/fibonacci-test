/*
* USING let AND const INSTEAD OF var to use
* ES6 features (better scoping, ...)
*
* USING GLOBAL SCOPE AS A STORE
* FibValue: global javascript variable, stores the actual fibonacci number's value.
* IsPrime: global javascript variable, boolean, true if FibValue is a prime.
*/

let FibValue;
let IsPrime;

/*
*   USING ARROW FUNCTION EXPRESSIONS
*   - "this" references to the function's creator object, so
*   - "this" references to the window object now.
*   - Functions can reach and modify global JS variables.
*/

/*
* REFACTORED ispnum()
* - Arrow function: reaches global variables.
* - const JS variable in the function expression: unchangeable reference to the arrow function as an anonymous function
* - Refactored code:
*   * New if-else blocks: analyzing fibonacci number only when it's greater or equal 2
*   * Iterating to the fibonacci number's half value: analyzing greater values doesn't have any sense =>
*       less instructions, less running time
*   * Using JS conditional statement possibilities: values evaluates to true or false (without using " === 0", ...)
*   * Function now uses global JS variables and modifies the global IsPrime variable.
*/

const ispnum = () => {
    if (FibValue >= 2) {
        for(let i = 2; i < Math.ceil(FibValue / 2); i++) {
            if ((FibValue % i) === 0) {
                IsPrime = false;
                break;
            } else if ((i == Math.ceil(FibValue / 2) - 1) && (FibValue % i) !== 0) {
                IsPrime = true;
            }
        }
    } else {
        IsPrime = false;
    }
};

/*
* REFACTORED fibonacci()
* - Arrow function: reaches global variables
* - const JS variable in the function expression
* - Refactored code:
*   * Function now uses the global JS variables and modifies the global FibValue variable.
*   * Ternary operator: instead of using "if" and more "return" statements.
*/

const fibonacci = (num) => {
    return (num <= 1) ? 1 : (fibonacci(num - 1) + fibonacci(num - 2));
};

/*
* REFACTORED nxtPrmFib()
* - Arrow function: reaches global variables
* - const JS variable in the function expression: unchangeable reference to the arrow function as an anonymous function
* - Refactored code:
*  * Initializing global variables
*  * var l: removed, using local "i" ES6 variable in the "while" block
*  * var r: removed, using global FibValue variable
*
*  * while (true): removed infinite loop, using global IsPrime variable
*  * i: ES6 local variable to iterating, using "i++" (one place) instead of "i = i + 1"
*  * solution is founded without local variable modifications
*  * when solution is founded while loop ends and the global FibValue stores the solution
*  * printing global FibValue
*  * deleted any other using of the console
*/

const nxtPrmFib = (num) => {
    IsPrime = false;
    FibValue = 0;

    let i = 1;

    while (true) {
        FibValue = fibonacci(i);
        if (FibValue > num) {
            ispnum();
            if (IsPrime === true) break;
        };
        i++;
    }

    console.warn('Next prime fib ', FibValue);
};

//logs: 'Next prime fib 89'
nxtPrmFib(20)

