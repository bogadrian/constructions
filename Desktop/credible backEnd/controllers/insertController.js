const {
  insertIntoClientSectors,
  staticInsertQueries,
  insertIntoMatterContinents,
  insertIntoMatterLegalAreas,
  insertIntoMatterSectors,
  insertIntoMatterJurisdictions,
  insertIntoMatterPerson,
  insertIntoMatterOffice,
  insertIntoMatterPracticeGroup
} = require('../Queries/insert');
const { selectByMatterId } = require('../Queries/selectAll');

const { poolPromise } = require('../db');
const sql = require('mssql');

const insertController = async (req, res, next) => {
  try {
    const pool = await poolPromise;
    //const transaction = new sql.Transaction(pool);

    const clientConfidentialName = 'test confidential';
    const clientNumber = 111;
    const clientPublicName = 'test public client name';
    const clientSectors = [265, 266, 267];
    //const clientSectors =[1,2,3];

    const mName = 'Test Matter';
    const mNumber = 1;
    const mPublicClientname = 'public matter test name';
    let mIsConfidential = false;
    const mStartDate = '2019-01-01';
    const mCompletionDate = '2020-01-01';
    const mDealValue = '100k';
    const mLanguageId = 247;
    const mPublicDescription = 'test matter public description';
    const mConfidentialDescription = '';
    const mAdditionalInformation = 'test matter additional information';
    const mUpdatedOn = '';
    const mUpdatedBy = 12;
    const mKeywords = 'test matter, testMatter';

    const mContinentsIds = [5, 6];

    const mLegalAreasIds = [415, 416]; //Acquisition Finance - Borrower, Acquisition Finance - Lender
    const mSectorIds = [265, 267]; //Fashion & Luxury, Food & Beverage
    const mJurisdictionIds = [792, 690];

    const mPersonsId = [
      { id: 20520, relationshipTypeId: 1, role: 'Partner' },
      { id: 22290, relationshipTypeId: 1, role: 'Associate' }

      //{id:1, relationshipTypeId:1, role:'Partner'},
      // {id:2, relationshipTypeId:1, role:'Associate'}
    ];

    const mOfficeIds = [
      { id: 382, relationshipTypeId: 1 },
      { id: 329, relationshipTypeId: 3 }
    ];

    const mPracticeGroupIds = [
      { id: 3, relationshipTypeId: 1 },
      { id: 4, relationshipTypeId: 1 },
      { id: 6, relationshipTypeId: 3 }
    ];

    const mBDPerson = {
      id: 21938,
      firstname: 'Hanna',
      lastname: 'Thordardottir'
    };

    //// ---VALIDATION BEFORE I BEGIN TRANZACTION ---////
    ///----- check all mandatory fields below
    /// client sectors,
    /// MatterData.Publicclientname, MatterData.Publicdescription, MatterData.LanguageID
    /// MatterData.BD, MatterData.Completiondate, MatterData.LegalAreas,
    /// MatterData.Jurisdictions, MatterData.Continents
    //****** validate  client sectors separate */

    if (clientSectors.length && mPublicClientname && mPublicDescription && mLanguageId && mCompletionDate && mContinentsIds && mLegalAreasIds && mJurisdictionIds) {
    }

    const transaction = new sql.Transaction(pool);
    await transaction.begin();
    const req = new sql.Request(transaction);
    const clients = await req
      .input('confidentialClientName', sql.NVarChar(2000), clientConfidentialName)
      .input('clientNumber', sql.Int, clientNumber)
      .input('publicClientName', sql.NVarChar(500), clientPublicName)
      .query(staticInsertQueries().insertClientAction);

    let clientID = Number(clients.recordsets[0][0].ID);
    console.log(clientID);

    // prettier-ignore
    const clientSectorsReq = await req
    .input('clientId', sql.Int, clientID)
    .query(insertIntoClientSectors(clientSectors));

    if (mConfidentialDescription || clientConfidentialName) {
      mIsConfidential = true;
    }

    const today = new Date();
    const dateToday = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

    const matterReq = await req
      .input('mName', sql.NVarChar(500), mName)
      .input('mNumber', sql.Int, mNumber)
      .input('mPublicClientname', sql.NVarChar(2000), mPublicClientname)
      .input('mIsConfidential', sql.Bit, mIsConfidential)
      .input('mClientId', sql.Int, clientID)
      .input('mStartDate', sql.DateTime, mStartDate)
      .input('mCompletionDate', sql.DateTime, mCompletionDate)
      .input('mDealValue', sql.NVarChar(300), mDealValue)
      .input('mLanguageId', sql.BigInt, mLanguageId)
      .input('mPublicDescription', sql.NVarChar(sql.MAX), mPublicDescription)
      .input('mConfidentialDescription', sql.NVarChar(sql.MAX), mConfidentialDescription)
      .input('mAdditionalInformation', sql.NVarChar(sql.MAX), mAdditionalInformation)
      .input('mUpdatedOn', sql.Date, dateToday)
      .input('mUpdatedBy', sql.Int, mUpdatedBy)
      .input('mKeywords', sql.NVarChar(2000), mKeywords)
      .query(staticInsertQueries().insertMatterAction);

    let matterID = Number(matterReq.recordsets[0][0].ID);

    const bDPersonReq = await req
      .input('matterIdBD', sql.Int, matterID)
      .input('personIdBD', sql.Int, mBDPerson.id)
      .input('relationshipTypeIdBD', sql.Int, 2)
      .input('roleBD', sql.NVarChar(100), 'Support')
      .query(staticInsertQueries().insertBDAction);

    // prettier-ignore
    const continentReq = await req
    .input('matterId_c', sql.Int, matterID)
    .query(insertIntoMatterContinents(mContinentsIds));

    // prettier-ignore
    const legalAreasReq = await req
    .input('matterId_la', sql.Int, matterID)
    .query(insertIntoMatterLegalAreas(mLegalAreasIds));

    // prettier-ignore
    const sectorsReq = await req
    .input('matterId_s', sql.Int, matterID)
    .query(insertIntoMatterSectors(mSectorIds));

    // prettier-ignore
    const jurisdictionsReq = await req
    .input('matterId_j', sql.Int, matterID)
    .query(insertIntoMatterJurisdictions(mJurisdictionIds));

    // prettier-ignore
    const personsReq = await req
    .input('matterId_p', sql.Int, matterID)
    .query(insertIntoMatterPerson(mPersonsId));

    // prettier-ignore
    const officesReq = await req
    .input('matterId_O', sql.Int, matterID)
    .query(insertIntoMatterOffice(mOfficeIds));

    // prettier-ignore
    const practiceGroupReq = await req
    .input('matterId_PG', sql.Int, matterID)
    .query(insertIntoMatterPracticeGroup(mPracticeGroupIds));

    ///************************************************************* */
    //test mny insert by selecting matter and all the connected tables

    // prettier-ignore
    const selectClientQuery = await req
    .input('selectedMatterId', sql.Int, matterID)
    .query(selectByMatterId().selectMatterClientAction);

    // prettier-ignore
    const continents = await req
    .input('matterIdContinent', sql.Int, matterID)
    .query(selectByMatterId().selectContinentsAction);

    // prettier-ignore
    const clientSectorsSelect = await req
    .input('matterIdClientSectors', sql.Int, matterID)
    .query(selectByMatterId().selectClientSectorsAction);

    // prettier-ignore
    const matterSectors = await req
    .input('matterIdSectors', sql.Int, matterID)
    .query(selectByMatterId().selectMatterSectorsAction);

    // prettier-ignore
    const legalAreas = await req
    .input('matterIdLegalAreas', sql.Int, matterID)
    .query(selectByMatterId().selectLegalAreasAction);

    // prettier-ignore
    const jurisdictions = await req
    .input('matterIdJurisdiction', sql.Int, matterID)
    .query(selectByMatterId().selectJurisdictionsAction);

    // prettier-ignore
    const persons = await req
    .input('matterIdPerson', sql.Int, matterID)
    .query(selectByMatterId().selectMatterPersonsAction);

    // prettier-ignore
    const offices = await req
    .input('matterIdOffice', sql.Int, matterID)
    .query(selectByMatterId().selectMatterOfficesAction);

    // prettier-ignore
    const practiceGroups = await req
    .input('matterIdPG', sql.Int, matterID)
    .query(selectByMatterId().selectMatterPracticegroupAction);

    // prettier-ignore
    const selectBD = await req
    .input('matterIdbdPerson', sql.Int, matterID)
    .query(selectByMatterId().selectMatterBDAction);

    const doneCommit = await transaction.commit(err => {
      if (!err) {
        res.status(200).json({
          status: 'matter,client, sectors, legal areas, continents, countries, persons ',
          MatterClient: (selectClientQuery && selectClientQuery.recordsets[0]) || '',
          BD: (selectBD && selectBD.recordsets[0]) || '',
          ClientSectors: (clientSectorsSelect && clientSectorsSelect.recordsets[0][0]) || '',
          MatterSectors: (matterSectors && matterSectors.recordsets[0][0]) || '',
          MatterLegalAreas: (legalAreas && legalAreas.recordsets[0][0]) || '',
          Continents: (continents && continents.recordsets[0][0]) || '',
          Countries: (jurisdictions && jurisdictions.recordsets[0][0]) || '',
          Persons: (persons && persons.recordsets[0]) || '',
          Offices: (offices && offices.recordsets[0]) || '',
          PracticeGroups: (practiceGroups && practiceGroups.recordsets[0]) || ''
        });
      } else {
        console.log('commit error ----', err.stack);
      }
    });
  } catch (err) {
    res
      .status(403)
      .json({
        status: 'Error in SQL Query',
        message: (err && err.message) || 'Error in SQL Query ',
        'error stack': (err && err.stack) || 'Error stack not found '
      })
      .send();
  }
};

module.exports = insertController;
