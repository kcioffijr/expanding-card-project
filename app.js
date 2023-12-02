/**
 * @author Kevin Cioffi
 * 12/2/2023
 * Expanding Card Project
 * 
 * An application that handles the events \
 * for clicking on "card" elements that will be "expanded".
 */

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
};