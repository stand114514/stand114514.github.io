const messages = document.createElement("div");
messages.id = "messages";
window.addEventListener("load", ()=>{
    document.body.append(messages);
})

class Message {
    static info(content, timer = 3000) {
        this.init("info", content, timer);
    }

    static sucess(content, timer = 3000) {
        this.init("sucess", content, timer);
    }

    static warning(content, timer = 3000) {
        this.init("warning", content, timer);
    }

    static error(content, timer = 3000) {
        this.init("error", content, timer);
    }

    static init(type, content, timer) {
        var msgbox = document.createElement("div");
        msgbox.className = `message ${type}`;
        var closeBtn = document.createElement("i");
        closeBtn.className = "message-close-btn";
        closeBtn.innerHTML = "&times;";
        var contentEl = document.createElement("span");
        contentEl.innerHTML = content;

        msgbox.appendChild(contentEl);
        msgbox.appendChild(closeBtn);
        msgbox.style.animation = "join 0.5s forwards";
        messages.prepend(msgbox);

        var tmeout = setTimeout(() => {
            this.delete(msgbox);
        }, timer);

        closeBtn.addEventListener('click', () => {
            this.delete(msgbox);
            clearTimeout(tmeout);
        });
    }

    static delete(msgbox) {
        msgbox.style.animation = "leave 1s forwards";
        setTimeout(() => {
            messages.removeChild(msgbox);
        }, 1000);
    }
}