import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { createQuestionRoute } from './db/http/routes/create-question.ts'
import { createRoomRoute } from './db/http/routes/create-room.ts'
import { getRoomQuestions } from './db/http/routes/get-room-questions.ts'
import { getRoomsRoute } from './db/http/routes/get-rooms.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: '*',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return 'OK'
})

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestions)
app.register(createQuestionRoute)

app.listen({ port: env.PORT })