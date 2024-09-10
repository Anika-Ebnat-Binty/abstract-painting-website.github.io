document.querySelectorAll('.region h2').forEach((regionHeader) => {
    regionHeader.addEventListener('click', () => {
        const regionItem = regionHeader.parentNode;
        regionItem.classList.toggle('active');
    });
});
