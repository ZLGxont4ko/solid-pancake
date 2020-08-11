import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitlePageContainerComponent} from './titles/title-page-container/title-page-container.component';
import {TitleSecondaryDetailsPanelComponent} from './titles/title-page-container/title-secondary-details-panel/title-secondary-details-panel.component';
import {TitleCastPanelComponent} from './titles/title-page-container/title-cast-panel/title-cast-panel.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {SiteRoutingModule} from './site-routing.module';
import {NgxsModule} from '@ngxs/store';
import {TitlePrimaryDetailsPanelComponent} from './titles/title-page-container/title-primary-details-panel/title-primary-details-panel.component';
import {CrupdateListComponent} from './lists/crupdate-list/crupdate-list.component';
import {ListState} from './lists/state/list-state';
import {SliderComponent} from './homepage/slider/slider.component';
import {MediaGridComponent} from './shared/media-grid/media-grid.component';
import {GenreWidgetComponent} from './titles/components/genre-widget/genre-widget.component';
import {RatingWidgetComponent} from './titles/components/rating-widget/rating-widget.component';
import {SeasonPageComponent} from './titles/components/season-page/season-page.component';
import {PeopleListWidgetComponent} from './titles/components/people-list-widget/people-list-widget.component';
import {RelatedTitlesPanelComponent} from './titles/components/related-titles-panel/related-titles-panel.component';
import {FooterComponent} from './shared/footer/footer.component';
import {TitleActionButtonsComponent} from './titles/components/title-action-buttons/title-action-buttons.component';
import {MediaItemHeaderComponent} from './titles/components/media-item-header/media-item-header.component';
import {CurrentNextEpisodePanelComponent} from './titles/components/current-next-episode-panel/current-next-episode-panel.component';
import {PersonPageComponent} from './people/person-page/person-page.component';
import {PersonState} from './people/state/person-state';
import {CrupdateTitleState} from './titles/crupdate-title/crupdate-title/state/crupdate-title-state';
import {SearchPageComponent} from './search/search-page/search-page.component';
import {ListPageComponent} from './lists/list-page/list-page.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UserListsComponent} from './lists/user-lists/user-lists.component';
import {MoreLessTextDirective} from './shared/more-less-text.directive';
import {BrowseTitlesComponent} from './titles/components/browse-titles/browse-titles.component';
import {SeasonEpisodeNumberComponent} from './titles/components/season-episode-number/season-episode-number.component';
import {FullCreditsPageComponent} from './titles/components/full-credits-page/full-credits-page.component';
import {StarRatingOverlayComponent} from './titles/components/rating-widget/star-rating-overlay/star-rating-overlay.component';
import {CrupdateReviewModalComponent} from './reviews/crupdate-review-modal/crupdate-review-modal.component';
import {ReviewTabComponent} from './reviews/review-tab/review-tab.component';
import {StarRatingWidgetComponent} from './reviews/star-rating-widget/star-rating-widget.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {NewsArticleComponent} from './news/news-article/news-article.component';
import {NewsIndexComponent} from './news/news-index/news-index.component';
import {RangeSliderComponent} from './shared/range-slider/range-slider.component';
import {CrupdateVideoModalComponent} from './videos/crupdate-video-modal/crupdate-video-modal.component';
import {PeopleIndexComponent} from './people/people-index/people-index.component';
import {ImageGalleryOverlayComponent} from './shared/image-gallery-overlay/image-gallery-overlay.component';
import {ImportMediaModalComponent} from './shared/import-media-modal/import-media-modal.component';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {AppHammerGestureConfig} from './app-hammer-gesture-config';
import {ChipInputModule} from '@common/core/ui/chip-input/chip-input.module';
import {SortDropdownComponent} from './titles/components/browse-titles/sort-dropdown/sort-dropdown.component';
import {StreamableLabelComponent} from './titles/components/streamable-label/streamable-label.component';
import {TitleVideosComponent} from './videos/title-videos/title-videos.component';
import {TitleVideoTableComponent} from './videos/title-videos/title-video-table/title-video-table.component';
import {TitleVideoCarouselComponent} from './videos/title-videos/title-video-carousel/title-video-carousel.component';
import {VideoRatingWidgetComponent} from './videos/title-videos/video-rating-widget/video-rating-widget.component';
import {EditTitleVideoWidgetComponent} from './videos/title-videos/edit-title-video-widget/edit-title-video-widget.component';
import {DataTableInputsModule} from '../admin/data-table-inputs/data-table-inputs.module';
import {UploadsModule} from '@common/uploads/uploads.module';
import {BackToTopButtonComponent} from './shared/back-to-top-button/back-to-top-button.component';
import {CrupdateCaptionModalComponent} from './captions/crupdate-caption-modal/crupdate-caption-modal.component';
import {CaptionsPanelComponent} from './videos/crupdate-video-modal/captions-panel/captions-panel.component';
import {PlayerModule} from './player/player.module';
import {LandingComponent} from './landing/landing.component';
import {HomepageHostComponent} from './homepage/homepage-host/homepage-host.component';
import {MediaImageModule} from './shared/media-image/media-image.module';
import {MaterialNavbarModule} from '@common/core/ui/material-navbar/material-navbar.module';
import {MatButtonModule} from '@angular/material/button';
import {AdHostModule} from '@common/core/ui/ad-host/ad-host.module';
import {MatIconModule} from '@angular/material/icon';
import {ImageOrIconModule} from '@common/core/ui/image-or-icon/image-or-icon.module';
import {MatMenuModule} from '@angular/material/menu';
import {TranslationsModule} from '@common/core/translations/translations.module';
import {FormatPipesModule} from '@common/core/ui/format-pipes/format-pipes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LoadingIndicatorModule} from '@common/core/ui/loading-indicator/loading-indicator.module';
import {NoResultsMessageModule} from '@common/core/ui/no-results-message/no-results-message.module';
import {AuthClickDirective} from '@common/core/ui/auth-click.directive';
import {ShareButtonsComponent} from './titles/title-page-container/share-buttons/share-buttons.component';
import {DefaultPageWrapperComponent} from './shared/default-page-wrapper/default-page-wrapper.component';
import {SearchInputModule} from './search/seach-input/search-input.module';
import {KnowForWidgetModule} from './people/known-for-widget/know-for-widget.module';

