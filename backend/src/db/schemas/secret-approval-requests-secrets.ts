// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";



import { TImmutableDBKeys } from "./models";

export const SecretApprovalRequestsSecretsSchema = z.object({
  id: z.string().uuid(),
  version: z.number().default(1).nullable().optional(),
  secretBlindIndex: z.string().nullable().optional(),
  secretKeyCiphertext: z.string(),
  secretKeyIV: z.string(),
  secretKeyTag: z.string(),
  secretValueCiphertext: z.string(),
  secretValueIV: z.string(),
  secretValueTag: z.string(),
  secretCommentCiphertext: z.string().nullable().optional(),
  secretCommentIV: z.string().nullable().optional(),
  secretCommentTag: z.string().nullable().optional(),
  secretReminderNote: z.string().nullable().optional(),
  secretReminderRepeatDays: z.number().nullable().optional(),
  skipMultilineEncoding: z.boolean().default(false).nullable().optional(),
  algorithm: z.string().default('aes-256-gcm'),
  keyEncoding: z.string().default('utf8'),
  metadata: z.unknown().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  requestId: z.string().uuid(),
  op: z.string(),
  secretId: z.string().uuid().nullable().optional(),
  secretVersion: z.string().uuid().nullable().optional()
});

export type TSecretApprovalRequestsSecrets = z.infer<typeof SecretApprovalRequestsSecretsSchema>;
export type TSecretApprovalRequestsSecretsInsert = Omit<z.input<typeof SecretApprovalRequestsSecretsSchema>, TImmutableDBKeys>;
export type TSecretApprovalRequestsSecretsUpdate = Partial<Omit<z.input<typeof SecretApprovalRequestsSecretsSchema>, TImmutableDBKeys>>;
