const { SumApi } = require ('../models');

module.exports = {
    async createSummary({ body }, res) {
      const matchup = await SumApi.get(body);
  
      if (!matchup) {
        return res.status(400).json({ message: 'Unable to create matchup' });
      }
  
      res.status(200).json(matchup);
    },

}