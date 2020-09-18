export type ContentTypeName = "string" | "text" | "integer" | "media" | "component" | "boolean" | "enumeration" | "label"

export enum ATTIBUTE_TYPES {
  STRING = "string",
  TEXT = "text",
  INT = "integer",
  MEDIA = "media",
  COMPONENT = "component",
  ENUMERATION = "enumeration",
  LABEL = "label"
}

export enum WHITELIST_KEYS {
  COMPONENT = "__component",
  LABEL = "__label",
  ID = "__id",
  CONTENT = "content"
}

export const AttributeTypesWhitelist: string[] = [
  "string",
  "text",
  "integer",
  "media",
  "component",
  "boolean",
  "enumeration",
  "label",
];

export const AttributeTypesBlacklist: string[] = [
  "id",
  "users",
  "created_by",
  "created_at",
  "updated_at",
  "updated_at"
];

export const WhitelistKeys: string[] = [
  "__component",
  "__label",
  "__id",
  "content"
];