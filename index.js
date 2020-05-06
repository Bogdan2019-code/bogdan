window.addEventListener('DOMContentLoaded', () => {
    sa.init('https://huiso.su/api/login')
    var el = document.getElementById('steamauth')
    if (el){
        el.addEventListener('click', sa.open);
    }
    
  })
