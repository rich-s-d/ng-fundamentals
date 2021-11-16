import { InjectionToken } from '@angular/core';

declare let toastr: any;

export let TOASTR_TOKEN = new InjectionToken<>('toastr')