/* ==================================================
   SECTION NAVIGATION
================================================== */

function showSection(sectionName) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(function (section) {
    section.classList.remove("active");
  });

  const selectedSection = document.getElementById(sectionName);

  if (selectedSection) {
    selectedSection.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* ==================================================
   CALL ATTORNEY
================================================== */

function callAttorney() {
  window.location.href = "tel:09761300511";
}

/* ==================================================
   EMAIL
================================================== */

function emailAttorney() {
  window.location.href = "mailto:renannadado@gmail.com";
}

/* ==================================================
   MESSENGER / FACEBOOK
================================================== */

function openMessenger() {
  window.open(
    "https://www.facebook.com/renan.agenga.nadado.2025",

    "_blank",
  );
}

/* ==================================================
   GOOGLE MAP
================================================== */

function openMap() {
  window.open(
    "https://www.google.com/maps/search/?api=1&query=Bacolod+City+Negros+Occidental+Philippines",

    "_blank",
  );
}

/* ==================================================
   ACHIEVEMENT POPUPS
================================================== */

function openAchievement(type) {
  const popup = document.getElementById("popup");

  const title = document.getElementById("popup-title");

  const text = document.getElementById("popup-text");

  const icon = document.getElementById("popup-icon");

  if (type === "bar") {
    icon.innerHTML = "⚖";

    title.innerHTML = "Philippine Bar Examination";

    text.innerHTML =
      "Atty. Renan A. Nadado successfully passed the Philippine Bar Examination in 2023.";
  } else if (type === "juris") {
    icon.innerHTML = "🎓";

    title.innerHTML = "Juris Doctor";

    text.innerHTML =
      "Atty. Renan A. Nadado completed his legal education at the University of Negros Occidental-Recoletos and earned his Juris Doctor.";
  } else if (type === "masters") {
    icon.innerHTML = "📚";

    title.innerHTML = "Master of Arts in Education";

    text.innerHTML =
      "Master of Arts in Education, Major in Educational Management.";
  } else if (type === "ceswe") {
    icon.innerHTML = "★";

    title.innerHTML = "CESWE";

    text.innerHTML =
      "CESWE is included among the professional qualifications provided for Atty. Renan A. Nadado.";
  }

  popup.classList.add("show");
}

/* ==================================================
   CLOSE POPUP
================================================== */

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

/* ==================================================
   CLICK OUTSIDE POPUP
================================================== */

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

/* ==================================================
   ESC KEY
================================================== */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});
