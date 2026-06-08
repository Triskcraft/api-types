import { z } from 'zod'

export const PostBlockMediaTypeSchema = z.enum([
    'IMAGE',
    'VIDEO',
    'AUDIO',
    'FILE',
])

export type PostBlockMediaType = z.infer<typeof PostBlockMediaTypeSchema>

export const PostBlockMediaSchema = z.object({
    id: z.string(),
    filename: z.string(),
    url: z.url(),
    content_type: z.string().nullable(),
    media_type: PostBlockMediaTypeSchema,
    size: z.number().min(0),
    width: z.number().nullable(),
    height: z.number().nullable(),
    description: z.string().nullable(),
    hash: z.string().nullable(),
})

export type PostBlockMedia = z.infer<typeof PostBlockMediaSchema>

export const PostBlockSchema = z.object({
    timestamp: z.number(),
    content: z.string().nullable(),
    components: z.array(z.unknown()),
    embeds: z.array(z.unknown()),
    media: z.array(PostBlockMediaSchema),
})

export type PostBlock = z.infer<typeof PostBlockSchema>

export const BlogPostUserSchema = z.object({
    id: z.string(),
    username: z.string(),
})

export type BlogPostUser = z.infer<typeof BlogPostUserSchema>

export const BlogPostPlayerSchema = z.object({
    uuid: z.string(),
    nickname: z.string(),
    digs: z.number().min(0),
    rank: z.string(),
    linked_roles: z.array(
        z.object({
            role: z.object({
                name: z.string(),
            }),
        }),
    ),
    roles: z.array(z.string()),
})

export type BlogPostPlayer = z.infer<typeof BlogPostPlayerSchema>

export const BlogPostCoverImageSchema = PostBlockMediaSchema

export type BlogPostCoverImage = z.infer<typeof BlogPostCoverImageSchema>

export const BlogPostSchema = z.object({
    id: z.string(),
    title: z.string(),
    cover_image: BlogPostCoverImageSchema.nullable(),
    user: BlogPostUserSchema,
    created_at: z.number(),
    updated_at: z.number(),
    player: BlogPostPlayerSchema.nullable(),
    post_blocks: z.array(PostBlockSchema),
})

export type BlogPost = z.infer<typeof BlogPostSchema>

export const GetPostsResponseSchema = z.array(BlogPostSchema)

export type GetPostsResponse = z.infer<typeof GetPostsResponseSchema>
