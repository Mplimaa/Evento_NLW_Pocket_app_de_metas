const { select, input, checkbox } = require('@inquirer/prompts')

const fs = require("fs").promises


let mensagem = "Bem vindo ao app de metas!"

let meta = [
    {
    value: "Tomar 3 L de agua por dia",
    checked: false
}
];

let metas 

const carregarMetas = async () =>{
    try {
        const dados = await fs.readFile("metas.json", "utf-8")
        metas = JSON.parse(dados)
    } catch (erro) {
         metas = []
    }
}

const salvarMetas = async () => {
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
}
carregarMetas()

const cadastrarMeta = async () => {
    const meta = await input ({message: "Digite a meta:"})

    if (meta.length == 0){
        mensagem = "A meta não pode ser vazia!"
         return
    }

    metas.push({value: meta, checked: false})

    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {
    if (metas.length == ""){
         mensagem = "Não existe metas"
         return
    }
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar esta etapa",
        choices: [...metas],
        instructions: false
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0){
        mensagem = "Nenhuma meta selecionada!"
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true

    })
    mensagem = 'Meta(as) marcadas como concluída(s)'
}

const metasRealizadas = async () => {
    if (metas.length == 0){
        mensagem = "Não existe metas"
        return
   }

       const realizadas = metas.filter((meta) => {
       return meta.checked
       })

       if (realizadas.length == 0){
        mensagem = "Não existem metas realizadas"
        return
       }

       await select({
        message: "Metas Realizadas:" + realizadas.length,
        choices: [...realizadas]
       })
}


//agua , caminha, cantar
const metasAbertas = async () => {
    if (metas.length == 0){
        mensagem = "Não existe metas"
        return
   }

    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })
    if (abertas.length == 0){
        mensagem = "Não existem metas abertas! :"
    return
    }
await select({
    message: "Metas abertas:",
    choices: [...abertas]
})
}

const deletarMetas = async () => {
    if (metas.length == 0){
        mensagem = "Não existe metas"
        return
   }

    const metasDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })

    const itensADeletar = await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false
    })

    if (itensADeletar.length ==0){
        mensagem = "Nenhum item para deletar!"
        return
}

    itensADeletar.forEach((item) => {
      metas = metas.filter((meta) =>{
        return meta.value != item
      })  
    })
    mensagem = "Meta(s) deletada(S) com sucesso!"
}

const mostrarMensagem = () => {
    console.clear();

    if (mensagem != "") {
    console.log(mensagem)
    console.log("")
    mensagem = ""
    }
}

const start = async () => {
await carregarMetas()

    while (true){
        mostrarMensagem()
        await salvarMetas()
        const opcao = await select ({
            message: "Menu >",
            choices: [
            {
                name: "Cadastrar meta",
                value: "Cadastrar"
            },
            {
                name: "Listar metas",
                value: "Listar"
            },
            {
                name: "Metas realizadas",
                value: "realizadas"
            },
            {
                name: "Metas abertas",
                value: "abertas"
            },
            {
                name: "Deletar abertas",
                value: "deletar"
            },
            {
                name: "sair",
                value: "sair"
            }
            ]
        })
        //esperar usuario selecionar a opção

       //let opcao = "sair"
        switch(opcao)
        {
            case "Cadastrar":
             await cadastrarMeta()   
             console.log(metas) 
            //console.log("Vamos cadastrar")
                break
            case "Listar":
                await listarMetas()
                 break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Até a próxima")
                return
        }
    }
}
start()