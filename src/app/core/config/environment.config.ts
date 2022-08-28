import { InjectionToken } from '@angular/core';
import { IEnvironment } from './environment';

export const ENV_CONFIG = new InjectionToken<IEnvironment>('EnvironmentConfig');
