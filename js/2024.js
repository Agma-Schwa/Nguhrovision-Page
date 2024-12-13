async function loadcolors() {
    try {
        const response = await fetch('resources/colors.json');
        const colors = await response.json();

        setborders(colors);

        const resptwonse = await fetch('resources/songs.json');
        const list = await resptwonse.json();

        const table = document.getElementById('participants');

        list.filter(item => item.year == 2024).sort((a, b) => a.ro - b.ro).forEach(item => {
            const row = document.createElement('tr');
            row.onclick = function() {location.href=`song.html?name=${encodeURI(item.name)}`};
            row.innerHTML =`
                <td class="left">${item.ro}</td>
                <td>
                    <div class="thumb">
                        <div style="background-image:url(images/${item.thumb})"></div>
                    </div>
                </td>
                <td class="bold">${item.artist}</td>
                <td>${item.country}</td>
                <td>${item.name}</td>
            `;
            table.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading file:', error);
    }
}

function setborders(list) {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');

    const item = list.find(i => i.name === "Amuj");

    b1.style.border = `4px solid ${item.b[0]}`;
    b1.style.boxShadow = `0 0 10px ${item.b[0]}`;

    b2.style.border = `4px solid ${item.b[1]}`;
    b2.style.boxShadow = `0 0 10px ${item.b[1]}`;

    b3.style.border = `4px solid ${item.b[2]}`;
    b3.style.boxShadow = `0 0 10px ${item.b[2]}`;
}

document.addEventListener("load", loadcolors());

function toggletable() {
    const table = document.getElementById('hideme');
    const a = document.getElementById('a');
    const b = document.getElementById('b');

    if (table.classList.contains('hidden')) {
        table.classList.remove('hidden');
        a.classList.remove('hidden');
        b.classList.add('hidden');
    } else {
        table.classList.add('hidden');
        b.classList.remove('hidden');
        a.classList.add('hidden');
    }
}
