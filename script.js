document.getElementById("LoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        document.cookie = `token=${data.token}`;
        window.location.href = "page.html";
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.log("Error", error));
});
