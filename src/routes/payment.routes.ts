import { Router } from 'express'
import MercadoPagoController from '../controllers/MercadoPagoController'

const paymentRouter = Router()


paymentRouter.post("/pagamento", MercadoPagoController.criarPagamento)
paymentRouter.get("/sucesso", MercadoPagoController.mensagemSucesso)

export default paymentRouter
