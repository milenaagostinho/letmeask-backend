import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { db } from "../../connection.ts"
import { schema } from "../../schema/index.ts"
import { count, eq } from 'drizzle-orm'

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms', async () => {
        const results = await db
        .select({
            id: schema.rooms.id,
            name: schema.rooms.name,
            createdAt: schema.rooms.created_at,
            questionsCount: count(schema.questions.id),
        })
        .from(schema.rooms)
        .leftJoin(schema.questions, eq(schema.questions.room_id, schema.rooms.id))
        .groupBy(schema.rooms.id)
        .orderBy(schema.rooms.created_at)

        return results
    })
}