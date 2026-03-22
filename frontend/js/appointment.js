const BASE = "http://localhost:8080/api";

function bookAppointment() {
    fetch(BASE + "/appointments", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            patientId: patientId.value,
            doctorId: doctorId.value,
            date: date.value
        })
    }).then(() => alert("Booked"));
}