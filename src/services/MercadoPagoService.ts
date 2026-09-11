import "dotenv/config"
import { MercadoPagoConfig, Preference, Payment } from "mercadopago"

const mercadoPagoConfig = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_TOKEN
})

export default class MercadoPagoService {
    async criarPagamento(descricao: string, valor: number) {
        const preference = new Preference(mercadoPagoConfig)
        const resultado = await preference.create({
            body: {
                items: [
                    {
                        id: "1",
                        quantity: 1,
                        title: `${descricao}`,
                        unit_price: Number(valor),
                        currency_id: "BRL"
                    }
                ],
                // payment_methods: {
                //     installments: 1
                // }
            }
        })
        return {
            id: resultado.id,
            link: resultado.init_point
        }
    }

    async buscarMensalidadePaga(codigoMensalidadeMercadoPago: number) {
        const payment = new Payment(mercadoPagoConfig)
        return await payment.get({
            id: codigoMensalidadeMercadoPago
        })
    }
}
