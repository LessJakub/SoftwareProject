import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RestaurantTileComponent } from './components/utilities/restaurant-tile/restaurant-tile.component';
import { DishTileComponent } from './components/utilities/dish-tile/dish-tile.component';
import { DishOverlayComponent } from './components/overlays/dish-overlay/dish-overlay.component';
import { GradeTileComponent } from './components/utilities/grade-tile/grade-tile.component';
import { ReviewPostComponent } from './components/posts/review-post/review-post.component';
import { TabSwitcherComponent } from './components/utilities/tab-switcher/tab-switcher.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { DebugUploadPageComponent } from './components/debug-upload-page/debug-upload-page.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@NgModule({
  declarations: [
    ErrorPageComponent,
    DishTileComponent,
    RestaurantTileComponent,
    DishOverlayComponent,
    GradeTileComponent,
    ReviewPostComponent,
    TabSwitcherComponent,
    FaqPageComponent,
    DebugUploadPageComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
  ],
  exports: [
    RestaurantTileComponent,
    DishTileComponent,
    GradeTileComponent,
    ReviewPostComponent,
    TabSwitcherComponent,
    DebugUploadPageComponent,
    FooterComponent,
    LandingPageComponent,
  ]
})
export class SharedModule { }
