const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const { check, validationResult } = require('express-validator');
const House = require('../models/houses');


router.get('/', async (req, res) => { 
    fetchData = await House.find();
    return res.json(fetchData);
});

router.post('/', [
    check('housetitle', 'House Title is required').not().isEmpty(),
    check('imageURL', 'imageURL is required').not().isEmpty(),
    check('numbOfBedRoom', 'numbOfBedRoom is required').not().isEmpty(),
    check('isHallAvaliable', 'isHallAvaliable is required').not().isEmpty(),
    check('isDinningRoom', 'isDinningRoom is required').not().isEmpty(),
    check('isKitchen', 'isKitchen is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors: errors.array()
        });
    }

    let { housetitle,
        imageURL,
        numbOfBedRoom,
        isHallAvaliable,
        isDinningRoom,
        isKitchen,
        description } = req.body;

    house = new House({
        houseName: housetitle,
        imageURL: imageURL,
        numbOfBedRoom: numbOfBedRoom,
        isHallAvaliable: isHallAvaliable,
        isDinningRoom: isDinningRoom,
        isKitchen: isKitchen,
        description: description
    });

    await house.save();

    return res.json({
        dataSaved: true
    });

});

module.exports = router;