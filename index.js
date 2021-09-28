(function (DOM, doc, win) {
    const alunos = [
        {
            nome: 'Thiago Siqueira Gomes',
            nota: 10
        },
        {
            nome: 'Christian Fleury Alencar Siqueira',
            nota: 3
        },
        {
            nome: 'Jairo Coelho da Mata',
            nota: 1
        },
    ]

    const $listaAlunos = doc.getElementById('lista-alunos')

    alunos.forEach(element => {
        const $li = doc.createElement('li')
        const $name = doc.createElement('span')
        const $result = doc.createElement('span')

        $name.textContent = element.nome
        $result.textContent = element.nota


        $li.appendChild($name)
        $li.appendChild($result)
        
        $listaAlunos.appendChild($li)
    })

    
    const $butonBuscaAluno = doc.getElementById('button-busca-aluno')



    
  
})(window.DOM, document, window)