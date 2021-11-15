import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "./shared/event.model";


@Component({
    selector: "create-session",
    templateUrl: "./create-session.component.html",
    styles: [`
        em { float:right; color: #E05C65; padding-left: 10px; }
        .error input, .error select, .error textarea { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter;
    @Output() cancelAddSession = new EventEmitter();
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name = new FormControl("", Validators.required);
        this.presenter = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.level = new FormControl("", Validators.required);
        this.abstract = new FormControl("", [Validators.required, Validators.maxLength(400), this.restrictedWords]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    private restrictedWords(control: FormControl): {[key: string]: any} {
        return control.value.includes("foo") ? { "restrictedWords": "foo"} : null!;
    }

    saveSession(formValues: ISession) {
        let session: ISession = {
            id: 0,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: [],
        };
        this.saveNewSession.emit(session);
    }

    cancelCreateSession() {
        this.cancelAddSession.emit();
    }
}