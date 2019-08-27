function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent);
}

function deviceCheck() {

    if(isMobile()){
        document.getElementById('stylesheet').href = './style/mobilecss.css';
    } else {
        document.getElementById('stylesheet').href = './style/style.css';
    }
    console.log (isMobile());
}