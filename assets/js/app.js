

// Get variables
// Get Container and set display none to show resuts
let containerData = document.getElementById('colectData');
// Get Container that will show results
let ContainerResults = document.getElementById('showResults');
// Submit Button
let submitBtn = document.getElementById('submitBtn');
// Botao de voltar
let bckBtn = document.getElementById('voltarBtn');
// Estoque Inical de Materia Prima
let eimp = document.getElementById('eimp');
// Estoque Inical de Material Secundário
let eims = document.getElementById('eims');
// Estoque Inical de Material de Embalagem
let eimemb = document.getElementById('eimemb');
// Custos de Produção Acabada
let eiprodacab = document.getElementById('eiprodacab');
// Estoque Final de Produção (Elaboração/Fabricação)
let eiprodelab = document.getElementById('eiprodelab');
// Compra de Materia Prima
let cmp = document.getElementById('cmp');
// Compra de Material Secundário
let cms = document.getElementById('cms');
// Compra de Material de Embalagem
let cmemb = document.getElementById('cmemb');
// Compra de Materiais INDIRETOS
let cmindireto = document.getElementById('cmindireto');
// Mão de obra direta
let mod = document.getElementById('mod');
// Mão de obra Indireta
let moi = document.getElementById('moi');
// Custo Indireto de fabricação
let cif = document.getElementById('cif');
// Estoque final de materia prima
let efmp = document.getElementById('efmp');
// Estoque final de material secondário
let efms = document.getElementById('efms');
// Estoque final de material de embalagem
let efmemb = document.getElementById('efmemb');
// Estoque final de produto acabado
let efpacabado = document.getElementById('efpacabado');
// Estoque final de produto elaborado
let efpelab = document.getElementById('efpelab');

// 1 Custo de Materia Prima Disponivel
let cmpdisp = () => Number(eimp.value) + Number(cmp.value);
// 2 Custo de Materia Prima Aplicada
let cmpAplic = () => Number(cmpdisp) - Number(efmp);
// 3 Custo de Material Secundário Disponivel
let cmsDisp = () => Number(eims) + Number(cms);
// 4 Custo de Material Secundário Aplicado
let cmsAplic = () => Number(cmsDisp) - Number(efms);
// 5 Custo de Material de Embalagem Disponivel
let cmembDisp = () => Number(eimemb) + Number(cmemb);
// 6 Custo de Material de Embalagem Aplicado
let cmembAplic = () => Number(cmembDisp) - Number(efmemb);
// 7 Custo Primário da Produção
let cprim = () => Number(cmembAplic) + Number(mod);
// 8 Custos DIRETOS de Fabricação
let cds = () => Number(cmpAplic) + Number(cmsAplic) + Number(cmembAplic) + Number(mod);
// 9 Custos INDIRETOS de Fabricação
let cifs = () => Number(moi) + Number(cif);
// 10 Custos de Produção de Periodo
let cpp = () => Number(cds) + Number(cifs);
// 11 Custos de Produção Elaboração
let cp = () => Number(cpp) + Number(efpelab);
//  12 Custos de Produção Acabada
let cpacab = () => Number(cp) - Number(efpelab);
// 13 Custos dos Produtos Disponivel para Venda
let cpDispVenda = () => Number(cpacab) - Number(eiprodacab);
// 14 Custo dos ProdutosVendidos no Periódo
let cpv = () => Number(cpDispVenda) - Number(efpelab);




submitBtn.onclick = (event) => {
    // alert(cmpdisp())
    event.preventDefault();
    containerData.classList.toggle('hide');
    ContainerResults.classList.toggle('hide');

    // alert('hello')
}

bckBtn.onclick = (event) => {
    event.preventDefault();
    containerData.classList.toggle('hide');
    ContainerResults.classList.toggle('hide');
}