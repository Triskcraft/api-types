import { z } from 'zod'

export const OAuthTokenResponseSchema = z.object({
    access_token: z.string(),
    token_type: z.literal('Bearer'),
    expires_in: z.number(),
    refresh_token: z.string().optional(),
})

export type OAuthTokenResponse = z.infer<typeof OAuthTokenResponseSchema>

export const OAuthTokenRequestSchema = z.object({
    grant_type: z.literal('authorization_code'),
    code: z.string(),
    redirect_uri: z.url(),
    client_id: z.string(),
    code_verifier: z.string(),
})

export type OAuthTokenRequest = z.infer<typeof OAuthTokenRequestSchema>
