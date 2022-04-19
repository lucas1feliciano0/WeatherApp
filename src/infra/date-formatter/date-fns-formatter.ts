import {format, fromUnixTime} from 'date-fns';

import {
  DateFormatParams,
  IDateFormatter,
  UnixToDateParams,
} from '../../domain/gateways';

export class DateFnsFormatter implements IDateFormatter {
  format(data: DateFormatParams): string {
    try {
      const formattedString = format(data.date, data.formatString);
      return formattedString;
    } catch (error) {
      return '';
    }
  }

  fromUnixToDate(data: UnixToDateParams): Date {
    const result = fromUnixTime(data.date);
    return result;
  }
}
