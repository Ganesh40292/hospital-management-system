const BASE = "http://localhost:8080/api";

function loadDoctors() {
    fetch(BASE + "/doctors")
    .then(res => res.json())
    .then(data => {
        doctorList.innerHTML = data.map(d => `<p>${d.name}</p>`).join("");
    });
}