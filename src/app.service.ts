// src/app.service.ts

import { Injectable } from '@nestjs/common';
import { __ } from '@squareboat/nestjs-localization';
import { LocalizationKeys } from './localization-model';

@Injectable()
export class AppService {
  getHello(): string {
    return __(LocalizationKeys.auth.login.title.key); 
  }
}
