import { Entry, Fields, FormActionable, AuthenticatedUser } from "./interfaces";


export class StrapiFormMethodsDecorator {
  private apiID: string;
  private strapiSDK: FormActionable;

  constructor(contentTypeUID: string, strapiSDK: FormActionable) {
    this.strapiSDK = strapiSDK;
    this.apiID = this.getApiID(contentTypeUID);
  }

  getApiID(contentTypeUID: string): string {
    if (contentTypeUID.indexOf("::") === 0 || contentTypeUID.indexOf(".") === 0) {
      throw new Error(`
        Strapi Form Builder requires a global
        content type id i.e. application::contentTypeUID.contentTypeUID
      `);
    }

    return contentTypeUID.slice(
      contentTypeUID.indexOf("::") + 2,
      contentTypeUID.indexOf(".")
    );
  }

  get strapi(): FormActionable {
    return this.strapiSDK;
  }

  async create(data: Fields): Promise<Entry> {
    return await this.strapiSDK.createEntry(this.apiID, data);
  }

  async update(data: Fields, id ?: string | number): Promise<Entry> {
    return await this.strapiSDK.updateEntry(this.apiID, id, data);
  }

  async search(params: object): Promise<Entry[]> {
    return await this.strapiSDK.getEntries(this.apiID, params);
  }

  async delete(id: string|number): Promise<void> {
    this.strapiSDK.deleteEntry(this.apiID, id);
  }
}