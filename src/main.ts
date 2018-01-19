// Just in time compilation, default for external NG apps.

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {RootModule} from './root/root_module';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(RootModule);
