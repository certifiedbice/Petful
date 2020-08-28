const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  	// Return all the people currently in the queue.
	try{
		const waitList=People.get();
		res.status(200).json(waitList);
	}
	catch(error){
		res.status(406).json({error:message});
	}
})

router.post('/', json, (req, res) => {
	// Add a new person to the queue.
	try{
		const newPerson=People.enqueue(req.body);
  		res.status(201).json();
  	}
	catch(error){
		res.status(406).json({error:'message'});
	}
})

module.exports = router
