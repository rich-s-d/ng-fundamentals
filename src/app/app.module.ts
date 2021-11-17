import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { AuthService } from './user/auth.service';

declare let toastr:Toastr;

@NgModule({
  declarations: [
    EventsAppComponent,
    Error404Component,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: EventService,
      useClass: EventService
    },
    { 
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService,
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
