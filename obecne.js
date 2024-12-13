document.getElementById('scroll-button').addEventListener('click', () => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('a.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll smoothly to the target section
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Update the URL without reloading the page
            history.replaceState(null, '', window.location.pathname);
        }
    });
});