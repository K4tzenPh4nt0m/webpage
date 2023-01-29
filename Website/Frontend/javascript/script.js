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

function submitKey() {
    key = document.getElementById("gametestercodeinput").value;
    axios.post('http://192.168.178.101:1337/check_key', {
        data: {
            key: key
        }
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            data = response.data;
            try {
                if (data.success == true) {
                    console.log("access");
                    errormessage.style.visibility = 'hidden';
                    errorcontainer.style.visibility = 'hidden';
                } else {
                    console.log('no access');
                    errorcontainer = document.getElementById('errorcontainer');
                    errormessage = document.getElementById('errormessage');
                    errormessage.innerHTML = data.description;
                    errormessage.style.visibility = 'visible';
                    errorcontainer.style.visibility = 'visible';
                }
            } catch (error) {
                console.error('Key not found in JSON object:', error);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}