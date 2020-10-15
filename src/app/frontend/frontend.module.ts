import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { BookingComponent } from "./booking/booking.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { DetailComponent } from "./detail/detail.component";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { FrontendLayoutComponent } from "./frontend-layout/frontend-layout.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ShowtimesComponent } from "./showtimes/showtimes.component";
import { NowShowingComponent } from "./now-showing/now-showing.component";
import { UpcomingComponent } from "./upcoming/upcoming.component";
import { MovieItemComponent } from "./movie-item/movie-item.component";
import { NewsComponent } from './news/news.component';
import { NewsCinemaComponent } from './news-cinema/news-cinema.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookingComponent,
    SigninComponent,
    SignupComponent,
    DetailComponent,
    HeaderComponent,
    SliderComponent,
    FrontendLayoutComponent,
    SearchBarComponent,
    ShowtimesComponent,
    NowShowingComponent,
    UpcomingComponent,
    MovieItemComponent,
    NewsComponent,
    NewsCinemaComponent,
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    BookingComponent,
    SigninComponent,
    SignupComponent,
    DetailComponent,
    FrontendLayoutComponent,
  ],
})
export class FrontendModule {}
