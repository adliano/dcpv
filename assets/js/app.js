

// Get variables
// Get Container and set display none to show resuts
let containerData = document.getElementById('colectData');
// Get Container that will show results
let ContainerResults = document.getElementById('showResults');
// Botao de voltar
let bckBtn = document.getElementById('voltarBtn');

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    // Fetch the form we want to apply custom Bootstrap validation styles to
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()

            console.log('Missing data')
        }
        else {
            event.preventDefault();
            // containerData.classList.toggle('hide');
            // ContainerResults.classList.toggle('hide');

            // console.log(eimp.value)
            // Ugly but works lol

            // 1 CMPDisp = EiMP + CMP
            // Custo de Materia Prima Disponivel = Estoque Inical de Materia Prima + Compra de Materia Prima
            let cmpDisp = Number(document.getElementById('eimp').value) + Number(document.getElementById('cmp').value);
            // console.log(cmpDisp);
            // 2 CMPAplic = CMPdisp - EFMP
            // Custo de Materia Prima Aplicada = Custo de Materia Prima Disponivel - Estoque Final de Materia Prima
            let cmpAplic = cmpDisp - Number(document.getElementById('efmp').value);
            // console.log(cmpAplic);
            // 3  CMSDisp = EIMS + CMS
            // Custo de Material Secundário Disponivel = Estoque Inical de Material Secundário + Compra de Material Secundário
            let cmsDisp = Number(document.getElementById('eims').value) + Number(document.getElementById('cms').value);
            // console.log(cmsDisp)
            // 4 CMSAplic = CMSDisp - EFMS
            // Custo de Material Secundário Aplicado = Custo de Material Secundário Disponivel - Estoque Final de Material Secundário
            let cmsAplic = cmsDisp - Number(document.getElementById('efms').value);
            // console.log(cmsAplic)
            // 5 CMembDisp = EIMEmb + CMEmb
            // Custo de Material de Embalagem Disponivel = Estoque Inical de Material de Embalagem + Compra de Material de Embalagem
            let cmEmbDisp = Number(document.getElementById('eimemb').value) + Number(document.getElementById('cmemb').value);
            // console.log(cmEmbDisp)
            // 6 CMEmbAplic = CMEmbDisp - EFMEmb
            // Custo de Material de Embalagem Aplicado = Custo de Material de Embalagem Disponivel - Estoque Final de Material de Embalagem
            let cmEmbAplic = cmEmbDisp - Number(document.getElementById('efmemb').value)
            // console.log(cmEmbAplic)
            // 7 CPrim = CMEmbAplic + MOD
            // Custo Primário da Produção = Custo de Material de Embalagem Aplicado + Mão de obra DIRETA
            let cPrim = cmEmbAplic + Number(document.getElementById('mod').value);
            // 8 ∑ CD's = MPª + MSª + MEmbª + MOD
            // Custos DIRETOS de Fabricação = Matéria Prima Aplicada + Material Secundário Aplicado + Material de Embalagem Aplicado + Mão de obra DIRETA
            let cds = cmpAplic + cmsAplic + cmEmbAplic + Number(document.getElementById('mod').value);
            // 9 ∑ CIF's = MOI + CIF
            // Custos INDIRETOS de Fabricação = Mão de obra INDIRETA + MATERIAIS INDIRETOS + MÃO DE OBRA INDIRETA + GASTOS GERAIS DE FABRICAÇÃO INDIRETOS
            let cifs = Number(document.getElementById('moi').value)
                + Number(document.getElementById('cmindireto').value)
                + Number(document.getElementById('moi').value)
                + Number(document.getElementById('cif').value);
            // console.log(cifs)
            // 10 CPP = ∑ CD's + ∑ CIF's
            // Custos de Produção de Periodo = Custos DIRETOS de Fabricação + Custos INDIRETOS de Fabricação
            let cpp = cds + cifs
            // 11 CP = CPP + EiProd
            // Custos de Produção = Custos de Produção de Periodo + Estoque Inicial de Produção (Elaboração/Fabricação)
            let cp = cpp + Number(document.getElementById('eiprodelab').value);
            // 12 CProdAcab = CP - EFProd
            // Custos de Produção Acabada = Custos de Produção - Estoque Final de Produção (Elaboração/Fabricação)
            let cProdAcab = cp - Number(document.getElementById('efpelab').value);
            // 13 CProdDispVenda = CP - EFProdAcab
            // Custos dos Produtos Disponivel para Venda = Custos de Produção Acabada - Estoque Inicial de Produtos (Elaborados/Fabricados)
            let cProdDispVenda = cProdAcab - Number(document.getElementById('eiprodacab').value);
            // 14 CPV = CProdDispVenda - EF
            // Custo dos ProdutosVendidos no Periódo = Custos dos Produtos Disponivel para Venda - Estoque Final de Produtos (Elaborados/Fabricados)
            let cpv = cProdDispVenda - Number(document.getElementById('efpacabado').value);

            // Populate table with informations above
            // 1 ESTOQUE INICIAL DE MATÉRIAS-PRIMAS
            document.querySelector('.estoque-inicial-materia-prima').textContent = eimp.value;
            // 2 COMPRAS LÍQUIDAS DE MATÉRIAS-PRIMAS
            document.querySelector('.compra-de-materia-prima').textContent = cmp.value;
            // 3 CUSTO DAS MATÉRIAS-PRIMAS DISPONÍVEIS (1+2)
            document.querySelector('.custo-mp-disponivel').textContent = cmpDisp;
            // 4 ESTOQUE FINAL DE MATÉRIAS-PRIMAS
            document.querySelector('.estoque-final-materia-prima').textContent = `(${efmp.value})`;
            // 5 CUSTO DAS MATÉRIAS-PRIMAS APLICADAS (3-4)
            document.querySelector('.custo-materia-prima-aplicado').textContent = cmpAplic;
            // 6 MÃO DE OBRA DIRETA
            document.querySelector('.mao-obra-direto').textContent = mod.value;
            // 7 CUSTO PRIMÁRIO (5+6)
            document.querySelector('.custo-primario').textContent = cmpAplic + Number(mod.value);
            // 8.1 MATERIAIS SECUNDÁRIOS
            document.querySelector('.custo-material-secondario-aplicado').textContent = cmsAplic;
            // 8.2 MATERIAIS DE EMBALAGEM
            document.querySelector('.custo-material-embalagem-aplicado').textContent = cmEmbAplic;
            // 8.3 OUTROS MATERIAIS
            // TODO:
            document.querySelector('.custo-material-outros-aplicado').textContent = 0;
            // 8.4 GASTOS GERAIS DE FABRICAÇÃO DIRETOS
            document.querySelector('.gastos-gerais-producao-direto').textContent = cmsAplic + cmEmbAplic;
            // 9 CUSTOS DIRETOS DE FABRICAÇÃO (7+8)
            document.querySelector('.custo-direto-fabricacao').textContent = cmpAplic + Number(mod.value) + cmsAplic + cmEmbAplic;
            // 10




        }

        form.classList.add('was-validated')

    }, false)
})()


bckBtn.onclick = (event) => {
    event.preventDefault();
    // ContainerResults.classList.toggle('hide');
    // containerData.classList.toggle('hide');

}
