const express = require('express');
const router = express.Router();

// const calculateRoutes = require('./calculate');

// router.use('/calculate', calculateRoutes);

// Redirect when not found 
router.use('*', (_, res) => {
    return res.status('404').json({
        message: 'No matched Route'
    })
});

module.exports = router;