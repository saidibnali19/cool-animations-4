const fadingInImage = document.querySelector("[data-fade-in]");

const options = {
    rootMargin: "0px",
    threshold: 0,
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, options);

appearOnScroll.observe(fadingInImage);
