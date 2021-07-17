const { querySectorTypes } = require('../Queries/getSectors');
const { poolPromise } = require('../db');

const sectorsController = async (req, res, next) => {
  try {
    const pool = await poolPromise;

    //list of sectors for the menu
    const sqlSectorsMenu = querySectorTypes();
    const dbResponseSectorsMenu = await pool.request().query(sqlSectorsMenu);

    //send response
    res.status(200).json({
      status: 'Success',
      rowsAffected: (dbResponseSectorsMenu && dbResponseSectorsMenu.rowsAffected) || '',
      sectors: (dbResponseSectorsMenu && dbResponseSectorsMenu.recordsets[0]) || ''
    });
  } catch (err) {
    next(err);
  }
};

module.exports = sectorsController;
