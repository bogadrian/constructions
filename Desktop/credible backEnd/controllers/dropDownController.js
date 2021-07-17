const { dropDownQueries } = require('../Queries/dropDownQueries');
const { poolPromise, sql } = require('../db');

const dropDownController = async (req, res, next) => {
  try {
    const pool = await poolPromise;
    const transaction = new sql.Transaction(pool);
    await transaction.begin();
    const req = new sql.Request(transaction);
    const sectors = await req.query(dropDownQueries().querySectors);
    const legalAreas = await req.query(dropDownQueries().queryLegalAreas);
    const countries = await req.query(dropDownQueries().queryCountries);

    const doneCommit = await transaction.commit(err => {
      if (!err) {
        res.status(200).json({
          NoOfSectors: sectors?.rowsAffected,
          Sectors: sectors?.recordsets[0],
          NoOfLegalAreas: legalAreas?.rowsAffected,
          LegalAreas: legalAreas?.recordsets[0],
          NoOfCountries: countries?.rowsAffected,
          Countries: countries?.recordsets[0]
        });
      } else {
        console.log('commit error ----', err.stack);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = dropDownController;
