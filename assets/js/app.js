

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
            containerData.classList.toggle('hide');
            ContainerResults.classList.toggle('hide');

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
                + Number(document.getElementById('cif').value);
            // console.log(cifs)
            // 10 CPP = ∑ CD's + ∑ CIF's
            // Custos de Produção de Periodo = Custos DIRETOS de Fabricação + Custos INDIRETOS de Fabricação
            let cpp = cds + cifs
            // 11 CP = CPP + EiProd
            // Custos de Produção = Custos de Produção de Periodo + Estoque Inicial de Produção (Elaboração/Fabricação)
            let eiProdElab = Number(document.getElementById('eiprodelab').value);
            let cp = cpp + eiProdElab;
            // 12 CProdAcab = CP - EFProd
            // Custos de Produção Acabada = Custos de Produção - Estoque Final de Produção (Elaboração/Fabricação)
            let efProfElab = Number(document.getElementById('efpelab').value);
            let cProdAcab = cp - efProfElab;
            // 13 CProdDispVenda = CP - EFProdAcab
            // Custos dos Produtos Disponivel para Venda = Custos de Produção Acabada - Estoque Inicial de Produtos (Elaborados/Fabricados)
            let eiProdAcabado = Number(document.getElementById('eiprodacab').value);
            let cProdDispVenda = cProdAcab - eiProdAcabado;
            // 14 CPV = CProdDispVenda - EF
            // Custo dos ProdutosVendidos no Periódo = Custos dos Produtos Disponivel para Venda - Estoque Final de Produtos (Elaborados/Fabricados)
            let efProdAcabado = Number(document.getElementById('efpacabado').value)
            let cpv = cProdDispVenda - efProdAcabado;

            // Populate table with informations above
            // 1 ESTOQUE INICIAL DE MATÉRIAS-PRIMAS
            document.querySelector('.estoque-inicial-materia-prima').textContent = eimp.value;
            // 2. (+) COMPRAS LÍQUIDAS DE MATÉRIAS-PRIMAS
            document.querySelector('.compra-de-materia-prima').textContent = cmp.value;
            // 3. (=) CUSTO DAS MATÉRIAS-PRIMAS DISPONÍVEIS (1+2)
            document.querySelector('.custo-mp-disponivel').textContent = cmpDisp;
            // 4. (-) ESTOQUE FINAL DE MATÉRIAS-PRIMAS
            document.querySelector('.estoque-final-materia-prima').textContent = `(${efmp.value})`;
            // 5. (=) CUSTO DAS MATÉRIAS-PRIMAS APLICADAS (3-4)
            document.querySelector('.custo-materia-prima-aplicado').textContent = cmpAplic;
            // 6. (+) MÃO DE OBRA DIRETA
            document.querySelector('.mao-obra-direto').textContent = mod.value;
            // 7. (=) CUSTO PRIMÁRIO (5+6)
            document.querySelector('.custo-primario').textContent = cmpAplic + Number(mod.value);
            // 8. (+)
            // 8.1 MATERIAIS SECUNDÁRIOS
            document.querySelector('.custo-material-secondario-aplicado').textContent = cmsAplic;
            // 8.2 MATERIAIS DE EMBALAGEM
            document.querySelector('.custo-material-embalagem-aplicado').textContent = cmEmbAplic;
            // 8.3 OUTROS MATERIAIS
            // TODO:
            document.querySelector('.custo-material-outros-aplicado').textContent = 0;
            // 8.4 GASTOS GERAIS DE FABRICAÇÃO DIRETOS
            document.querySelector('.gastos-gerais-producao-direto').textContent = cmsAplic + cmEmbAplic;
            // 9. (=) CUSTOS DIRETOS DE FABRICAÇÃO (7+8)
            let custoProducaoDireto = cmpAplic + Number(mod.value) + cmsAplic + cmEmbAplic;
            document.querySelector('.custo-direto-fabricacao').textContent = custoProducaoDireto;
            // 10. (+)
            // 10.1 MATERIAIS INDIRETOS
            document.querySelector('.materiais-indiretos').textContent = Number(document.getElementById('cmindireto').value);
            // 10.2 MÃO DE OBRA INDIRETA
            document.querySelector('.mao-obra-indireta').textContent = Number(document.getElementById('moi').value);
            // 10.3 GASTOS GERAIS DE FABRICAÇÃO INDIRETOS
            document.querySelector('.custo-indireto-fabricacao').textContent = Number(document.getElementById('cif').value);
            // 10.3 GASTOS GERAIS DE FABRICAÇÃO INDIRETOS TOTAL
            document.querySelector('.gastos-gerais-producao-indireto').textContent = cifs;
            // 11. (=) CUSTO DE PRODUÇÃO DO PERÍODO (9+10)
            document.querySelector('.custo-producao-periodo').textContent = custoProducaoDireto + cifs;
            // 12. (+) ESTOQUE INICIAL DE PRODUTOS EM ELABORAÇÃO
            document.querySelector('.estoque-inicial-elaboracao').textContent = eiProdElab;
            // 13. (=) CUSTO DE PRODUÇÃO (11+12)
            document.querySelector('.custo-producao').textContent = custoProducaoDireto + cifs + eiProdElab;
            // 14. (-) ESTOQUE FINAL DE PRODUTOS EM ELABORAÇÃO
            document.querySelector('.estoque-final-elaboracao').textContent = `(${efProfElab})`;
            // 15. (=) CUSTO DA PRODUÇÃO ACABADA NO PERÍODO (13-14)
            document.querySelector('.custo-producao-acabada').textContent = custoProducaoDireto + cifs + eiProdElab - efProfElab;
            // 16. (+) ESTOQUE INICIAL DE PRODUTOS ACABADOS
            document.querySelector('.estoque-inicial-ababados').textContent = eiProdAcabado;
            // 17 (=) CUSTO DOS PRODUTOS DISPONÍVEIS PARA VENDA (15+16)
            document.querySelector('.custo-prod-disp-venda').textContent = custoProducaoDireto + cifs + eiProdElab - efProfElab + eiProdAcabado;
            // 18. (-) ESTOQUE FINAL DE PRODUTOS ACABADOS
            document.querySelector('.estoque-final-prod-acabado').textContent = `(${efProdAcabado})`;
            // 19. (=) CUSTO DOS PRODUTOS VENDIDOS (17-18)
            document.querySelector('.custo-produtos-vendidos').textContent = custoProducaoDireto + cifs + eiProdElab - efProfElab + eiProdAcabado - efProdAcabado;
        }

        form.classList.add('was-validated')

    }, false)
})()


bckBtn.onclick = (event) => {
    event.preventDefault();
    ContainerResults.classList.toggle('hide');
    containerData.classList.toggle('hide');

}

// cmindireto efpelab eiprodelab eiprodacab efpacabado 