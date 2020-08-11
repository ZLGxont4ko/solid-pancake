import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableModule} from '../../shared/data-table/data-table.module';
import {RouterModule} from '@angular/router';
import {TextEditorModule} from '../../text-editor/text-editor.module';
import {CUSTOM_PAGE_CONFIG_TOKEN, CustomPageManagerConfig} from './custom-page-config';
import {SlugControlModule} from '../../shared/form-controls/slug-control/slug-control.module';
import {TranslationsModule} from '../../core/translations/translations.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormatPipesModule} from '../../core/ui/format-pipes/format-pipes.module';
import {LoadingIndicatorModule} from '../../core/ui/loading-indicator/loading-indicator.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        DataTableModule,
        TextEditorModule,
        SlugControlModule,
        TranslationsModule,
        FormatPipesModule,
        LoadingIndicatorModule,

        // material
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
    ]
})
export class CustomPagesManagerModule {
    static forRoot(config: CustomPageManagerConfig): ModuleWithProviders<CustomPagesManagerModule> {
        return {
            ngModule: CustomPagesManagerModule,
            providers: [
                {
                    provide: CUSTOM_PAGE_CONFIG_TOKEN,
                    useValue: config,
                    multi: true,
                }
            ]
        };
    }
}
