function enviarMensaje(mensaje) {
    // Reemplaza "1234567890" con el número al que deseas enviar el mensaje
    var numeroDestino = "+573002662886";
    var mensajeWhatsapp = encodeURIComponent(mensaje);
    var url = "https://wa.me/" + numeroDestino + "?text=" + mensajeWhatsapp;
    window.open(url);
  }

  function sebastian(mensaje) {
    // Reemplaza "1234567890" con el número al que deseas enviar el mensaje
    var numeroEmpresa = "+573136615861";
    var mensajeWhatsappEmpresa = encodeURIComponent(mensaje);
    var url = "https://wa.me/" + numeroEmpresa + "?text=" + mensajeWhatsappEmpresa;
    window.open(url);
  }
