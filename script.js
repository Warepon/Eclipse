document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const panels = document.querySelectorAll('.panel');
    let currentIndex = 0;

    function scrollToPanel(index) {
        if (index >= 0 && index < panels.length) {
            container.style.transform = `translateX(-${index * 100}vw)`;
            currentIndex = index;
        }
    }

    function handleMouseWheel(event) {
        if (event.deltaY > 0) {
            scrollToPanel(currentIndex + 1);
        } else if (event.deltaY < 0) {
            scrollToPanel(currentIndex - 1);
        }
    }

    container.addEventListener('wheel', handleMouseWheel);

    window.scrollToPanel = scrollToPanel;
});