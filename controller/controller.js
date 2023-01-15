import axios from "axios";



const creaatePayment = async (req, res) => {
    
    const respuesta = await axios({
        method: 'post',
        url: `${process.env.PAYPAL_API}/v2/checkout/orders`,
        data: {
            'intent': 'CAPTURE',
            'purchase_units': [{
                'amount': {
                    'currency_code': 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                    'value': '115'
                }
            }],
            'application_context': {
                'brand_name': `MiTienda.com`,
                'landing_page': 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
                'user_action': 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
                'return_url': `http://localhost:4000/execute-payment`, // Url despues de realizar el pago
                'cancel_url': `http://localhost:4000/cancel-payment` // Url despues de realizar el pago
            }
        },
        auth: { username: process.env.PAYPAL_CLIENT, password: process.env.PAYPAL_SECRET }

    });

    res.json(respuesta.data);


}

const executePayment = async (req, res) => {
    const {token,PayerID} = req.query;
    
    try {
        const respuesta = await axios({
            method: 'post',
            url: `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
            data: {},
            auth: { username: process.env.PAYPAL_CLIENT, password: process.env.PAYPAL_SECRET }
        });

        res.json({data: respuesta.data});
    } catch (error) {
        console.log(error)
    }
    

    
}

const cancelPayment = (req, res) => {

    res.send({msg: 'Pago cancelado'});
}

export {
    creaatePayment,
    cancelPayment,
    executePayment
}