import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SearchResponse} from '../search.service';
import {SearchResult} from '../search-result';
import {MEDIA_TYPE} from '../../media-type';

@Component({
    selector: 'search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {
    public query$ = new BehaviorSubject<string>('');
    public movies$ = new BehaviorSubject<SearchResult[]>([]);
    public series$ = new BehaviorSubject<SearchResult[]>([]);
    public people$ = new BehaviorSubject<SearchResult[]>([]);

    constructor(
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.data.subscribe((data: {api: SearchResponse}) => {
            this.query$.next(data.api.query);
            this.movies$.next(data.api.results.filter(r => r.type === MEDIA_TYPE.TITLE && !r.is_series));
            this.series$.next(data.api.results.filter(r => r.type === MEDIA_TYPE.TITLE && r.is_series));
            this.people$.next(data.api.results.filter(r => r.type === MEDIA_TYPE.PERSON));
        });
    }
}
