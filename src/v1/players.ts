import { z } from 'zod'

export const MinecraftPlayerSchema = z.object({
    uuid: z.string(),
    nickname: z.string(),
    digs: z.number().min(0),
    user_id: z.string(),
    rank: z.string().optional(),
    roles: z.array(z.string()),
    medias: z.array(z.object({
        type: z.string(),
        url: z.url()
    }))
})

export type MinecraftPlayer = z.infer<typeof MinecraftPlayerSchema>