const BASE = "http://localhost:8080/api";
let appointmentData = [];

/* TOAST */
function showToast(msg) {
    const t = document.getElementById("toast");
    if (!t) return;
    t.innerText = msg;
    t.style.display = "block";
    setTimeout(() => t.style.display = "none", 2000);
}

/* LOADER */
function showLoader() {
    const l = document.getElementById("loader");
    if (l) l.style.display = "flex";
}
function hideLoader() {
    const l = document.getElementById("loader");
    if (l) l.style.display = "none";
}

/* DOCTORS */
function loadDoctors() {
    showLoader();
    fetch(BASE + "/doctors")
        .then(r => r.json())
        .then(data => {
            const list = document.getElementById("doctorList");
            if (list) {
                list.innerHTML = data.map(d =>
                    `<p>${d.name} - ${d.specialization}</p>`
                ).join("");
            }
            hideLoader();
        })
        .catch(() => hideLoader());
}

function addDoctor() {
    const name = document.getElementById("dname")?.value;
    const spec = document.getElementById("spec")?.value;
    const avail = document.getElementById("avail")?.value;

    if (!name || !spec || !avail) {
        showToast("Fill all fields");
        return;
    }

    fetch(BASE + "/doctors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            specialization: spec,
            availability: avail
        })
    })
        .then(() => {
            showToast("Doctor Added");
            loadDoctors();
        })
        .catch(() => showToast("Error adding doctor"));
}

/* APPOINTMENTS */
function initAppointments() {
    loadAppointments();
}

function loadAppointments() {
    showLoader();
    fetch(BASE + "/appointments")
        .then(r => r.json())
        .then(data => {
            appointmentData = data;
            renderAppointments(data);
            hideLoader();
        })
        .catch(() => hideLoader());
}

function bookAppointment() {
    const patientId = document.getElementById("patientId")?.value;
    const doctorId = document.getElementById("doctorId")?.value;
    const date = document.getElementById("date")?.value;

    if (!patientId || !doctorId || !date) {
        showToast("Fill all fields");
        return;
    }

    fetch(BASE + "/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            patientId: Number.parseInt(patientId),
            doctorId: Number.parseInt(doctorId),
            date
        })
    })
        .then(() => {
            showToast("Appointment Booked");
            loadAppointments();
        })
        .catch(() => showToast("Error booking"));
}

function renderAppointments(data) {
    const role = localStorage.getItem("role");
    const list = document.getElementById("appointmentList");

    if (!list) return;

    list.innerHTML = data.map(a => `
        <div class="card p-2 mt-2">
            ${a.patientId} - ${a.doctorId} - ${a.date}
            ${role === "admin"
            ? `<button class="btn btn-danger btn-sm" onclick="deleteAppointment(${a.id})">Delete</button>`
            : ""}
        </div>
    `).join("");
}

function deleteAppointment(id) {
    fetch(BASE + "/appointments/" + id, { method: "DELETE" })
        .then(() => {
            showToast("Deleted");
            loadAppointments();
        })
        .catch(() => showToast("Delete failed"));
}

function sortAppointments() {
    const type = document.getElementById("sortSelect")?.value;
    let sorted = [...appointmentData];

    if (type === "date") {
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (type === "doctor") {
        sorted.sort((a, b) => a.doctorId - b.doctorId);
    }

    renderAppointments(sorted);
}

/* LOGOUT */
function logout() {
    localStorage.clear();
    globalThis.location.href = "login.html";
}