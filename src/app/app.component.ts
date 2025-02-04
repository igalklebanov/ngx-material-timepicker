/* tslint:disable:max-line-length */
import { Component } from '@angular/core';
import { NgxMaterialTimepickerTheme } from './material-timepicker/models/ngx-material-timepicker-theme.interface';
import { DateTime } from 'luxon';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    simpleExamples = `
       <div class="12hr-example">
            <input placeholder="12hr format (default settings)" aria-label="12hr format" [ngxTimepicker]="default" readonly>
            <ngx-material-timepicker #default></ngx-material-timepicker>
       </div>

       <div class="24hr-example">
            <input placeholder="24hr format" aria-label="24hr format" [ngxTimepicker]="fullTime" [format]="24"  readonly>
            <ngx-material-timepicker #fullTime></ngx-material-timepicker>
       </div>
       <div class="default-time-example">
            <input aria-label="default time" [ngxTimepicker]="defaultValue" [value]="'05:11 pm'"  readonly>
            <ngx-material-timepicker #defaultValue></ngx-material-timepicker>
       </div>

        <div class="ngx-material-timepicker-example__form-group">
            <input placeholder="Default time 11:11 pm" aria-label="default time"
                [ngxTimepicker]="defaultTime" readonly>
            <ngx-material-timepicker #defaultTime [defaultTime]="'11:11 pm'"></ngx-material-timepicker>
        </div>

       <div class="disabled-example">
            <input placeholder="Disabled Time Picker" aria-label="disabled time picker" [ngxTimepicker]="disabled" [disabled]="true">
            <ngx-material-timepicker #disabled></ngx-material-timepicker>
       </div>
    `;

    minMaxExamples = `
        <div class="min-time-example">
            <input placeholder="Min time 03:15 am"
                [ngxTimepicker]="min" [min]="'03:15 am'" readonly>
            <ngx-material-timepicker #min></ngx-material-timepicker>
        </div>

        <div class="max-time-example">
            <input placeholder="Max time 06:18 pm"
                [ngxTimepicker]="max" max="06:18 pm" readonly>
            <ngx-material-timepicker #max></ngx-material-timepicker>
        </div>

        <div class="time-range-example">
            <input placeholder="Time range from 12:10 am to 08:11 pm"
                [ngxTimepicker]="range" min="12:10 am" max="08:11 pm" readonly>
            <ngx-material-timepicker #range></ngx-material-timepicker>
        </div>`;

    toggleExamples = `
        <div class="toggle-example">
            <input [ngxTimepicker]="toggleTimepicker" [disableClick]="true" readonly>
            <ngx-material-timepicker-toggle [for]="toggleTimepicker"></ngx-material-timepicker-toggle>
            <ngx-material-timepicker #toggleTimepicker></ngx-material-timepicker>
        </div>

        <div class="toggle-custom-icon-example">
            <input [ngxTimepicker]="toggleIcon" [disableClick]="true" readonly>
            <ngx-material-timepicker-toggle [for]="toggleIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" ngxMaterialTimepickerToggleIcon>
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,16H7.995 C7.445,16,7,15.555,7,15.005v-0.011C7,14.445,7.445,14,7.995,14H14V5.995C14,5.445,14.445,5,14.995,5h0.011 C15.555,5,16,5.445,16,5.995V16z"/>
                </svg>
            </ngx-material-timepicker-toggle>
            <ngx-material-timepicker #toggleIcon></ngx-material-timepicker>
        </div>

        <div class="toggle-disabled-example">
            <input [ngxTimepicker]="toggleTimepickerDisabled" [disableClick]="true" readonly>
            <ngx-material-timepicker-toggle [for]="toggleTimepickerDisabled" [disabled]="true"></ngx-material-timepicker-toggle>
            <ngx-material-timepicker #toggleTimepickerDisabled></ngx-material-timepicker>
        </div>
    `;

    editableDial = `
        <div class="editable-dial-example">
            <input placeholder="Editable dial" aria-label="Editable dial"
                [ngxTimepicker]="editableDial" readonly>
            <ngx-material-timepicker #editableDial [enableKeyboardInput]="true"></ngx-material-timepicker>
        </div>
    `;

    minutesGapCode = `
      <div class="minutes-gap-example">
        <input placeholder="Default gap"
            [ngxTimepicker]="defaultGap" readonly>
        <ngx-material-timepicker #defaultGap></ngx-material-timepicker>
      </div>

      <div class="minutes-gap-example">
        <input placeholder="Gap with 5"
            [ngxTimepicker]="with5Gap" readonly>
        <ngx-material-timepicker #with5Gap [minutesGap]="5"></ngx-material-timepicker>
      </div>
    `;

    filterCode = `
        <div class="filter-example">
            <input placeholder="Only even Hours"
                [ngxTimepicker]="onlyEvenHours" readonly>
            <ngx-material-timepicker #onlyEvenHours [filter]="filterEvenHours"></ngx-material-timepicker>
        </div>

        filterEvenHours: (
            time: DateTime,
            granularity?: 'hours' | 'minutes'
        ) => boolean = (time: DateTime, granularity?: 'hours' | 'minutes') => {
            if (granularity === 'minutes') {
                return true;
            }

            return !(time.hour % 2);
        }

        <div class="filter-example">
            <input placeholder="Only even hours between 4 AM and 4 PM"
                [ngxTimepicker]="filterWithMinMax" min="4:00 AM" max="4:00 PM" readonly>
            <ngx-material-timepicker #filterWithMinMax [filter]="filterEvenHours"></ngx-material-timepicker>
        </div>
    `;

    customSettings = `
        <div class="custom-buttons-example">
            <input placeholder="Custom buttons" aria-label="Custom buttons" [ngxTimepicker]="timepickerWithButtons" readonly>
            <ngx-material-timepicker #timepickerWithButtons [cancelBtnTmpl]="cancelBtn"
                                             [confirmBtnTmpl]="confirmBtn"></ngx-material-timepicker>

            <ng-template #cancelBtn>
                <button style="margin-right: 10px;">Cancel tmpl</button>
            </ng-template>
            <ng-template #confirmBtn>
                <button>Confirm tmpl</button>
            </ng-template>
         </div>

         <div class="custom-theme-example">
            <input placeholder="Custom theme" aria-label="Custom theme"
                [ngxTimepicker]="darkPicker" readonly>
            <ngx-material-timepicker #darkPicker [theme]="darkTheme"></ngx-material-timepicker>
         </div>

        //...
        darkTheme: NgxMaterialTimepickerTheme = {
            container: {
                bodyBackgroundColor: '#424242',
                buttonColor: '#fff'
            },
            dial: {
                dialBackgroundColor: '#555',
            },
            clockFace: {
                clockFaceBackgroundColor: '#555',
                clockHandColor: '#9fbd90',
                clockFaceTimeInactiveColor: '#fff'
            }
        };

        <div class="custom-hint-example">
            <input placeholder="Custom hint" aria-label="Custom hint"
                [ngxTimepicker]="customHint" readonly>
            <ngx-material-timepicker #customHint [enableKeyboardInput]="true"
                [editableHintTmpl]="dialHint"></ngx-material-timepicker>
            <ng-template #dialHint>
                <p>Custom hint</p>
            </ng-template>
        </div>
    `;

    darkTheme: NgxMaterialTimepickerTheme = {
        container: {
            bodyBackgroundColor: "#424242",
            buttonColor: "#fff"
        },
        dial: {
            dialBackgroundColor: "#555"
        },
        clockFace: {
            clockFaceBackgroundColor: "#555",
            clockHandColor: "#9fbd90",
            clockFaceTimeInactiveColor: "#fff"
        }
    };

    controlSimpleSettings = `
        <div class="ngx-timepicker-field-example">
            <ngx-timepicker-field [defaultTime]="'11:11 am'"></ngx-timepicker-field>
        </div>
        <div class="ngx-timepicker-field-example">
            <ngx-timepicker-field [format]="24" [defaultTime]="'23:11'"></ngx-timepicker-field>
        </div>
        <div class="ngx-timepicker-field-example">
            <ngx-timepicker-field [format]="24" [defaultTime]="'23:11'"></ngx-timepicker-field>
        </div>
        <div class="ngx-timepicker-field-example">
            <ngx-timepicker-field [disabled]="true"></ngx-timepicker-field>
        </div>
    `;

    toggleSettings = `
        <div class="ngx-timepicker-field-example">
            <ngx-timepicker-field [buttonAlign]="'left'"></ngx-timepicker-field>
        </div>
        <div class="ngx-timepicker-field-example">
            <ngx-timepicker-field [toggleIcon]="icon"></ngx-timepicker-field>
            <ng-template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,16H7.995 C7.445,16,7,15.555,7,15.005v-0.011C7,14.445,7.445,14,7.995,14H14V5.995C14,5.445,14.445,5,14.995,5h0.011 C15.555,5,16,5.445,16,5.995V16z"/>
                </svg>
            </ng-template>
        </div>
        <div class="ngx-timepicker-field-example">
            <ngx-timepicker-field [controlOnly]="true"></ngx-timepicker-field>
        </div>
    `;

    appendToInput = `
        <div class="ngx-timepicker-field-example">
            <input placeholder="Append to input" aria-label="Append to input"
                [ngxTimepicker]="appendedToInput" readonly>
            <ngx-material-timepicker #appendedToInput
                [appendToInput]="true"></ngx-material-timepicker>
        </div>
    `;

    filterEvenHours: (
        time: DateTime,
        granularity?: 'hours' | 'minutes'
    ) => boolean = (time: DateTime, granularity?: 'hours' | 'minutes') => {
        if (granularity === 'minutes') {
            return true;
        }

        return !(time.hour % 2);
    };
}
