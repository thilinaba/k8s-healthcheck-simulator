module.exports = {
    server: {
        port: process.env.PORT || 3000,
    },

    status: {

        // Why the `=== ? :` crap?
        // Because env variables are set as strings. This is to typecase it to Boolean, and set a default behaviour
        // If the env variable is set to string "false", it will set the config to Boolean false.
        // If the evn is NOT SET, or set to anything else, config will be set as Boolean true.

        startup: process.env.STARTUP_STATE === "false" ? false : true,
        readiness: process.env.READY_STATE === "false" ? false : true,
        liveness: process.env.LIVE_STATE === "false" ? false : true,
    }
};