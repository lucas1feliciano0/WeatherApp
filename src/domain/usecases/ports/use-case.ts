export interface IUseCase {
  handle: (data: any) => Promise<any>;
}
