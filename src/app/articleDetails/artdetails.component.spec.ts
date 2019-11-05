import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialModule } from "./../material.module";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { ArticleDetailComponent } from "./artdetails.component";
import { ArticleService } from "../services/article.service";
import { UserService } from "../services/user.service";
import { ArticleMockService } from "../mock/article.mock.service";
import { UserMockService } from "../mock/user.mock.service";
import { Article } from "../models/Article";
import { Router } from "@angular/router";
import { CommentService } from "../services/comment.service";
import { CommentMockService } from "../mock/comment.mock.service";
import { CommentDialogComponent } from "../comment-dialog/comment-dialog.component";
import { MatDialogModule, MatDialog } from "@angular/material";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { Component, NgModule } from "@angular/core";
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import {DeprecatedFormsModule} from '@angular/common';


//shallow testing
describe("ArticleDetailsComponent ", () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;
  let dialog: MatDialog;
  /*let overlayContainerElement: HTMLElement;
  let noop: ComponentFixture<NoopComponent>;*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleDetailComponent],
      imports: [
        MaterialModule,
        RouterModule,
        BrowserAnimationsModule,
        //DialogTestModule,DeprecatedFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: CommentService, useClass: CommentMockService },
        { provide: ArticleService, useClass: ArticleMockService },
        /* {
          provide: OverlayContainer,
          useFactory: () => {
            overlayContainerElement = document.createElement("div");
            return { getContainerElement: () => overlayContainerElement };
          }
        }*/
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    console.log(component);
    fixture.detectChanges();
        dialog = TestBed.get(MatDialog);

    //noop = TestBed.createComponent(NoopComponent);
  });


  it("should create component", () => {
    expect(component).toBeTruthy();
  });

  it("should delete existing comment", () => {
    // console.log("number of comments before deleting"+component.comments.length);
    console.log("yeah the count " + component.comments.length);

    component.deleteComment(1);
    // console.log("number of comments after deleting"+component.comments.length);
    expect(component.comments.length).toEqual(1);
  });
});

/*// Noop component is only a workaround to trigger change detection
@Component({
  template: ""
})
class NoopComponent {}

const TEST_DIRECTIVES = [CommentDialogComponent, NoopComponent];

@NgModule({
  imports: [MatDialogModule, NoopAnimationsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [CommentDialogComponent]
})
class DialogTestModule {}*/
