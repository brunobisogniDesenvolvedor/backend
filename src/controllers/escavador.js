const reqPromise = require('request-promise')

module.exports = {

  getDataProcess: async(req, res) => {
    const {phone, number_process, secret_key} = req.body

    const response = await reqPromise.get({
      uri: `https://api.escavador.com/api/v1/processos/numero/${number_process}`,
      headers: {
        "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`,
        "X-Requested-With": "XMLHttpRequest",
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })

    return res.status(200).json(JSON.parse(response))
  }

}