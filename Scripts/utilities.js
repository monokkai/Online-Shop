export function loadedPhones(TypePhoneItem) {
  fetch(`http://localhost:36155/good-search/${TypePhoneItem}`)
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("table");

      for (let i = 0; i < data.length; i++) {
        let col = document.createElement("div");
        col.className = "col";

        let card = document.createElement("div");
        card.classList = "card h-100";

        let image = document.createElement("img");
        image.classList = "card-img-top";
        image.src = `http://localhost:36155/good-cards/${data[i].Image}`;
        image.alt = data[i].Title;

        let cardBody = document.createElement("div");
        cardBody.classList =
          "card-body d-flex flex-column justify-content-between";

        let wrapper = document.createElement("div");
        wrapper.classList = "wrapper mb-3";

        let cardTitle = document.createElement("h5");
        cardTitle.classList = "card-title";
        cardTitle.textContent = data[i].Title;

        let cardText = document.createElement("p");
        cardText.classList = "card-text";
        cardText.textContent = data[i].Description;

        let wrapButton = document.createElement("div");
        wrapButton.classList = "d-flex";

        let button = document.createElement("button");
        button.classList = "btn btn-primary";
        button.type = "button";
        button.textContent = "Подробнее";

        wrapper.appendChild(cardTitle);
        wrapper.appendChild(cardText);
        wrapButton.appendChild(button);
        cardBody.appendChild(wrapper);
        cardBody.appendChild(wrapButton);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);

        table.appendChild(col);
      }
    });
}

export function loadedPC(TypePCItem) {
  fetch(`http://localhost:36155/good-search/${TypePCItem}`)
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("table");

      for (let i = 0; i < data.length; i++) {
        let col = document.createElement("div");
        col.className = "col";

        let card = document.createElement("div");
        card.classList = "card h-100";

        let image = document.createElement("img");
        image.classList = "card-img-top";
        image.src = `http://localhost:36155/good-cards/${data[i].Image}`;
        image.alt = data[i].Title;

        let cardBody = document.createElement("div");
        cardBody.classList =
          "card-body d-flex flex-column justify-content-between";

        let wrapper = document.createElement("div");
        wrapper.classList = "wrapper mb-3";

        let cardTitle = document.createElement("h5");
        cardTitle.classList = "card-title";
        cardTitle.textContent = data[i].Title;

        let cardText = document.createElement("p");
        cardText.classList = "card-text";
        cardText.textContent = data[i].Description;

        let wrapButton = document.createElement("div");
        wrapButton.classList = "d-flex";

        let button = document.createElement("button");
        button.classList = "btn btn-primary";
        button.type = "button";
        button.textContent = "Подробнее";

        wrapper.appendChild(cardTitle);
        wrapper.appendChild(cardText);
        wrapButton.appendChild(button);
        cardBody.appendChild(wrapper);
        cardBody.appendChild(wrapButton);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);

        table.appendChild(col);
      }
    });
}


export function loadedItems(subTypeItem) {
  fetch(`http://localhost:36155/good-search/${subTypeItem}`)
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("table");

      for (let i = 0; i < data.length; i++) {
        let image = document.createElement("img");
        image.classList = "card-img-top";
        image.src = `http://localhost:36155/good-cards/${data[i].Image}`;
        image.alt = data[i].Title;

        let cardBody = document.createElement("div");
        cardBody.classList =
          "card-body d-flex flex-column justify-content-between";

        let wrapper = document.createElement("div");
        wrapper.classList = "wrapper mb-3";

        let cardTitel = document.createElement("h5");
        cardTitel.classList = "card-title text-center";
        cardTitel.textContent = data[i].Title;

        wrapper.appendChild(cardTitel);

        let listParts = data[i].Description.split("\r\n");
        for (let j = 0; j < listParts.length; j++) {
          if (listParts[j]) {
            let cardText = document.createElement("p");
            cardText.classList = "card-text";
            if (j % 3 == 0) {
              cardText.classList += "font fw-bold";
            }
            cardText.textContent = listParts[j];

            wrapper.appendChild(cardText);
          }
        }

        let price = document.createElement("p");
        price.classList = "card-text";
        price.textContent = data[i].Price;

        let button = document.createElement("button");
        button.classList = "btn btn-primary";
        button.type = "button";
        button.textContent = "Подробнее";

        wrapper.appendChild(price);
        cardBody.appendChild(wrapper);
        table.appendChild(image);
        table.appendChild(cardBody);
      }
    });
}

