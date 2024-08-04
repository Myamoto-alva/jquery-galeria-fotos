$(document).ready(function() {
    // Quando o documento estiver pronto, execute o código dentro desta função

    // Quando o botão dentro do cabeçalho for clicado
    $('header button').click(function() {
      // Mostra o formulário deslizando para baixo
    $('form').slideDown();
    });

    // Quando o botão com o ID 'botao-cancelar' for clicado
    $('#botao-cancelar').click(function() {
    // Oculta o formulário deslizando para cima
    $('form').slideUp();
    });

    // Quando o formulário for enviado
    $('form').on('submit', function(e) {
      e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Pega o valor do campo de input com o ID 'endereço-imagem-nova'
    const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
    // Cria um novo item de lista que inicialmente está oculto
    const novoItem = $('<li style="display: none"></li>');

    // Cria uma nova tag de imagem com o endereço da nova imagem e adiciona ao novo item de lista
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

    // Cria uma div com link para a imagem em tamanho real e adiciona ao novo item de lista
    $(`
        <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho">
            Ver imagem em tamanho real
        </a>
        </div>
    `).appendTo(novoItem);

    // Adiciona o novo item de lista ao final da lista não ordenada
    $(novoItem).appendTo('ul');
    // Faz o novo item de lista aparecer com um efeito de fade-in em 1 segundo
    $(novoItem).fadeIn(1000);
    // Limpa o valor do campo de input
    $('#endereço-imagem-nova').val('');
    });
});

