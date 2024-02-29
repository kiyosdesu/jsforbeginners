//https://icanhazdadjoke.com/slack

document.getElementById('btn').addEventListener('click', jokerka);

async function jokerka() {
    let config = {
        headers: {
            Accept: 'application.json',
        },
    };

    let a = await fetch ('https://icanhazdadjoke.com/', config);
    let b = await a.json()
    document.getElementById('content').innerHTML = b.jokerka
}