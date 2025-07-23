const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.closest('.acordeon');
        acordeon.classList.toggle('open');
    });
});