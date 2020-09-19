const User = require('../models/User')

module.exports = {

  created: async (req, res) =>{
    const params = req.body

    const user = await User.create(params)

    res.status(200).json(user)
  }



}