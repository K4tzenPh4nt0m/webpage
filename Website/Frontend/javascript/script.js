function sidebar_open() {
    sidebar_div = document.getElementsByClassName("sidebar");
    sidebar_div[0].style.left = '0px';
    document.getElementById('main').style.marginLeft = '250px';
}

function sidebar_close() {
    sidebar_div = document.getElementsByClassName("sidebar");
    sidebar_div[0].style.left = '-251px';
    document.getElementById('main').style.marginLeft = '0px';
}