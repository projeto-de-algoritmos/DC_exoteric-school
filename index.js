(function (DOM, doc, win) {
    const alunos = [
        {
            nome: 'Thiago Siqueira Gomes',
            nota: 10
        },
        {
            nome: 'Jairo Coelho da Mata',
            nota: 1
        },
        {
            nome: 'Christian Fleury Alencar Siqueira',
            nota: 3
        },
        {
            nome: 'Jorge Siveira',
            nota: 8
        },
        {
            nome: 'Peracio',
            nota: 7
        },
        {
            nome: 'Edgar',
            nota: 9.5
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


    const notaAlunos = alunos.map((e) => {
        return e.nota;
    })
    
    const $buttonBuscaAluno = doc.getElementById('button-busca-aluno')
    const $inputPosicao = doc.getElementById('input-posicao')
    const $display = doc.getElementById('display')
    $buttonBuscaAluno.addEventListener('click', function () {
        const position = 1 * $inputPosicao.value
        const indexAluno = exoteric_select(notaAlunos, position)

        console.log(notaAlunos)
        console.log(indexAluno)


        const $nome = doc.createElement('span')
        const $nota = doc.createElement('span')

        $nome.textContent = alunos[indexAluno].nome
        $nota.textContent = alunos[indexAluno].nota

        console.log(alunos[indexAluno].nome)
        $display.appendChild($nome)
        $display.appendChild($nota)


    }, false)

    function exoteric_select (a, k) {
        const median = oracle(a)
        const right = []
        const left = []
        a.forEach(element => {
            if (element < median)
                left.push(element)
            else if (element > median)
                right.push(element)
        })
        if (left.length === k - 1)
            return median
        if (left.length > k - 1)
            return exoteric_select(left, k)
        else
            return exoteric_select(right, k - left.length - 1)
    }
    
    function oracle (a) {
        if (a.length < 25) {
            const randomIndex = Math.floor(Math.random() * (a.length - 0)) + 0;
            return a[randomIndex]
        } else {
            const groups = []
            for (let i = 0; i < 5; i++) {
                groups[i] = []
            }
            for (let i = 0; i < 25; i+= 5) {
                groups[1].push(a[i])
                groups[2].push(a[i+1])
                groups[3].push(a[i+2])
                groups[4].push(a[i+3])
                groups[5].push(a[i+4])
            }
    
            for (let i = 0; i < 5; i++) {
                groups[i].sort(function(a, b) {
                    return a - b;
                });
            }
    
            const medians = []
    
            for (let i = 0; i < 5; i++) {
                medians.push(groups[i][2])
            }
    
            medians.sort(function(a, b) {
                return a - b;
            });
    
            console.log('mediana das medianas = ', median[2])
            return median[2]
        }
    }
  
})(window.DOM, document, window)