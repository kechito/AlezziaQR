let qrCodeInstance;

function generateQRCode() {
  var anfitrion = document.getElementById('anfitrion').value;
  var invitado = document.getElementById('invitado').value;
  var numeroMesa = document.getElementById('numeroMesa').value;
  var invitados = document.getElementById('invitados').value;
  var data = "Anfitrion: " + anfitrion + "\nInvitado: " + invitado + "\nMesa: " + numeroMesa + "\nInvitados: " + invitados;
  var warning = document.querySelector("#alerta");
  var notDown = document.querySelector("#notDown");
  //const mensajeQR =  document.getElementById('mensajeQR');
  //const mensajeDown =  document.getElementById('mensajeDown');



  if(anfitrion.trim() === '' || invitado.trim() === '' || numeroMesa.trim() === '' || invitados.trim() === '' ){
  warning.innerHTML = "completa todos los campos.";
  
  } else {
    var qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = '';
  
    qrCodeInstance = new QRCode(qrCodeDiv, {
      text: data,
      width: 150,
      height: 150,
    });
  }
};

function downloadQRCode() {
  if (qrCodeInstance) {
    const canvas = qrCodeInstance._el.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'codigo_qr.png';
    a.click();
  } else {
    notDown.innerHTML = "Primero genera el Código QR antes de descargarlo.";
  }
};