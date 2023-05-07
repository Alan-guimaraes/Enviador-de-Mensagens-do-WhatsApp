document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.getElementById("carousel");
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    slickCarousel(carousel, settings);
  });

  function slickCarousel(element, settings) {
    if (typeof jQuery === "undefined" || typeof jQuery.fn.slick === "undefined") {
      console.error("A biblioteca Slick Carousel não foi carregada corretamente.");
      return;
    }
    jQuery(element).slick(settings);
  }

  function enviarMensagemAcompanhamento() {
    const numero = document.getElementById("numero-whatsapp").value;
    const nome = document.getElementById("nome").value;
    const chamado = document.getElementById("chamado").value;
    const assunto = document.getElementById("assunto").value;
    const conclusao = document.getElementById("conclusao").value;

    const mensagem = `Olá, Meu nome é ${nome}, do Grupo Boticário.\n\nDevido a tentativa de contato sem sucesso, direciono essa mensagem para confirmar a conclusão do chamado ${chamado} referente a/ao ${assunto}

Conclusão do parceiro: ${conclusao}

Aproveito este contato para reforçar que para sua maior comodidade agora é possível acompanhar o andamento e status de todos os chamados abertos para a sua loja e/ou ER acessando o Tracking de Chamados através da home da Extranet ou na página de Ajuda, onde será exibido todo o histórico de casos, assim como o status e tratamento aplicado para cada um. Desta forma, você terá maior autonomia e acesso online sobre o andamento de um caso e conclusão aplicada, sem a necessidade de contatar a CSF para esta consulta.`;

    enviarMensagemWhatsApp(numero, mensagem);
  }

  function enviarMensagemValidacao() {
    const numero = document.getElementById("numero-whatsapp2").value;
    const nome = document.getElementById("nome2").value;
    const chamado = document.getElementById("chamado2").value;
    const assunto = document.getElementById("assunto2").value;
    const conclusao = document.getElementById("conclusao2").value;

    const mensagem = `Olá, tudo bem?\nMe chamo ${nome}, do Grupo Boticário.\n\nEstou entrando em contato para validar o caso ${chamado} referente a/ao ${assunto}. Minha dúvida é, esse assunto foi resolvido? Ou ainda persiste?\n\nNosso parceiro direcionou a seguinte conclusão:\n${conclusao}\n\nPosso concluir esse caso?\nPeço que responda o quanto antes para agilizarmos o caso, obrigado!`;

    enviarMensagemWhatsApp(numero, mensagem);
  }

  function enviarMensagemWhatsApp(numero, mensagem) {
    if (numero && mensagem) {
      const encodedNumero = encodeURIComponent(numero);
      const encodedMensagem = encodeURIComponent(mensagem);
      const url = `https://api.whatsapp.com/send?phone=${encodedNumero}&text=${encodedMensagem}`;
      window.open(url);
    }
  }






/*dados antigos*/
/*function enviarMensagemAcompanhamento() {
    const numero = document.getElementById("numero-whatsapp").value;
    const nome = document.getElementById("nome").value;
    const chamado = document.getElementById("chamado").value;
    const assunto = document.getElementById("assunto").value;
    const conclusao = document.getElementById("conclusao").value;
  
    const mensagem = `Olá, Meu nome é ${nome} e falo em nome da CSF. Devido a tentativa de contato sem sucesso, direciono essa mensagem para confirmar a conclusão do chamado ${chamado} referente a ${assunto}
  
  Conclusão do parceiro: ${conclusao}
  
  Aproveito este contato para reforçar que para sua maior comodidade agora é possível acompanhar o andamento e status de todos os chamados abertos para a sua loja e/ou ER acessando o Tracking de Chamados através da home da Extranet ou na página de Ajuda, onde será exibido todo o histórico de casos, assim como o status e tratamento aplicado para cada um. Desta forma, você terá maior autonomia e acesso online sobre o andamento de um caso e conclusão aplicada, sem a necessidade de contatar a CSF para esta consulta.`;
  
    enviarMensagemWhatsApp(numero, mensagem);
  }
  
  function enviarMensagemValidacao() {
    const numero = document.getElementById("numero-whatsapp2").value;
    const nome = document.getElementById("nome2").value;
    const chamado = document.getElementById("chamado2").value;
    const assunto = document.getElementById("assunto2").value;
    const conclusao = document.getElementById("conclusao2").value;
  
    const mensagem = `Olá, tudo bem?\nMe chamo ${nome}, do Boticário.\n\nEstou entrando em contato para validar o caso ${chamado} referente a ${assunto}. Minha dúvida é, esse assunto foi resolvido? Ou ainda persiste?\n\nNosso parceiro direcionou a seguinte conclusão:\n${conclusao}\n\nPosso concluir esse caso?\nPeço que responda o quanto antes para agilizarmos o caso, obrigado!`;
  
    enviarMensagemWhatsApp(numero, mensagem);
  }
  
  function enviarMensagemWhatsApp(numero, mensagem) {
    if (numero && mensagem) {
      const encodedNumero = encodeURIComponent(numero);
      const encodedMensagem = encodeURIComponent(mensagem);
      const url = `https://api.whatsapp.com/send?phone=${encodedNumero}&text=${encodedMensagem}`;
      window.open(url);
    }
  }*/