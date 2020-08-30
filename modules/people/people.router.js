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
		console.log(req.body)
		const newPerson=People.enqueue(req.body.full_name);
		console.log(newPerson)
  		res.status(201).json(newPerson);
  	}
	catch(error){
		res.status(406).json({error:'message'});
	}
})

router.delete('/', (req, res) => {
	try{
		People.dequeue();
		res.status(200).send('Person dequeued');
	}
	catch(error){
		res.status(406).json({error:'message'});
	}
})

module.exports = router
