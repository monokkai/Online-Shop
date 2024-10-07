document.addEventListener("DOMContentLoaded", () => {
  let registrateUser = document.getElementById("regButtonUser");

  registrateUser.addEventListener("click", (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let brithDate = document.getElementById("birthDate").value;

    let jsonDataUser = JSON.stringify({
      Name: name,
      Email: email,
      Password: password,
      brithDate: brithDate,
    });

    fetch("http://localhost:36155/registration", {
      method: "POST",
      body: jsonDataUser,
    })
      .then((response) => {alert("РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!")})
      .then((dataUser) => {});
  });
});
