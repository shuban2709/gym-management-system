const API = "http://localhost:3000";

// ✅ Add Member (FIXED)
window.addMember = function () {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  const plan = document.getElementById("plan").value;

  fetch(API + "/members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, age, phone, plan })
  })
  .then(res => res.text())
  .then(data => {
    alert(data);
    loadMembers();
  })
  .catch(err => console.error(err));
};

// ✅ Load Members (your existing code)
function loadMembers() {
  fetch(API + "/members")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("members");
      list.innerHTML = "";

      data.forEach(member => {
        const li = document.createElement("li");

        li.innerHTML = `
          <div class="member-info">
            <strong>${member.name}</strong><br>
            Plan: ${member.plan}
          </div>
          <button class="present-btn" onclick="markAttendance(${member.id})">
            ✔
          </button>
        `;

        list.appendChild(li);
      });
    });
}

// ✅ Mark Attendance (ALSO REQUIRED)
window.markAttendance = function (id) {
  fetch(API + "/attendance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ member_id: id, status: "Present" })
  })
  .then(res => res.text())
  .then(data => alert(data));
};

// ✅ Load data when page starts
loadMembers();