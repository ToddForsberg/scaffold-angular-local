import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdSidenavModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';

import {MaterialDesignModule} from '../material_design_module';
import {BazService} from '../services/baz/baz';
import {RoutesService} from '../services/routes/routes';

import {BarModule} from './bar/bar_module';
import {FooModule} from './foo/foo_module';
import {HeaderModule} from './header/header_module';
import {HomeModule} from './home/home_module';
import {PageNotFoundModule} from './page_not_found/page_not_found_module';
import {Root} from './root';
import {RootRoutingModule} from './root_routing_module';
import {SidenavModule} from './sidenav/sidenav_module';

@NgModule({
  declarations: [Root],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    MdSidenavModule,
    HeaderModule,
    PageNotFoundModule,
    FlexLayoutModule,
    SidenavModule,
    HomeModule,
    BarModule,
    // FooModule contains child routes which require importing here.
    FooModule,
    // RootRoutingModule must come after ALL modules which contain routes.
    RootRoutingModule,
  ],
  providers: [
    // Global services provided throughout the app at root-level as singletons.
    BazService,
    RoutesService,
  ],
  bootstrap: [Root],
})
export class RootModule {
}
