// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";



import { TImmutableDBKeys } from "./models";

export const OrgRolesSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable().optional(),
  slug: z.string(),
  permissions: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  orgId: z.string().uuid()
});

export type TOrgRoles = z.infer<typeof OrgRolesSchema>;
export type TOrgRolesInsert = Omit<z.input<typeof OrgRolesSchema>, TImmutableDBKeys>;
export type TOrgRolesUpdate = Partial<Omit<z.input<typeof OrgRolesSchema>, TImmutableDBKeys>>;
