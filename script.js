const botao = document.getElementById('botao');

botao.addEventListener('click', function(){
//posso fazer como html também.
//const html = document.documentElement
    const body = document.body;
//se dentro do body contém a classe light, ela remove
// if(body.classList.contains('light')){
//     body.classList.remove('light')
//senão adiciona
//     }else{
//         body.classList.add('light')
//     }

//pode trocar tudo esse código acima por esse embaixo
body.classList.toggle('light');

const imagem = document.querySelector('#profile img');

if(body.classList.contains('light')){
    //se tiver em modo claro, adiciona a imagem light
    imagem.setAttribute('src','assets/imagens/avatar-light.jpg');

    //se tiver sem o modo claro, manter a imagem padrão
    }else{
        imagem.setAttribute('src','assets/imagens/avatar.jpg');
    }

 })