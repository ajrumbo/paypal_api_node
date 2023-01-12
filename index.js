import express from "express";
import dotenv from "dotenv";
import router from "./router/router.js";


dotenv.config();

const app = express();

app.use(cors());

app.use('/', router);



app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado...');
});