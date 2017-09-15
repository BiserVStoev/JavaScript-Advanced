function getModel() {
    let numA, numB, result;

        function init(selectorA, selectorB, resultSelector) {
            numA = $(selectorA);
            numB = $(selectorB);
            result = $(resultSelector);
        }

        function add() {
            result.val(Number(numA.val()) + Number(numB.val()));
        }

        function subtract() {
            result.val(Number(numA.val()) - Number(numB.val()));
        }

        return {init, add, subtract};
}