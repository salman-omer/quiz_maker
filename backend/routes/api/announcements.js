const express = require('express');
const router = express.Router();

// Announcement schema
const Announcement = require('../../schemas/announcements');

// @route   Get api/announcements
// @descr   Get All announcements
// @acess   ALL
router.get('/getAnnouncement', (req,res) =>{ 
    Announcement.find()
        .sort({ date: -1})
        .then(announcements=> res.json(announcements));

});

// @route   add one api/announcements
// @descr   Create a post
// @acess   Professor or TA
router.post('/postAnnouncement', (req,res) => {
    const newAnnouncement = new Announcement({
        message: req.body.message
    });
    newAnnouncement.save().then(item => res.json(item));
});

// @route   Delete api/announcements/:id
// @descr   Delete a post
// @acess   Professor or TA
router.post('/delteAnnouncement/:id', (req,res) => {
    Announcement.findById(req.params.id)
        .then(item =>item.remove().then( () => res.json({delete: true})))
        .catch(err => res.status(404).json{delete: false})
});

module.exports = router;