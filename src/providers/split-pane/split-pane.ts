import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class SplitPaneProvider {

    splitPaneState: boolean;
    constructor(public platform: Platform) {
        this.splitPaneState = false;
    }

    setSplitPane(state: boolean) {

        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            console.log('web');
            if (this.platform.width() > 768) {
                this.splitPaneState = state;
            } else {
                this.splitPaneState = false;
            }
        } else {
            this.splitPaneState = false;
        }
    }

    getSplitPane() {
        return this.splitPaneState;
    }

}
