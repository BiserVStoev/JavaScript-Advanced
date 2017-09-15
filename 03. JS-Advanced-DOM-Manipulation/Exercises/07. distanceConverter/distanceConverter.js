function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', calculate);

    function calculate() {

        let fromElement = document.getElementById('inputUnits').value;
        let toElement = document.getElementById('outputUnits').value;
        let value = document.getElementById('inputDistance').value;
        let outputElement = document.getElementById('outputDistance');

        let convertData = new Map();
        convertData.set('km', 1000);
        convertData.set('m', 1);
        convertData.set('cm', 0.01);
        convertData.set('mm', 0.001);
        convertData.set('mi', 1609.34);
        convertData.set('yrd', 0.9144);
        convertData.set('ft', 0.3048);
        convertData.set('in', 0.0254);

        let fromAsMeters = convertData.get(fromElement) * value;
        let toData = fromAsMeters / convertData.get(toElement);
        outputElement.value = toData;
    }
}