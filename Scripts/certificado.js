// Template do certificado
function criarCertificadoHTML(dados) {
    return `
        <div class="certificate">
            <div class="border-left" style="background-color: ${dados.corBorda} !important;">
                
            </div>

            <div class="logo-circle">
                <img src="Content/Images/logo-nihon.png" alt="Logo Associação Nihon">
            </div>

            <div class="fpk-logo">
                <img src="Content/Images/logo-fpk.png" alt="Logo FPK">
            </div>

            <div class="watermark">
                <img src="Content/Images/logo-nihon.png" alt="Watermark Associação Nihon">
            </div>

            <div class="content">
                <div class="text-content">
                    <h1>ASSOCIAÇÃO NIHON</h1>
                    <h1>KARATE SHOTOKAN</h1>
                    <h1>DIPLOMA</h1>

                    <div class="recipient bold">
                        Conferido (a) <strong>${dados.nomeAluno}</strong>
                    </div>

                    <div class="bold">
                        Por ter sido aprovado para Graduação <strong>${dados.grauKyu}</strong>Kyu, em exame realizado no
                    </div>

                    <div class="bold">
                        Dia <strong>${dados.dataExame}</strong>, Campinas/SP aprovado pelo Sensei <strong>WENDELL
                            CAMPOS DE SOUZA</strong>
                    </div>

                    <div class="bold">
                        Faixa preta 3ºDan sob Nº(FPK) 885, (CBK) 25.2075-3.
                    </div>

                    <div class="signatures">
                        <div class="signature">
                            <div class="signature-line">Assinatura do aluno</div>
                        </div>
                        <div class="signature">
                            <div class="cbk-logo">
                                <img src="Content/Images/cbk-logo.png" alt="Logo CBK">
                            </div>
                        </div>
                        <div class="signature">
                            <div class="signature-line">
                                Diretor técnico<br>
                                Wendell campos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Gerar certificados a partir dos dados carregados
function gerarCertificados(certificadosData) {
    const container = document.getElementById('certificatesContainer');
    
    certificadosData.forEach((dados) => {
        container.innerHTML += criarCertificadoHTML(dados);
    });

    console.log(`${certificadosData.length} certificado(s) carregado(s) com sucesso!`);
}

// Gerar certificados ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    // Os dados serão carregados via script tag no HTML
    if (typeof certificadosData !== 'undefined') {
        gerarCertificados(certificadosData);
    } else {
        console.error('Dados dos certificados não encontrados');
    }
});

// Função para imprimir o certificado
function imprimirCertificado() {
    window.print();
}

// Adicionar listener para impressão (Ctrl+P ou Cmd+P)
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        imprimirCertificado();
    }
});
