import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { JsonFormsAngularService } from '@jsonforms/angular';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { Actions, createAjv, JsonFormsCore, JsonSchema, UISchemaElement } from '@jsonforms/core';

@Component({
  selector: 'app-jsonforms-isoleted',
  templateUrl: './jsonforms-isoleted.component.html',
  styleUrls: ['./jsonforms-isoleted.component.css'],
  // IMPORTANT
  providers: [
    JsonFormsAngularService
  ]
})
export class JsonformsIsoletedComponent implements OnInit {
 @Input()
  set schema(schema: JsonSchema) {
    const action = Actions.init({}, schema);
    this.jsonformsService.updateCore(action);
  }

  @Output()
  stateChange = new EventEmitter<object>();

  constructor(
    private jsonformsService: JsonFormsAngularService
  ) {

  }

  ngOnInit(): void {
    const core = this.getCore();

    this.jsonformsService.init({
      core,
      renderers: [
        ...angularMaterialRenderers
      ],
    });
  }

  send() {
    this.stateChange.emit(this.jsonformsService.getState().jsonforms.core.data);
  }

  private getCore(): JsonFormsCore {
    return {
      data: {},
      schema: {},
      uischema: {} as UISchemaElement,
      errors: [],
      ajv: createAjv({})
    };
  }

}