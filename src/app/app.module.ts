import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@croco/shared';
import { HttpModule } from '@croco/core';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpModule.register({ environment }), LayoutModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
