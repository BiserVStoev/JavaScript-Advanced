let result = (function () {
    class Textbox {
        constructor(selector, regex){
            this._elements = $(selector);
            this.value = $(this._elements[0]).val();
            this._invalidSymbols = regex;
            this.onInput();
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
            for (let el of this.elements) {
                $(el).val(value);
            }
        }

        get elements(){
            return this._elements;
        }

        onInput(){
            this.elements.on('input', (event) => {
                let text = $(event.target).val();
                this.value = text;
            })
        }

        isValid(){
            return !this._invalidSymbols.test(this.value)
        }
    }

    class Form {
        constructor() {
            this._element = $('<div>').addClass('form');
            this.textboxes = arguments;
        }


        get textboxes() {
            return this._textboxes;
        }

        set textboxes(args) {
            for(let argument of args) {
                if(!argument instanceof Textbox){
                    throw new Error('The given parameter is not a Textbox');
                }
            }

            this._textboxes = args;
            for(let textbox of this._textboxes){
                for (let el of textbox._elements) {
                    this._element.append($(el));
                }
            }
        }

        submit() {
            let formValidity = true;
            for (let textBox of this._textboxes) {
                if (textBox.isValid()) {
                    for (let el of textBox._elements) {
                        $(el).css('border', '2px solid green');
                    }
                } else {
                    for (let el of textBox._elements) {
                        $(el).css('border', '2px solid red');
                    }
                    formValidity = false;
                }
            }

            return formValidity;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {Textbox: Textbox, Form: Form};
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");
