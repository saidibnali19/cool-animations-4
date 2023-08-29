const fadeInImage = document.querySelector("[data-fade-in-image]");

const fadeInOptions = {
    rootMargin: "0px",
    threshold: 0,
};

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        fadeInObserver.unobserve(entry.target);
    });
}, fadeInOptions);

fadeInObserver.observe(fadeInImage);
