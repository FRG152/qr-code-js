const containerQr = document.querySelector(".container--qr");
const qrcodeElement = document.querySelector(".qrcode");
const link = document.querySelector(".link");
const btn = document.querySelector(".btn");

var qrcode = new QRCode(document.getElementById("qrcode"));

btn.addEventListener("click", (e) => {
  if (link.value.length > 0) {
    containerQr.style.display = "none";
    qrcodeElement.style.display = "block";
    qrcode.makeCode(`${link.value}`);
  }
});
