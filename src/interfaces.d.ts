export interface Schema {
  attributes: AttributeList
}

export interface AuthenticatedUser {
  user: object;
  jwt: string;
}

export interface FormBuilderOutput {
  fields: Fields;
  formState: Fields;
  user?: AuthenticatedUser,
}

export interface MetadataData {
  label: string
}

export interface Metadata {
  [key: string]: MetadataData
}

export interface MetadataList {
  [key: string]: Metadata
}

interface ComponentField {
  __component?: string
  __label?: string
  __id?: number
  schema: Schema
}

interface AttributeList {
  [key: string]: Attribute
}

export interface Entry {
  id?: number
}

export interface ContentType {
  schema?: Schema
  metadatas?: MetadataList
}

export interface ContentTypeBase {
  contentType?: ContentType
  components?: ComponentList
}

export interface ContentTypeResponse {
  data?: ContentTypeBase
  statusCode?: string
  error?: string
  message?: string
}

export interface Attribute {
  default?: any
  component?: string
  type?: string
  value?: any
  repeatable ?: boolean
  __component?: string
  __label?: string
  __id?: number
}

export interface Fields {
  id?: number
  [key: string]: any
}

export interface ComponentList {
  [key: string]: ContentType
}

export interface FormActions {
  create: (body: object) => Promise<any>;
  update: (id: string | number, data: object) => Promise<any>;
  search: (params: object) => Promise<any>;
  delete: (id: string | number) => Promise<void>;
}

export interface FormActionable {
  getToken(): string|false;
  login: (username: string, password: string) => Promise<AuthenticatedUser>;
  createEntry: (apiID: string, body: object) => any;
  updateEntry: (apiID: string, id: string | number, data: object) => any;
  getEntries: (apiID: string, params: object) => any;
  deleteEntry: (apiID: string, id: string | number) => void;
}