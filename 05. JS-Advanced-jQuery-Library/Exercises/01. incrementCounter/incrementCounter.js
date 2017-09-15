function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $("<textarea></textarea>");
    let incrementBtn = $("<button>Increment</button>");
    let addBtn = $("<button>Add</button>");
    let list = $("<ul>");

    textArea.addClass('counter').val(0).attr('disabled', true);

    incrementBtn.addClass('btn').attr('id', 'incrementBtn').text('Increment');
    incrementBtn.on('click', function (event) {
        let value = parseInt(textArea.val());
        textArea.val(++value);
    });

    addBtn.addClass('btn').attr('id', 'addBtn').text('Add');
    addBtn.on('click', function (event) {
        let value = parseInt(textArea.val());
        let li = $('<li>');
        li.text(value);
        list.append(li);
    });

    list.addClass('results');
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}

