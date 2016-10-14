import $ from 'jquery'

export function resizeWin() {
    let clientHeight = document.documentElement.clientHeight
    let headerHeight = document.getElementById('header').offsetHeight
    let footerHeight = document.getElementById('footer').offsetHeight
    document.getElementById('mainContainer').style.height = (clientHeight - headerHeight - footerHeight) + 'px'
}

export function initShortcut(){
    let cmdInput = $('#cmdInput');
    cmdInput.focus();
    //cmdInput.val('请输入命令');
}

export function next() {
    console.log('next ~~')
    let selectables = $('.selectable');
    console.log(selectables);
}

export function previous(){
    console.log('previous ~~')
}

