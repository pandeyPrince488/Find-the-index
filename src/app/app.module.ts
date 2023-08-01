import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import this line

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [AppComponent, SeriesComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
