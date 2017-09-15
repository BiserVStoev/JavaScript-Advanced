function addItem() {
    let textNode = document.getElementById('newItemText');
    let text = textNode.value;
    let newItemValueNode = document.getElementById('newItemValue');
    let newItemValue = newItemValueNode.value;
    let option = document.createElement('option');
    option.id = 'menu';
    option.value = newItemValue;
    option.textContent = text;

    let selectElement = document.getElementById('menu');
    selectElement.appendChild(option);

    textNode.value = '';
    newItemValueNode.value = '';
}