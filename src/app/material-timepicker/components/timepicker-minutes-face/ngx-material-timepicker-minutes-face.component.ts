import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from "@angular/core";
import { ClockFaceTime } from "../../models/clock-face-time.interface";
import { TimeUnit } from "../../models/time-unit.enum";
import { TimePeriod } from "../../models/time-period.enum";
import { DateTime } from "luxon";
import { disableMinutes, getMinutes } from "../../utils/timepicker-time.utils";

@Component({
    selector: "ngx-material-timepicker-minutes-face",
    templateUrl: "./ngx-material-timepicker-minutes-face.component.html"
})
export class NgxMaterialTimepickerMinutesFaceComponent implements OnChanges {
    minutesList: ClockFaceTime[] = [];
    timeUnit = TimeUnit;

    @Input() selectedMinute: ClockFaceTime;
    @Input() selectedHour: number;
    @Input() period: TimePeriod;
    @Input() minTime: DateTime;
    @Input() maxTime: DateTime;
    @Input() format: number;
    @Input() minutesGap: number;
    @Input() filter: (
        time: DateTime,
        granularity?: 'hours' | 'minutes'
    ) => boolean;

    @Output() minuteChange = new EventEmitter<ClockFaceTime>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes["period"] && changes["period"].currentValue) {
            const minutes = getMinutes(this.minutesGap);
            this.minutesList = disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period,
                filter: this.filter
            });
        }
    }
}
