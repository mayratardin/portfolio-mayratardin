const color = window.document.getElementsByName('color')
const header = window.document.getElementById('header')
const footer = window.document.getElementById('footer')
function theme(){
    if (color[0].checked){
        window.document.body.style.background = 'black'
        window.document.body.style.color = '#2E8B57'
        header.style.background = '#1C1C1C'
        footer.style.background = '#1C1C1C'
        footer.style.color = '#2E8B57'
    }else if (color[1].checked) {
        window.document.body.style.background = '#2E8B57'
        window.document.body.style.color = '#1C1C1C'
        header.style.background = '#DCDCDC'
        footer.style.background = '#DCDCDC'
        footer.style.color = '#1C1C1C'
    }
}

