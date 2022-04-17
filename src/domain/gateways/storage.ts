export interface IStorage<T = any> {
  setItem(key: string, value: T): Promise<void>;
  getItem(key: string): Promise<T | null>;
}
