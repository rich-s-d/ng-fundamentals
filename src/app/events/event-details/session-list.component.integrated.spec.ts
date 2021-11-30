import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { DurationPipe } from '../shared';
import { By } from '@angular/platform-browser';
import { CollapsibleWellComponent } from 'src/app/common';
import { UpvoteComponent } from './upvote.component';

describe('SessionListComponent', () => {

    let mockAuthService:any,
        mockVoterService:any,
        fixture:ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(() => {
        mockAuthService = { isAuthenticated: () => true, currentUser: { userName: 'Joe' } };
        mockVoterService = { userHasVoted: () => true};
        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                DurationPipe,
                // CollapsibleWellComponent,
                // UpvoteComponent,
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService}
            ],
            schemas: [NO_ERRORS_SCHEMA], // this is for shallow component testing, i.e., not using or mocking child components.
        })
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display', () => {
        it('should have the correct name', () => {
            //Arrange
            component.sessions = [{ id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;
            component.ngOnChanges();
            //Act
            fixture.detectChanges(); //updates the bindings.
            //Assert. 
            // QuerySelector is a raw DOM api accessor to the template of the component (same as JS DOM accessor)
            // DebugElement is a wrapper around the QuerySelector.
            // There are analogous methods for interacting with the DOM.
            expect(element.querySelector('[well-title]')?.textContent).toContain('Session 1'); //usually use toContain and not toBe as textContent is every in the div called well-title.
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');

        })

    })
});