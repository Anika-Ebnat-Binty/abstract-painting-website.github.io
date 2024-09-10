document.querySelectorAll('.faq-item h2').forEach((faqHeader) => {
    faqHeader.addEventListener('click', () => {
        const faqItem = faqHeader.parentNode;
        faqItem.classList.toggle('active');
    });
});
