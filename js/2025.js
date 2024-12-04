async function loadcolors() {
    try {
        const response = await fetch('resources/colors.json');
        const colors = await response.json();
        setborders(colors);
    } catch (error) {
        console.error('Error loading file:', error);
    }
}

function setborders(list) {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');

    const item = list.find(i => i.name === "Kyaw Cen");

    b1.style.border = `4px solid ${item.b[0]}`;
    b1.style.boxShadow = `0 0 10px ${item.b[0]}`;

    b2.style.border = `4px solid ${item.b[1]}`;
    b2.style.boxShadow = `0 0 10px ${item.b[1]}`;

    b3.style.border = `4px solid ${item.b[2]}`;
    b3.style.boxShadow = `0 0 10px ${item.b[2]}`;
}

document.addEventListener("load", loadcolors());
