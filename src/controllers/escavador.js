const reqPromise = require('request-promise')

module.exports = {

  getDataProcess: async (req, res) => {
    const { phone, number_process, secret_key } = req.body

    const response = await reqPromise.get({
      uri: `https://api.escavador.com/api/v1/processos/numero/${number_process}`,
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    const responseJson = JSON.parse(response)
    const lastUpdate = responseJson[0].ultimas_movimentacoes_resumo[0]

    var peoples = ''
    lastUpdate.envolvidos_resumo.map(people => {
      peoples += `
          Nome: ${people.nome} \n
          Tipo: ${people.pivot_tipo} \n
        `
    })

    const text = `
    Data: ${lastUpdate.data} \n
    Quantidade de pessoas envolvidas: ${lastUpdate.quantidade_envolvidos}
    Conteúdo resumido: ${lastUpdate.conteudo_resumo}
    Resumo das Pessoas envolvidas: ${peoples}
    
    `
    return res.status(200).json({ message: text })
  }

}
