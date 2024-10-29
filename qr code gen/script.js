const input = document.getElementById('input');
const create = document.getElementById('create');
const download = document.getElementById('download');
const img = document.getElementById('img');


async function getQrCode() {
    const response = await QRCode.toDataURL(input.value);
    return response;
}


function downloadImg(data) {
    const link = document.createElement('a');
    link.href = data;
    link.download = 'qr_code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// "https://cdn-icons-png.flaticon.com/512/552/552486.png";

download.addEventListener("click", () => {
    getQrCode().then(data => {
        downloadImg(data);
    })
})

create.addEventListener("click", () => {
    getQrCode().then(data => {
        img.src = data;
    })
})
