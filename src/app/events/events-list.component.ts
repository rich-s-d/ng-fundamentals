import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="well">
            <div>Hello World</div>
        </div>
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
        <h3>{{thumbnail.someProperty}}</h3>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div>
    `,
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: "Angular Connect",
        date: "blah blah",
        time: "wefwfw",
        price: 5634534,
        imageUrl: "edwqedwqed",
        location: {
            address: "edfwedw",
            city: "wefdfe",
            country: "aedwqedqw",
        }
      }
    
}