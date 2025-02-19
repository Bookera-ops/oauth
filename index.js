async function login() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let secretDigit = document.getElementById("secretDigit").value;

    let response = await fetch("https://bookera-auth.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password, secretDigit })
    });

    let result = await response.json();
    alert(result.message);
}
