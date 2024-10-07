document.addEventListener("DOMContentLoaded", () => {
  let enterInButton = document.getElementById("enterInButton");

  enterInButton.addEventListener("click", () => {
    let name = document.getElementById("login");
    let password = document.getElementById("passwordIn");

    let dataUserIn = JSON.stringify({
      Name: name.value,
      Password: password.value,
    });

    fetch("http://localhost:36155/enter", {
      method: "POST",
      body: dataUserIn,
    })
      .then((response) => response.text())
      .then((data) => alert(data))
      .catch((error) => console.error(error));
  });
});
