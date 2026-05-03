const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

document.querySelectorAll('.bar-fill').forEach(bar => {
    const io2 = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                bar.style.animationPlayState = 'running';
                io2.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    bar.style.animationPlayState = 'paused';
    io2.observe(bar);
});