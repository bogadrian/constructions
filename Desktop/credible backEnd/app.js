const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
//const config = require('./msal-config');
//const passport = require('passport');
//const BearerStrategy = require('passport-azure-ad').BearerStrategy;

const cors = require('cors');
const getRouter = require('./routes/getRouter');

const app = express();

//set Cors
const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
};
app.use(cors(corsOptions));
// Middleware Stack
//set http secure headers with helmet
app.use(helmet());

// set morgan tu run only in development enviroment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API 10 100 per hour
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again!'
});
app.use('/api', limiter);

// set express.json() middleware in oreder to have access to req.body data. Limit the amount of data coming in with req.body at only 10kb
app.use(express.json({ limit: '10kb' }));

//protect agains xss atacks. don't allow malicious html to be sent in req.body
app.use(xss());

////////////////////////////////////////////////////////
//Passport msal autentication
// const options = {
//   identityMetadata: config.creds.identityMetadata,
//   clientID: config.creds.clientID,
//   audience: config.creds.audience,
//   issuer: config.creds.issuer,
//   loggingNoPII: config.creds.logingNoPII,
//   loggingLevel: config.creds.loggingLevel,
//   validateIssuer: config.creds.validateIssuer
// };

// app.use(passport.initialize()); // Starts passport
// app.use(passport.session()); // Provides session support

// const bearerStrategy = new BearerStrategy(options, function(token, done) {
//   done(null, {}, token);
// });

// passport.use(bearerStrategy);

// // authentication middlweare - all the routes below this line must be authenticated
// app.use(passport.authenticate('oauth-bearer', { session: false }));

// END Autentication Stack
////////////////////////////////////////////

// Routes
app.use('/api/v1/credible', getRouter);

// route handler for all the endpoints misteken
app.all('*', (req, res, next) => {
  next(`Can't find ${req.originalUrl} on this path!`, 404);
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    res
      .status(500)
      .json({ status: 'Error', message: err.message, stack: err.stack });
  }
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ status: 'Error', message: 'Something went wrong' });
  }
});

// export the app in order to make it availble in routes files
module.exports = app;
