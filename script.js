const video = Array.from(document.querySelectorAll("[data-duration]"));
let jsLanjut = video
  .filter((vidio) => vidio.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    return parts[0] * 60 + parts[1];
  })
  .reduce((waktu, parts) => waktu + parts);
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

const durasi = document.querySelector(".total-durasi");
durasi.textContent = `${jam} jam ${menit} menit ${detik} detik`;

const jmlVideo = video.filter((vidio) =>
  vidio.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const jumlahVideo = document.querySelector(".jumlah-video");
jumlahVideo.textContent = `${jmlVideo} video `;

console.log(jsLanjut);
