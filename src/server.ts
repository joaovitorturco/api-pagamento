import express from "express";  
import paymentRouter from "./routes/payment.routes";

const app = express()
app.use(express.json())

app.use(paymentRouter)

app.listen(3333, () => console.log('Servidor on'))