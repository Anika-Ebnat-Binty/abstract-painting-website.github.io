document.querySelectorAll('.help-item h2').forEach((helpHeader) => {
    helpHeader.addEventListener('click', () => {
        const helpItem = helpHeader.parentNode;
        helpItem.classList.toggle('active');
    });
});
