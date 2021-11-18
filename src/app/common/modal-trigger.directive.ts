import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;

    constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $:any) {
        this.el = ref.nativeElement;
    }


    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$('#simple-modal').modal({})
        });
    }
}