const express = require('express');
//const passport = require('passport');

const filterController = require('../controllers/filterController');
const legalAreasController = require('../controllers/legalAreasController');
const sectorsController = require('../controllers/sectorsController');
const insertController = require('../controllers/insertController');
const dropDownController = require('../controllers/dropDownController');

const router = express.Router();

router.post(
  '/filter',
  //passport.authenticate('oauth-bearer', { session: false }),
  filterController
);

router.post('/legalAreas', legalAreasController);

router.post('/sectors', sectorsController);

router.post('/dropDowns', dropDownController);

router.post('/insert', insertController);

module.exports = router;
