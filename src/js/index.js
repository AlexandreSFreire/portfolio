/*Mostrar os arquivos que estão ocultos em projetos

Esconder o botão de mostrar mais

*/ 

//Pegar o botão que quero uma ação.
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click', ()=> {
    
    mostrarMaisProjetos();
    esconderBotao();//adiciona a classe remover ao botão
    
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    //Adicionar a classe "ativo" nos projetos escondidos
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
