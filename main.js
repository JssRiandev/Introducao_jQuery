$(document).ready(function() {
    $("header button").click(function(){
        $("form").slideDown();
    })

    $("#botao-cancelar").click(function(){
        $("form").slideUp();
    })

    $("form").on("submit", function(e){
    e.preventDefault();
    const endereco_nova_img = $("#endereco-img-nova").val();
    const novo_item = $('<li style="display:none"></li>');
    $(`<img src="${endereco_nova_img}" />`).appendTo(novo_item);
    $(`
    <div class="overlay-img-link">
        <a href = "${endereco_nova_img}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
    </div>
    `).appendTo(novo_item)
    $(novo_item).appendTo("ul");
    $(novo_item).fadeIn(1000);
    $("#endereco-img-nova").val("");
    })
})