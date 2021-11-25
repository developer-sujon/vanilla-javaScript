(function (){
    const toggle = document.getElementById('toggleDark')
    const body = document.getElementsByTagName('body')[0]
    
    toggle.addEventListener('click', function (e) {
        this.classList.toggle('bi-moon')

        if ( this.classList.contains('bi-moon') ) {
            body.classList.add('dark-theme')
        }else {
            body.classList.remove('dark-theme')
        }

    })

})()