const express = require('express');
const asyncHandler = require('express-async-handler');
const cors = require('cors')({ origin: true });
const routes = require('./routes');
const models = require('../sequelize/models');

async function main() {
    const app = express();
    app.use(express.json());
    app.use(cors);
    app.use(express.static('public'));
    app.use('/api', routes);
    app.get('/', asyncHandler(async (req, res) => {
        res.sendFile('public/index.html')
    }));
    //sync force:true @dev
    await models.sequelize.sync({ alter: { drop: false } });
    const server = app.listen(4000, function () {
        const port = server.address().port;
        console.log('🚀 Server listening at http://localhost:%s', port);
    });
}

main().catch(console.error)