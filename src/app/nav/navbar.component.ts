import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession } from "../events";
import { EventService } from "../events/shared/event.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {
    constructor(public auth: AuthService,
        private eventService: EventService) { }

    searchTerm: string = "";
    foundSessions: ISession[];

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(session => {
            this.foundSessions = session;
        });
        return this.foundSessions;
    }

}