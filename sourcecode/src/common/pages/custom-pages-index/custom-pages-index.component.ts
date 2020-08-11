import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {PaginatedDataTableSource} from '../../shared/data-table/data/paginated-data-table-source';
import {Paginator} from '../../shared/paginator.service';
import {CustomPage} from '../../core/types/models/CustomPage';
import {CUSTOM_PAGE_URI, Pages} from '../shared/pages.service';
import {Modal} from '../../core/ui/dialogs/modal.service';
import {CurrentUser} from '../../auth/current-user';
import {Settings} from '../../core/config/settings.service';
import {ConfirmModalComponent} from '../../core/ui/confirm-modal/confirm-modal.component';
import {Router} from '@angular/router';

@Component({
    selector: 'custom-pages-index',
    templateUrl: './custom-pages-index.component.html',
    styleUrls: ['./custom-pages-index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [Paginator],
})
export class CustomPagesIndexComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) matSort: MatSort;
    public dataSource: PaginatedDataTableSource<CustomPage>;

    constructor(
        public paginator: Paginator<CustomPage>,
        private pages: Pages,
        private modal: Modal,
        public currentUser: CurrentUser,
        private settings: Settings,
        private router: Router,
    ) {}

    ngOnInit() {
        this.dataSource = new PaginatedDataTableSource<CustomPage>({
            uri: CUSTOM_PAGE_URI,
            dataPaginator: this.paginator,
            matSort: this.matSort,
            staticParams: {
                userId: this.filterByUser() ? this.currentUser.get('id') : null,
            }
        });
    }

    public maybeDeleteSelectedResources() {
        this.modal.show(ConfirmModalComponent, {
            title: 'Delete Pages',
            body:  'Are you sure you want to delete selected pages?',
            ok:    'Delete'
        }).afterClosed().subscribe(confirmed => {
            if ( ! confirmed) return;
            this.deleteSelectedPages();
        });
    }

    public deleteSelectedPages() {
        const ids = this.dataSource.getSelectedItems();
        this.pages.delete(ids).subscribe(() => {
            this.dataSource.reset();
        });
    }

    public getPageUrl(page: CustomPage): string {
        return this.settings.getBaseUrl() + 'pages/' + page.id + '/' + page.slug;
    }

    public viewName(name: string) {
        return name.replace(/_/g, ' ');
    }

    public filterByUser(): boolean {
        return this.router.url.indexOf('admin') === -1;
    }
}
