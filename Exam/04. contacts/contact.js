class Contact {
    constructor(firstName, lastName, phoneNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.constructcurrHtmlElement(firstName, lastName, phoneNumber, email);
        this.online = false;
    }

    get online(){
        return this._online;
    }

    set online(value){
        if(value === false) {
            this.currHtmlElement.find('.title').removeClass('online');
        }
         else {
            this.currHtmlElement.find('.title').addClass('online');
        }

        this._online = value;
    }

    constructcurrHtmlElement(firstName, lastName, phoneNumber, email) {
        let article = $('<article>');
        let titleDiv = $('<div>').addClass('title').text(`${firstName} ${lastName}`);
        let isToggled = false;
        let button = $('<button>&#8505;</button>').click(function (event) {
            if(isToggled === false){
                $(this).parent().next().css('display', 'block');
                isToggled = true;
            } else{
                $(this).parent().next().css('display', 'none');
                isToggled = false;
            }
        });
        this.button = button;
        let infoDiv = $('<div>').addClass('info').css('display', 'none');
        let phoneSpan = $(`<span>&phone; ${phoneNumber}</span>`);
        let emailSpan = $(`<span>&#9993; ${email}</span>`);

        infoDiv.append(phoneSpan);
        infoDiv.append(emailSpan);

        titleDiv.append(button);

        article.append(titleDiv);
        article.append(infoDiv);

        this.currHtmlElement = article;
    }

    render(id){
        $(`#${id}`).append(this.currHtmlElement);
    }
}