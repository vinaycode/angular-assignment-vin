import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CommentDialogComponent} from './comment-dialog/comment-dialog.component';
import {ArticleDetailComponent} from './articleDetails/artdetails.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRouters} from './app.routes';
import {DataService} from './data/data.service';
import {ArticleService} from './services/article.service';
import {CommentService} from './services/comment.service';
import {AuthService} from './auth.service';
import {PostDialogComponent} from './post-dialog/post-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    ArticleDetailComponent,
    CommentDialogComponent,
    NotFoundComponent,
    PostDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule,HttpModule
  ],
  providers: [DataService, AuthService, ArticleService,CommentService],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent,CommentDialogComponent
  ]
})
export class AppModule {}
