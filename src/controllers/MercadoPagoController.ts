import MercadoPagoService from '../services/MercadoPagoService'
import { Request, Response } from 'express'

class MercadoPagoController {
    async criarPagamento(req: Request, res: Response){
        const { descricao, valor } = req.body

        try{
            const mercadopagoservice = new MercadoPagoService()
            const resultado = await mercadopagoservice.criarPagamento(descricao, valor)
            res.json(resultado)
        } catch (error) {
            console.error(error)
            res.status(500).json({
                error: "Erro ao criar pagamento",
                details: error
            })
        }
    }
}

export default new MercadoPagoController()
