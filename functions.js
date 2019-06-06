function getUrlParams(sParam) {
    let sURL = window.location.href;
    let halfURL = sURL.split('?');
    let splitParams = halfURL[1].split('&');
    for (let i = 0; i < splitParams.length; i++) {
        let getParam = splitParams[i].split('=');
        if (getParam[0] == sParam) {
            let paramsSpaces = getParam[1].split('+');
            for (let x = 0; x < paramsSpaces.length; x++) {
                document.getElementById(sParam).innerHTML += paramsSpaces[x] + ' ';
                document.getElementById(sParam).disabled = true;
            }
        }
    }
}

function checkUrlIsChecked(sParam) {
    let sURL = window.location.href;
    let halfURL = sURL.split('?');
    let splitParams = halfURL[1].split('&');
    let y = splitParams.length;
    for (let i = 0; i < y; i++) {
        let getParam = splitParams[i].split('=');
        console.log(getParam);
        if (getParam[0] == sParam) {
            console.log(getParam[0] + " = " + sParam)
            if (getParam[1] == "on") {
                console.log(getParam[1]);
                document.getElementById(sParam).checked = true;
                document.getElementById(sParam).disabled = true;
                return;
            }
        }
    }
    document.getElementById(sParam).checked = false;
    document.getElementById(sParam).disabled = true;
}