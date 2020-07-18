const firstname = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const locate = document.querySelector("#location");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const image = document.querySelector("#img");

const btn = document.querySelector("#button");

btn.addEventListener("click", function() {
  const request = new XMLHttpRequest();

  request.open("GET", "https://randomuser.me/api/", true);

  request.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
      let json = JSON.parse(this.responseText);
      console.log(json);
      image.setAttribute("src", `${json.results[0].picture.large}`);
      firstname.textContent = `${json.results[0].name.first}`;
      lastName.textContent = `${json.results[0].name.last}`;
      locate.textContent = `${json.results[0].location.street.number},${json.results[0].location.street.name}`;
      phone.textContent = `${json.results[0].phone}`;
      email.textContent = `${json.results[0].email}`;
      console.log(json.results[0].picture.thumbnail);
    } else {
      this.onerror = "Connection Error";
    }
  };
  request.send();
});
