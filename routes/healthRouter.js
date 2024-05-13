const express = require('express');
const router = express.Router();

const healthServiceController = require('../controllers/healthServiceController');


const typeValidator = (req, res, next) => {
    validTypes = ['startup', 'readiness', 'liveness']

    if (!validTypes.includes(req.params.type)) {
        console.log(`Invalid healthcheck type '${req.params.type}'. Allowed types are: ${validTypes}`)
        return res.status(400).json({message: `Invalid healthcheck type. Allowed types are: ${validTypes}`});
    }

    // If type is valid, proceed to the next middleware or route handler
    next();
}

// Monitor and update the internal health status for simulation purpose
router.get('/status', healthServiceController.getOverallHealth);

// /startup || /readiness | /liveness
// IMPORTANT: Order of the routes matters. Otherwise it always goes to this and never goes to /status
router.get('/:type', typeValidator, healthServiceController.getHealthStatus);
router.put('/:type', typeValidator, healthServiceController.setHealthStatus);


module.exports = router;