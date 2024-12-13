async function load() {
    try {
        const response = await fetch('resources/colors.json');
        const colors = await response.json();

        const resptwonse = await fetch('resources/songs.json');
        const songs = await resptwonse.json();

        const name = new URLSearchParams(window.location.search).get('name');

        const song = songs.find(i => i.name === name);
        setborders(colors, song.country);

        const title = document.getElementById('name');
        const image = document.getElementById('thumb');
        const artist = document.getElementById('artist');
        const video = document.getElementById('vid');
        const info = document.getElementById('info');

        title.innerHTML = song.name;
        image.style = `background-image:url(images/${song.thumb})`;
        artist.innerHTML = song.artist;
        video.src = song.video;
        info.innerHTML = `<p>${song.info}</p>`;
    } catch (error) {
        console.error('Error loading file:', error);
    }
}

function setborders(list, country) {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');

    const item = list.find(i => i.name === country);

    b1.style.border = `4px solid ${item.b[0]}`;
    b1.style.boxShadow = `0 0 10px ${item.b[0]}`;

    b2.style.border = `4px solid ${item.b[1]}`;
    b2.style.boxShadow = `0 0 10px ${item.b[1]}`;

    b3.style.border = `4px solid ${item.b[2]}`;
    b3.style.boxShadow = `0 0 10px ${item.b[2]}`;
}

document.addEventListener("load", load());
