import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService:any, mockVoterService:any;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    })

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            //Arrange
            component.sessions = <ISession[]>[{name: 'session 1', 
                level: 'intermediate'},
                {name: 'session 2', level: 'intermediate'},
                {name: 'session 3', level: 'beginner'}];
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;
            //Act
            component.ngOnChanges();
            //Assert
            expect(component.visibleSessions.length).toBe(2);
        })
        it('should sort the sessions correctly', () => {
            //Arrange
            component.sessions = <ISession[]>[{name: 'session 1', 
                level: 'intermediate'},
                {name: 'session 3', level: 'intermediate'},
                {name: 'session 2', level: 'beginner'}];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;
            //Act
            component.ngOnChanges();
            //Assert
            expect(component.visibleSessions.length).toBe(3);
            expect(component.visibleSessions[2].name).toBe('session 3');
        })
    })
});