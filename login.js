function togglePassword(id) {
    let password = document.getElementById(id);
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function button_signup() {
    let gmail = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (gmail.trim() === "" || password.trim() === "") {
        alert("Please enter email and password");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    localStorage.setItem("gmail", gmail);
    localStorage.setItem("password", password);
    alert("Sign up completed");
    window.location.href = "index.html";
}

function login() {
    let gmail = document.getElementById("email-2").value;
    let password = document.getElementById("password-2").value;
    let oldemail = localStorage.getItem("gmail");
    let oldpassword = localStorage.getItem('password');

    if (gmail.trim() === "" || password.trim() === "") {
        alert("Please enter email and password");
        return;
    }

    if (gmail === oldemail && password === oldpassword) {
        alert("Login successful");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
    }
}

function toggleForm() {
    const container = document.getElementById('main');
    container.classList.toggle('panel');
}
