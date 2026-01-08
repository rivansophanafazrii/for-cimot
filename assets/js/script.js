const config = {
  nomorWA: "6283195814503", // Ganti ke nomor kamu
  teksAwal:
    "Makasih ya udah inget ulang tahun aku, di hari spesial ini aku pengen ",
};

const audio = document.getElementById("musik");
if (audio) {
  audio.play();
}

let userMessage = "";

function bukaPesan() {
  const audio = document.getElementById("musik");

  // Memberitahu browser untuk mulai memutar
  if (audio) {
    audio
      .play()
      .then(() => {
        console.log("Musik berhasil diputar!");
      })
      .catch((error) => {
        console.log("Browser memblokir musik, butuh interaksi user.");
      });
  }
  document.getElementById("halaman1").classList.remove("active");
  document.getElementById("halaman2").classList.add("active");
  document.body.style.overflowY = "auto";
  setTimeout(() => {
    AOS.refresh();
  }, 100);
}

function showPopup() {
  document.getElementById("modalOverlay").style.display = "flex";
  document.getElementById("formSection").style.display = "block";
  document.getElementById("notifSection").style.display = "none";
}

function prosesKirim() {
  const input = document.getElementById("pesanUser").value;

  if (input.trim() === "") {
    showNotification("Jangan dikosongin dong");
  } else {
    userMessage = input;
    showNotification("Kirim jawabannya ke wa aku ya");
  }
}

function showNotification(text) {
  document.getElementById("formSection").style.display = "none";
  document.getElementById("notifSection").style.display = "block";
  document.getElementById("teksNotif").innerText = text;
  document.getElementById("modalOverlay").style.display = "flex";
}

function closeNotif() {
  const currentText = document.getElementById("teksNotif").innerText;
  document.getElementById("modalOverlay").style.display = "none";

  if (currentText === "Kirim jawabannya ke wa aku ya") {
    const finalUrl = `https://wa.me/${config.nomorWA}?text=${encodeURIComponent(
      config.teksAwal + userMessage
    )}`;
    window.open(finalUrl, "_blank");
  }
}
