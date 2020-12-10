import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { InstrumentoComponent } from "./instrumento/instrumento.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, InstrumentoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
