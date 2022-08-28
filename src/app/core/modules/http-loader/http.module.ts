import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENV_CONFIG, IEnvironment } from '../../config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, HttpClientModule],
})
export class HttpModule {
    static register(config: IEnvironment): ModuleWithProviders<HttpModule> {
        return {
            ngModule: HttpModule,
            providers: [
                {
                    provide: ENV_CONFIG,
                    useValue: config,
                },
            ],
        };
    }
}
