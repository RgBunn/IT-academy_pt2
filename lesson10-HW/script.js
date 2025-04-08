class Accordion {
    constructor(selector, options = { single: true }) {
        this.accordion = document.querySelector(selector);
        this.single = options.single;
    }

    listener() {
        this.accordion.addEventListener("click", (e) => {
            const header = e.target.closest(".accordion__header");

            const item = header.closest(".accordion__item");

            if (this.single) {
                this.accordion.querySelectorAll(".accordion__item").forEach((el) => {
                    if (el !== item) el.classList.remove("active");
                });
            }
            item.classList.toggle("active");
        });
    }
}

const myAccordion = new Accordion(".accordion");
myAccordion.listener();
