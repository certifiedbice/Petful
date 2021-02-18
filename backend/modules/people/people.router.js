const express=require('express');
const path=require('path');
const json = require('body-parser').json()

const People = require('./people.service')
const store = require('../../store')
const router = express.Router()

router.get('/', (req, res) => {
  	// Return all the people currently in the queue.
	try{
		const waitList=People.get();
		res.status(200).json(waitList);
	}
	catch(error){
		res.status(406).json({error:'message'});
	}
})

router.post('/', json, (req, res,next) => {
	// Add a new person to the queue.
	try{
		const newPerson={...req.body};
		People.enqueue(newPerson.name)
		res.status(201).json({name:newPerson.name})
	}
	catch(error){
		res.status(406).json({error:'message'});
	}
})

router.delete('/', json, (req, res) => {
	try{
		const userToDelete={...req.body};
		People.dequeue(userToDelete.name);
		res.status(200).send('Person dequeued');
	}
	catch(error){
		res.status(406).json({error:'message'});
	}
})

module.exports = router
