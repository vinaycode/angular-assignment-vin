import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {WelcomeComponent} from './welcome/welcome.component';
import {MyactivityComponent} from './myactivity/myactivity.component';
import {CommentDialogComponent} from './comment-dialog/comment-dialog.component';
import {ArticleDetailComponent} from './articleDetails/artdetails.component';
import {ChildComponent} from './welcome/child-component/child-comment.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRouters} from './app.routes';
import {ArticleService} from './services/article.service';
import {CommentService} from './services/comment.service';
import {UserService} from './services/user.service';
import {FormsModule} from '@angular/forms';

import { ArticleMockService } from "./mock/article.mock.service";
import { UserMockService } from "./mock/user.mock.service";
import { CommentMockService } from "./mock/comment.mock.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MyactivityComponent,
    ArticleDetailComponent,
    CommentDialogComponent,
    ChildComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule,HttpModule
  ],
  providers: [ArticleService,CommentService,UserService, ArticleMockService, UserMockService, CommentMockService],
  bootstrap: [AppComponent],
  entryComponents: [
    CommentDialogComponent
  ]
})
export class AppModule {}
