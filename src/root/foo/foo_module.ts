import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MaterialDesignModule} from '../../material_design_module';
import {Foo} from './foo';
import {FooOneModule} from './fooone/fooone_module';
import {FooTwoModule} from './footwo/footwo_module';
import {FooRoutingModule} from './foo_routing_module';

@NgModule({
  declarations: [Foo],
  imports: [
    FooOneModule,
    FooTwoModule,
    FooRoutingModule,
    FlexLayoutModule,
    MaterialDesignModule,
  ],
})
export class FooModule {
}
