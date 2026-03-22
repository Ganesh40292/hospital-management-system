const BASE = "http://localhost:8080/api";

/* ===== INIT ===== */
function initDashboard() {
    checkRole();
    loadDashboard();
}

/* ===== ROLE ===== */
function checkRole() {
    const role = localStorage.getItem("role");

    if (role === "patient") {
        document.querySelectorAll(".admin-only").forEach(el => el.style.display = "none");
    }
}

/* ===== LOADER ===== */
function showLoader() {
    document.getElementById("loader").style.display = "flex";
}
function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

/* ===== TOAST ===== */
function showToast(msg) {
    const t = document.getElementById("toast");
    t.innerText = msg;
    t.style.display = "block";
    setTimeout(() => t.style.display = "none", 2000);
}

/* ===== LOGOUT ===== */
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

/* ===== LOAD ===== */
function loadDashboard() {

    showLoader();

    Promise.all([
        fetch(BASE + "/users").then(r => r.json()),
        fetch(BASE + "/doctors").then(r => r.json()),
        fetch(BASE + "/appointments").then(r => r.json())
    ])
    .then(([u, d, a]) => {
        document.getElementById("usersCount").innerText = u.length;
        document.getElementById("doctorsCount").innerText = d.length;
        document.getElementById("appointmentsCount").innerText = a.length;
        hideLoader();
    })
    .catch(() => hideLoader());
}

/* ===== SHOW DOCTORS ===== */
function showDoctors() {
    fetch(BASE + "/doctors")
    .then(res => res.json())
    .then(data => {
        document.getElementById("doctorList").innerHTML =
            data.map(d => `
                <div class="card p-2 mt-2">
                    ${d.name} - ${d.specialization}
                </div>
            `).join("");
    });
}