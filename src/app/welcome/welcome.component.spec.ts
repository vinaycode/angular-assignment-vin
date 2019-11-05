import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialModule } from "./../material.module";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { WelcomeComponent } from "./welcome.component";
import { ArticleService } from "../services/article.service";
import { UserService } from "../services/user.service";
import { ArticleMockService } from "../mock/article.mock.service";
import { UserMockService } from "../mock/user.mock.service";
import { Article } from "../models/Article";
import { Router } from "@angular/router";

//shallow testing
describe("WelcomeComponent ", () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [
        MaterialModule,
        RouterModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: UserService, useClass: UserMockService },
        { provide: ArticleService, useClass: ArticleMockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    console.log(component);
    fixture.detectChanges();
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });

  it("should have one user", () => {
    console.log("number of users "+component.user.length);
    expect(component.user.length).toEqual(1);
  });

  it("should have one article", () => {
    console.log("number of articles "+component.articles.length);
    expect(component.articles.length).toEqual(1);
  });

  it("should increment likes", () => {
    component.onLikeClick(component.articles[0]);
    component.onLikeClick(component.articles[0]);
    console.log(component.articles[0].likes);
    expect(component.articles[0].likes).toBe(35);
  });

  it("should increment dislikes", () => {
    component.onDisLikeClick(component.articles[0]);
    component.onDisLikeClick(component.articles[0]);
    component.onDisLikeClick(component.articles[0]);
    console.log(component.articles[0].dislikes);
    expect(component.articles[0].dislikes).toBe(9);
  });
});
