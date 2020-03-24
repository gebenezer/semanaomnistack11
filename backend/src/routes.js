const express = require('express');

//Controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const route = express.Router();

//Sessoes - Login
route.post('/session', SessionController.store);

//Ongs
route.get('/ongs', OngController.index);
route.post('/ongs', OngController.store);

//Profile
route.get('/profile', ProfileController.index);

//Incidents
route.get('/incidents', IncidentController.index);
route.post('/incidents', IncidentController.store);
route.delete('/incidents/:id', IncidentController.delete);

module.exports = route;