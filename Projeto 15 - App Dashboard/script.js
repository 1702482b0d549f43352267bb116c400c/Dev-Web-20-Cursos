$(document).ready(() => {
    
    $('#documentacao').on('click', () => {
        // $('#pagina').load('documentacao.html');
        $.get('documentacao.html', data => {
            $('#pagina').html(data);
        });
    });

    $('#suporte').on('click', () => {
        // $('#pagina').load('suporte.html');
        $.get('suporte.html', data => {
            $('#pagina').html(data);
        });
    });

    $('#competencia').on('change', e => {
        let competencia = $(e.target).val();
        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`,
            dataType: 'json',
            success: dados => {
                console.log('sucesso');
                console.log(dados);
                $('#numeroVendas').html(dados.numeroVendas.numero_vendas);
                $('#totalVendas').html(dados.totalVendas.total_vendas);
                $('#clientesInativos').html(dados.clientesInativos.clientes_inativos);
            },
            error: erro => {console.log('erro')}
        });

    });
})