export function loadedVacuum(subTypeItem) {
  fetch(`http://localhost:36155/good-search/${subTypeItem}`)
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("table");

      for (let i = 0; i < data.length; i++) {
        let image = document.createElement("img");
        image.classList = "card-img-top";
        image.src = `http://localhost:36155/good-cards/${data[i].Image}`;
        image.alt = data[i].Title;

        let cardBody = document.createElement("div");
        cardBody.classList =
          "card-body d-flex flex-column justify-content-between";

        let wrapper = document.createElement("div");
        wrapper.classList = "wrapper mb-3";

        let cardTitle = document.createElement("h1");
        cardTitle.classList = "card-title";
        cardTitle.textContent = data[i].Title;

        cardTitle.style.textAlign = "center";
        cardTitle.style.fontSize = "34px";

        cardTitle.classList.add("mt-3");

        wrapper.appendChild(cardTitle);

        let price = document.createElement("h5");
        price.classList = "card-text";
        price.textContent = `Цена: ${data[i].Price} рублей`;

        price.style.color = "red";

        let chapters = data[i].Description.split("\r\n");

        for (let j = 0; j < chapters.length; j++) {
          let cardText = document.createElement("p");
          cardText.classList = "card-text";
          cardText.textContent = chapters[j];

          cardText.style.fontSize = "16px";
          cardText.style.textAlign = "justify";

          wrapper.appendChild(cardText);
        }

        let button = document.createElement("button");
        button.classList = "btn btn-primary";
        button.type = "button";
        button.textContent = "Купить";

        button.style.width = "100%";
        button.classList.add("mt-3");

        cardBody.appendChild(wrapper);
        table.appendChild(image);
        table.appendChild(cardBody);

        table.appendChild(price);
        table.appendChild(button);
      }
    });
}

export function loadedTV(subTypeItem) {
  fetch(`http://localhost:36155/good-search/${subTypeItem}`)
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("table");

      for (let i = 0; i < data.length; i++) {
        let col = document.createElement("div");
        col.className = "col";

        let card = document.createElement("div");
        card.classList = "card h-100";

        let image = document.createElement("img");
        image.classList = "card-img-top";
        image.src = `http://localhost:36155/good-cards/${data[i].Image}`;
        image.alt = data[i].Title;

        let cardBody = document.createElement("div");
        cardBody.classList =
          "card-body d-flex flex-column justify-content-between";

        let wrapper = document.createElement("div");
        wrapper.classList = "wrapper mb-3";

        let cardTitle = document.createElement("h5");
        cardTitle.classList = "card-title";
        cardTitle.textContent = data[i].Title;

        let cardText = document.createElement("p");
        cardText.classList = "card-text";
        cardText.textContent = data[i].Description;

        let wrapButton = document.createElement("div");
        wrapButton.classList = "d-flex";

        let button = document.createElement("button");
        button.classList = "btn btn-primary";
        button.type = "button";
        button.textContent = "Подробнее";

        wrapper.appendChild(cardTitle);
        wrapper.appendChild(cardText);
        wrapButton.appendChild(button);
        cardBody.appendChild(wrapper);
        cardBody.appendChild(wrapButton);
        card.appendChild(image);
        card.appendChild(cardBody);
        col.appendChild(card);

        table.appendChild(col);
      }
    });
}

// export function loadedSearchItems(loadedSearchItems) {

// }

export function registrationUser() {
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
      .then((response) => {
        alert("РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!");
      })
      .then((dataUser) => {});
  });
}

export function logInUser() {
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
}

// export function searchingItem() {
//   fetch(
//     `http://localhost:36155/good-search/${sessionStorage.getItem("search")}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       let table = document.getElementById("table");

//       for (let i = 0; i < data.length; i++) {
//         let col = document.createElement("div");
//         col.className = "col";

//         let card = document.createElement("div");
//         card.classList = "card h-100";

//         let image = document.createElement("img");
//         image.classList = "card-img-top";
//         image.src = `http://localhost:36155/good-cards/${data[i].Image}`;
//         image.alt = data[i].Title;

//         let cardBody = document.createElement("div");
//         cardBody.classList =
//           "card-body d-flex flex-column justify-content-between";

//         let wrapper = document.createElement("div");
//         wrapper.classList = "wrapper mb-3";

//         let cardTitle = document.createElement("h5");
//         cardTitle.classList = "card-title";
//         cardTitle.textContent = data[i].Title;

//         let cardText = document.createElement("p");
//         cardText.classList = "card-text";
//         cardText.textContent = data[i].Description;

//         let wrapButton = document.createElement("div");
//         wrapButton.classList = "d-flex";

//         let button = document.createElement("button");
//         button.classList = "btn btn-primary";
//         button.type = "button";
//         button.textContent = "Подробнее";

//         wrapper.appendChild(cardTitle);
//         wrapper.appendChild(cardText);
//         wrapButton.appendChild(button);
//         cardBody.appendChild(wrapper);
//         cardBody.appendChild(wrapButton);
//         card.appendChild(image);
//         card.appendChild(cardBody);
//         col.appendChild(card);

//         table.appendChild(col);
//       }
//     });
// }

// export function searchedItemHelp() {
//   document.getElementById("search").oninput = function () {
//     sessionStorage.setItem("search", this.value);
//   };
// }
