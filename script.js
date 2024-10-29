const video = Array.from(document.querySelectorAll("[data-duration]"));
// ambil yang tema Js lanjutan
let jsLanjut = video
  .filter((vidio) => vidio.textContent.includes("JAVASCRIPT LANJUTAN"))
  //   ambil durasi video masing2
  .map((item) => item.dataset.duration)
  //  [11:18] -> [11,18]
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part)); //ubah jadi float
    return parts[0] * 60 + parts[1];
    // total semua detik
  })
  .reduce((waktu, parts) => waktu + parts);
//   ubah jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di dom

const durasi = document.querySelector(".total-durasi");
durasi.textContent = `${jam} jam ${menit} menit ${detik} detik`;

const jmlVideo = video.filter((vidio) =>
  vidio.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const jumlahVideo = document.querySelector(".jumlah-video");
jumlahVideo.textContent = `${jmlVideo} video `;

console.log(jsLanjut);
