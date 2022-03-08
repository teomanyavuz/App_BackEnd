/**
 * node.js modülerite
 * 
*/

const express = require("express");
const helmet = require("helmet");
const { BilgilerRoutes } = require("./api-routes");
const config = require("./config");

config();

const app = express();

/*
 *helmet paketi uygulamaya eklendi
 bu paketin ne işe yaradığını araştırın
 */

app.use(helmet());

app.listen(process.env.PORT, () => {
    //3002 portundan gelen istekler
    console.log(`${process.env.PORT} portu dinleniyor...`);

    app.use(BilgilerRoutes);
})
