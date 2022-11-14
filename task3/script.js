let author = document.querySelector('.name');
let btn = document.querySelector('.btn');
let text = document.querySelector('.text');
let btn2 = document.querySelector('.history');

class Message {
    constructor(time) {
        this.authorName = author.value;
        this.time = time;
        this.text = text.value;
    }
    toString() {
        return this.time + ' ' + author.value + ': ' + text.value;
    }
}
class Messenger {
    static messageHistory = []
    send() {
        const time = new Date()
        const current = time.getHours() + ":" + time.getMinutes();
        const mesaj = new Message(current)
        const text = mesaj.toString()
    
        Messenger.messageHistory.push(text);
        console.log(text);
    }
    show_histroy() {
        Messenger.messageHistory.forEach((item) => {
            console.log(item);
        })
    }
}

let messenger = new Messenger();
btn.addEventListener('click',(e)=>{
    e.preventDefault()

    messenger.send();
})

btn2.addEventListener('click',(e)=>{
    e.preventDefault();

    messenger.show_histroy();

})
