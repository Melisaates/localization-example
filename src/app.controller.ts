import { Controller, Get, HttpException } from '@nestjs/common';
import { __ } from '@squareboat/nestjs-localization';
import { LocalizationKeys } from './localization-model';

@Controller()
export class AppController {
  @Get('error')
  getError() {
    const calendarId = 'invalid_id';

    if (calendarId === 'invalid_id') {
      throw new HttpException(
        __(LocalizationKeys.calendar.availability.error.invalidDayOrTime.key),
        400
      );
    }

    return { message: 'Success' };
  }
}
