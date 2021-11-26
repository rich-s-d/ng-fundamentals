import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

describe('VoterService', () => {

    let voterService: VoterService, mockHttp:any;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            //Arrange
            let session = { id: 6, voters: ['joe', 'john']};
            mockHttp.delete.and.returnValue(of(false));
            //Act
            voterService.deleteVoter(3, <ISession>session, 'joe');
            //Assert
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        }

    )})
})