const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        
        if (idSelecionado === 'ultron')
            return;

        const personagemSelecionado = document.querySelector('.selecionado-1');
        personagemSelecionado.classList.remove('selecionado-1');
        personagem.classList.add('selecionado-1');

        const imgJogador1 = document.getElementById('personagem-jogador-1');
        imgJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        nomeJogador1.innerHTML = personagem.getAttribute('data-name');
    });
});