import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../shared/event.model";
import { Router } from "@angular/router";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        a { cursor: pointer }
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent {
    event:IEvent;
    addMode:boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';
    constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['joe'];
            this.addMode = false;
        })
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextID = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextID + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe((event) => {
            this.addMode = false;
        });
    }

    cancelAddSession() {
        this.addMode = false;
    }

} 