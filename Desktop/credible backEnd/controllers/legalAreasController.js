const { queryLegalAreaTypes } = require('../Queries/getLegalAreas');
const { poolPromise } = require('../db');

const legalAreasController = async (req, res, next) => {
  try {
    const pool = await poolPromise;

    //list of legal areas for the menu
    const sqlLegalAreasMenu = queryLegalAreaTypes();
    const dbResponseLegalAreasMenu = await pool.request().query(sqlLegalAreasMenu);

    //send response
    res.status(200).json({
      status: 'Success',
      rowsAffected: (dbResponseLegalAreasMenu && dbResponseLegalAreasMenu.rowsAffected) || '',
      legalAreas: (dbResponseLegalAreasMenu && dbResponseLegalAreasMenu.recordsets[0]) || ''
    });
  } catch (err) {
    next(err);
  }
};

module.exports = legalAreasController;
