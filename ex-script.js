function rodar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtInput')
    var res = document.getElementById('res')
    var myContent = tinymce.get("myTextarea").getContent();
if(fAno.value.length == 0 || Number(fAno.value) > ano){
    window.alert('[Erro]')
}
    else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fAno.value)
    var gênero =''
    var img = document.createElement('img')
    img.setAttribute ('id', 'foto')
    if (fsex[0].checked){
        var gênero = 'homem'
        if (idade <10){
            img.setAttribute('src','menino.png')
        }
        else  if (idade <21){
            img.setAttribute('src','aborrecente homi.png')
        }
        else  if (idade <50){
            img.setAttribute('src','homi.png')
        }
        else  {
            img.setAttribute('src','véio.png')
        }
    }else{
 gênero = 'mulher'
 if (idade <10){
    img.setAttribute('src','menina.png')
}
else  if (idade <21){
    img.setAttribute('src','aborrecente muie.png')
}
else  if (idade <50){
    img.setAttribute('src','muié.png')
}
else  {
    img.setAttribute('src','véia.png')
}

    }
    res.style.textAlign = 'center'
    res.innerHTML = 'Detectamos ' +  gênero + ' de ' + idade + ' anos.'
   res.appendChild(img)
}}