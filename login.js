const app = {
    handleLogin: function () {
        const form = document.getElementById("form");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const inputUsername = document.getElementById("username");
            const inputPassword = document.getElementById("password");

            if (!inputUsername.value.trim()) {
                alert("Please enter a username");
                inputUsername.focus();
                return;
            }

            if (!inputPassword.value.trim()) {
                alert("Please enter a password");
                inputPassword.focus();
                return;
            }

            if (inputPassword.value.trim().length < 6) {
                alert("Password must be at least 6 characters");
                inputPassword.focus();
                return;
            }

            if (inputUsername.value.trim() == "cong" && inputPassword.value.trim() == "123456") {
                alert("Dang nhap thanh cong");

                localStorage.setItem("user", inputUsername.value);

                window.location = "index.html";
            } else {
                alert("Dang nhap that bai");
            }
        });
    },

    start: function () {
        this.handleLogin();
    },
};

app.start();
