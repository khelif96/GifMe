const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('home');
});

router.get('/result', (req, res) => {
	res.render('result', req.body);
});

router.get('/search', (req, res) => {
	res.render('search');
});

module.exports = {router: router};