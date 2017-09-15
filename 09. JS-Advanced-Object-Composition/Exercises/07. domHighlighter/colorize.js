function colorize(selector) {
    let element = $(selector)

    let deepestPath = -1;
    let deepestElement;

    findDeepestChild(0, element)
    function findDeepestChild(depth, el) {
        if (depth > deepestPath) {
            deepestPath = depth;
            deepestElement = el;
        }

        let children = el.children();
        for (let child of children) {
            findDeepestChild(depth + 1, $(child));
        }
    }

    deepestElement = $(deepestElement);

    while (true) {
        deepestElement.addClass('highlight');
        if (deepestElement[0] === element[0]) {
            break;
        }

        deepestElement = deepestElement.parent();
    }
}