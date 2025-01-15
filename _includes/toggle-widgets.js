document.getElementById('itch-button').addEventListener('click', () => {
    console.log('Clicked');
    document.querySelectorAll('.show-itch').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelectorAll('.show-hb').forEach(element => {
        element.style.display = 'block';
    });
});

document.getElementById('hb-button').addEventListener('click', () => {
    document.querySelectorAll('.show-itch').forEach(element => {
        element.style.display = 'block';
    });
    document.querySelectorAll('.show-hb').forEach(element => {
        element.style.display = 'none';
    });
});
