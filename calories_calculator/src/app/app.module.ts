import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { IgxGridModule, IgxFocusModule, IgxButtonModule,
IgxDialogModule, IgxRippleModule, IgxNavbarModule, IgxAvatarModule,
IgxToastModule, IgxTooltipModule, IgxCardModule, IgxExpansionPanelModule, IgxListModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxFocusModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxRippleModule,
    IgxNavbarModule,
    IgxAvatarModule,
    IgxToastModule,
    IgxTooltipModule,
    IgxCardModule,
    IgxExpansionPanelModule,
    IgxListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
