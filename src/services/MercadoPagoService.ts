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
            }
        })
        return {
            id: resultado.id,
            link: resultado.init_point
        }
    }
}
