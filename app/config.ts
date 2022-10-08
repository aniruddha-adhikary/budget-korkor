import { Injectable } from "./deps.ts";

@Injectable()
export class Config {
  private readonly records: Record<string, string>;

  constructor() {
    this.records = Deno.env.toObject();
  }

  get(key: string): string | undefined {
    return this.records[key];
  }
}
