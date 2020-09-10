const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  try {
    const cats = Pets.getAllCats();
    const dogs = Pets.getAllDogs();
    const pets = {cats, dogs};
    res.status(200).json(pets);
  }
  catch {
		res.status(406).json({error:message});
  }
})

router.get('/cat', (req, res) => {
  try {
    const cats = Pets.getAllCats();
	res.status(200).json(cats);
  }
  catch {
		res.status(406).json({error:'message'});
  }
})

router.get('/dog', (req, res) => {
  try {
    const dogs = Pets.getAllDogs();
	res.status(200).json(dogs);
  }
  catch {
		res.status(406).json({error:'message'});
  }
})

router.delete('/cat', json, (req, res) => {
  // Remove a pet from adoption.
  try {
    const cat = Pets.dequeue('cat');
    res.status(200).json(cat);
  }
  catch {
    res.status(406).json({error:message});
  }
})

router.delete('/dog', json, (req, res) => {
  // Remove a pet from adoption.
  try {
    const dog = Pets.dequeue('dog');
    res.status(200).json(dog);
  }
  catch {
    res.status(406).json({error:message});
  }
})

module.exports = router
