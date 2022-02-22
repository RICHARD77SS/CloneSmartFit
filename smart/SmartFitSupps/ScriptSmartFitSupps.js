const header = document.querySelector(".header")

function() {
    window.scroll(function () {
        if (this.scrollTop() > 160) {
            header.addClass("fix");
        } else {
            header.removeClass("fix");
        }
    });
}