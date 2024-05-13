const express = require('express');

const config = require('./config');

// Override console.log to append timestamp to the logs
const originalConsoleLog = console.log;
console.log = (...args) => {
    const timestamp = new Date().toISOString();
    originalConsoleLog(`[${timestamp}]`, ...args);
};
// ---

const healthRouter = require('./routes/healthRouter');
const mathRouter = require('./routes/mathRouter');

const app = express();
app.use(express.json());

app.use('/health', healthRouter);
app.use('/math', mathRouter);

// 404 route
app.use('/*', (req, res) => {
    res.status(404).json({ message: 'Requested resource not found' });
})

// Start the server using the port from the config file
app.listen(config.server.port, () => {
    console.log(`Server is running on http://localhost:${config.server.port}`);
});