@NgModule({
    imports: [
        CommonModule,
        SiteRoutingModule,
        ChipInputModule,
        DataTableInputsModule,
        UploadsModule,
        MediaImageModule,
        PlayerModule,
        MaterialNavbarModule,
        AdHostModule,
        ImageOrIconModule,
        TranslationsModule,
        FormatPipesModule,
        FormsModule,
        ReactiveFormsModule,
        LoadingIndicatorModule,
        NoResultsMessageModule,
        SearchInputModule,
        KnowForWidgetModule,

        // material
        MatAutocompleteModule,
        MatSidenavModule,
        MatExpansionModule,
        DragDropModule,
        MatTableModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        TextFieldModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        // state
        NgxsModule.forFeature([
            PersonState,
            ListState,

            // TODO: move into admin later
            CrupdateTitleState,
        ]),
    ],
    declarations: [
        TitlePageContainerComponent,
        TitleSecondaryDetailsPanelComponent,
        TitleCastPanelComponent,
        HomepageComponent,
        TitlePrimaryDetailsPanelComponent,
        CrupdateListComponent,
        SliderComponent,
        MediaGridComponent,
        GenreWidgetComponent,
        RatingWidgetComponent,
        SeasonPageComponent,
        PeopleListWidgetComponent,
        RelatedTitlesPanelComponent,
        FooterComponent,
        TitleActionButtonsComponent,
        MediaItemHeaderComponent,
        CurrentNextEpisodePanelComponent,
        PersonPageComponent,
        SearchPageComponent,
        ListPageComponent,
        UserListsComponent,
        MoreLessTextDirective,
        BrowseTitlesComponent,
        SeasonEpisodeNumberComponent,
        FullCreditsPageComponent,
        StarRatingOverlayComponent,
        CrupdateReviewModalComponent,
        ReviewTabComponent,
        StarRatingWidgetComponent,
        NewsArticleComponent,
        NewsIndexComponent,
        RangeSliderComponent,
        TitleVideosComponent,
        CrupdateVideoModalComponent,
        PeopleIndexComponent,
        ImageGalleryOverlayComponent,
        ImportMediaModalComponent,
        SortDropdownComponent,
        StreamableLabelComponent,
        TitleVideoTableComponent,
        TitleVideoCarouselComponent,
        VideoRatingWidgetComponent,
        EditTitleVideoWidgetComponent,
        BackToTopButtonComponent,
        CrupdateCaptionModalComponent,
        CaptionsPanelComponent,
        LandingComponent,
        HomepageHostComponent,
        AuthClickDirective,
        ShareButtonsComponent,
        DefaultPageWrapperComponent,
    ],
    exports: [
        MediaImageModule,
    ],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: AppHammerGestureConfig,
        }
    ]
})
export class SiteModule {
}
