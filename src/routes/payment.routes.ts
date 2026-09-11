import { Router } from 'express'
import MercadoPagoController from '../controllers/MercadoPagoController'

const paymentRouter = Router()


paymentRouter.post("/pagamento", MercadoPagoController.criarPagamento)

export default paymentRouter
