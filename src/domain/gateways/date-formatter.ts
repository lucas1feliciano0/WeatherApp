export type DateFormatParams = {
  date: Date;
  formatString: string;
};

export type UnixToDateParams = {
  date: number;
};

export interface IDateFormatter {
  format: (data: DateFormatParams) => string;
  fromUnixToDate: (data: UnixToDateParams) => Date;
}
