const { queryAdvSelect1 } = require('../Queries/select');
const { poolPromise, sql } = require('../db');

const { sqlComposed } = require('../Queries/select');

const filterController = async (req, res, next) => {
  try {
    const pool = await poolPromise;

    // just testing data. send this from front-end
    const fixedMatch = false;
    const keyword = `${fixedMatch ? '' : ''}`; //`${fixedMatch ? 'Charlotte Gibbons' : '%Charlotte Gibbons%'}`;
    const clientName = '';
    const country = [
      { id: 792, label: 'United Kingdom' },
      { id: 690, label: 'Italy' }
    ];
    const legalArea = [
      { id: 474, label: 'Contract' },
      { id: 494, label: 'Reputation & Defamation' }
    ];
    const continent = [{ id: 6, label: 'Europe' }];
    const clientSector = [{ id: 338, label: 'Business Services' }];
    const matterSector = [];
    const dateFrom = new Date(null); //null; '2019-01-01';
    const dateTo = '2018-01-01';
    //the default for isOngoing should be false
    const isOngoing = false;

    const sectorTypeMenu = {}; //{ id: 43, label: 'Services' };
    const legalAreaMenu = { id: 60, label: 'Disputes' };

    // call a function to compose the query
    //prettier-ignore
    const sqlComposed1 = queryAdvSelect1(
      keyword, 
      clientName, 
      country, //can't turn into input
      legalArea, //can't turn into input
      continent, //can't turn into input
      clientSector, //can't turn into input
      matterSector, //can't turn into input
      dateFrom, 
      dateTo, 
      isOngoing, 
      sectorTypeMenu, 
      legalAreaMenu
      );

    //make the request to db
    // const dbResponse1 = await pool.request().query(sqlComposed1);

    //console.log('sqlComposed1', sqlComposed1);

    let formatDateFrom = new Date(dateFrom)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    let formatDateTo = new Date(dateTo)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    const dbResponse1 = await pool
      .request()
      .input('keyword', sql.NVarChar(2000), keyword)
      .input('clientName', sql.NVarChar(2000), clientName)
      .input('dateFrom', sql.Date, formatDateFrom)
      .input('dateTo', sql.Date, formatDateTo)
      .input('sectorTypeMenu', sql.Int, sectorTypeMenu.id)
      .input('legalAreaMenu', sql.Int, legalAreaMenu.id)
      .query(sqlComposed1);

    //send response
    res.status(200).json({
      status: 'Success',
      numberRecords: dbResponse1.recordset.length,
      data: dbResponse1.recordsets[0]
    });
  } catch (err) {
    next(err);
  }
};

module.exports = filterController;
