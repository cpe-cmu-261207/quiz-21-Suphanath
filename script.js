callApi();

let gender;
const Gender = document.getElementById("span-gender-icon");
const Img = document.getElementById("img-profile");
const Name = document.getElementById("p-name");
const Address = document.getElementById("p-address");
const Email = document.getElementById("p-email");
const btnG = document.getElementById("btn-random");

btnG.onclick = () => {
  callApi;
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "female") {
    Gender.innerText = "👩";
  } else {
    Gender.innerText = "👨";
  }
  Img.src = resp.data.results[0].picture.large;
  Name.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  Email.innerText = resp.data.results[0].email;
  Address.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
}
