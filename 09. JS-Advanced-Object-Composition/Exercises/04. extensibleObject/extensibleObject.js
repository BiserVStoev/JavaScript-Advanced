function extend() {
    let myObj = {
        extend: function (template) {
            for (let prop in template) {
                if (template.hasOwnProperty(prop)) {
                    let element = template[prop];
                    if (typeof element === 'function') {
                        myObj.__proto__[prop] = element;
                    }
                    else {
                        myObj[prop] = element;
                    }
                }
            }
        }
    };

    return myObj;
}

let obj = extend();
let template = {
    extensionMethod: function () {
        return 5;
    }
};

obj.extend(template);
console.log(obj.extensionMethod());