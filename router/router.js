import { Router } from "express";
import { creaatePayment, executePayment, cancelPayment } from "../controller/controller.js";

const router = Router();


router.get('/create-payment', creaatePayment);
router.get('/execute-payment', executePayment);
router.get('/cancel-payment', cancelPayment);

export default router;