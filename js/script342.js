const responses = JSON.parse(localStorage.getItem('response')),
    quantity = responses.length;

const handleValidate = async () => {
    if (quantity === 4) {
        document.querySelector('.felciidad').style.display = 'block';
        document.querySelector('.casilogra').style.display = 'none';

        return 'success'
    } else {
        document.querySelector('.felciidad').style.display = 'none';
        document.querySelector('.casilogra').style.display = 'block';
        const lives = parseInt(localStorage.getItem('lives'));

        handleSetQuantity();



        if (lives - 1 === 0) {
            localStorage.setItem('block', new Date());
            localStorage.setItem('lives', '0');
        } else {
            localStorage.setItem('lives', (lives - 1).toString());
        }

        if (responses.includes(1)) {
            document.querySelector('.rosadas').style.display = 'block';
        }

        if (responses.includes(2)) {
            document.querySelector('.rosadas1').style.display = 'block';
        }

        if (responses.includes(3)) {
            document.querySelector('.rosadas2').style.display = 'block';
        }

        if (responses.includes(4)) {
            document.querySelector('.rosadas3').style.display = 'block';
        }

        return 'bad'
    }
}

const handleSetQuantity = () => {
    const container = document.querySelector('.container'),
        height = container.clientHeight,
        quantity = document.getElementById('quantity');

    quantity.innerText = responses.length
    quantity.style.fontSize = `${height / 9}px`
}

const handleSetQuantityBad = () => {
    const container = document.querySelector('.container'),
        height = container.clientHeight,
        quantity = document.getElementById('quantity-bad');

    quantity.innerText = responses.length
    quantity.style.fontSize = `${height / 9}px`
}

document.addEventListener('DOMContentLoaded', () => {
    handleValidate()
        .then((res) => {
            if (res === 'success') handleSetQuantity()
            else handleSetQuantityBad();
        });

    document.querySelector('.next-bad').addEventListener('click', () => {
        window.location.href = './index346.html'
        localStorage.setItem('response', JSON.stringify([]))
    })

    document.querySelector('.next').addEventListener('click', () => {
        window.location.href = './index343.html'
        localStorage.setItem('response', JSON.stringify([]))
    })

    localStorage.removeItem("open1")
    localStorage.removeItem("open2")
    localStorage.removeItem("open3")
    localStorage.removeItem("open4")
})