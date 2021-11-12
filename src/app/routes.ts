import {
    EventDetailsComponent,
    EventRouteActivator,
    EventListResolver,
    EventsListComponent,
    CreateEventComponent,
    CreateSessionComponent,

    } from "./events/index";

import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404component";


export const appRoutes:Routes = [
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'],
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: EventsListComponent,
        resolve: {
            events: EventListResolver
        }
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator],
    },
    {
        path: '404',
        component: Error404Component,
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)
    },
    {
        path: 'events/session/new',
        component: CreateSessionComponent,
    },

    // {
    //     path: 'contact',
    //     component: ContactComponent
    // },
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];
