import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { JsonformsIsoletedComponent } from "./jsonforms-isoleted/jsonforms-isoleted.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule
  ],
  declarations: [AppComponent, HelloComponent, JsonformsIsoletedComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
