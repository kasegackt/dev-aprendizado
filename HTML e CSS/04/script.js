function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElemtnById('res')

    if (ini.value.length == 0 || fim.ariaValueMax.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] Faltam Dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    }
}