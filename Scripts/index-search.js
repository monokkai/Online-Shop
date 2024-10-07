document.getElementById("search").oninput = function () {
    sessionStorage.setItem("search", this.value)
}
