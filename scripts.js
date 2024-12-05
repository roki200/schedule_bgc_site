document.getElementById('copyButton').addEventListener('click', function () {
    var tempInput = document.createElement('input');
    tempInput.value = 'https://t.me/Schedule_BGC_Robot';
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';

    setTimeout(function () {
        copyMessage.style.display = 'none';
    }, 3000);
});


window.addEventListener('scroll', function () {
    var footer = document.getElementById('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
