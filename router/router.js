import { Router } from "express";
import { creaatePayment } from "../controller/controller.js";

const router = Router();

router.get('/', (req, res) => { res.json({msg: 'Hola desde Router'}) });

export default router;