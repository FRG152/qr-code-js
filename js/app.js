const containerQr = document.querySelector(".container--qr");
const message = document.querySelector(".error-message");
const qrcodeElement = document.querySelector(".qrcode");
const link = document.querySelector(".link");
const btn = document.querySelector(".btn");

var qrcode = new QRCode(document.getElementById("qrcode"));

btn.addEventListener("click", (e) => {
  console.log(link.value.length);
  if (link.value.length > 0) {
    link.style.border = "none";
    message.style.display = "none";
    containerQr.style.display = "none";
    qrcodeElement.style.display = "block";
    qrcode.makeCode(`${link.value}`);
  } else {
    message.style.display = "initial";
    link.style.border = "2px solid rgb(255, 59, 59)";
  }
});
