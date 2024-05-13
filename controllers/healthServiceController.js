const config = require('../config');

exports.getHealthStatus = async function (req, res, next) {

    let returnCode = 503; // by default, set to 503

    // set to 200, if the probe is enabled (set to true) in configs
    if (config.status[req.params.type]){
        returnCode = 200;
    }

    console.log(`${req.params.type} probe called. returning status code - ${returnCode}`);
    res.sendStatus(returnCode);
}

exports.setHealthStatus = async function (req, res, next) {
    config.status[req.params.type] = !config.status[req.params.type];
    console.log(`${req.params.type} probe status set to ${config.status[req.params.type]}`);
    return res.status(201).json({ message: `${req.params.type} probe status set to ${config.status[req.params.type]}` });
}

exports.getOverallHealth = async function (req, res, next) {
    console.log(`Overall health status endpoint called. Returning: ${JSON.stringify(config.status)}`);
    return res.status(200).json(config.status);
}