import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

//card modules
import {MatCardModule} from '@angular/material/card';

// Button Modules
import {MatButtonModule} from '@angular/material/button';

// From Modules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserDashboardComponent } from './USER/user-dashboard/user-dashboard.component';
import { HomeComponent } from './USER/home/home.component';
import { NavabrComponent } from './USER/navabr/navabr.component';
import { SidebarComponent } from './USER/sidebar/sidebar.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { AnswerComponent } from './USER/answer/answer.component';
import { GivenAnswersComponent } from './USER/given-answers/given-answers.component';

import {MatListModule} from '@angular/material/list';
import { AllAnswersComponent } from './USER/all-answers/all-answers.component';
import { AdminDashboardComponent } from './ADMIN/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './ADMIN/admin-home/admin-home.component';
import { UpdateAnswerComponent } from './USER/update-answer/update-answer.component';
import { AdminNavbarComponent } from './ADMIN/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './ADMIN/admin-sidebar/admin-sidebar.component';
import { AllQuestionsComponent } from './ADMIN/all-questions/all-questions.component';
import { UserAnswersComponent } from './ADMIN/user-answers/user-answers.component';
import { QuestionAnswersComponent } from './ADMIN/question-answers/question-answers.component';
import { NewAdminComponent } from './ADMIN/new-admin/new-admin.component';
import { SerachedQuestionComponent } from './USER/serached-question/serached-question.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { PostComponent } from './USER/post/post.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AllPostComponent } from './USER/all-post/all-post.component';
import { AdminCreateVerifiactionComponent } from './ADMIN/admin-create-verifiaction/admin-create-verifiaction.component';
import { AdminBoardComponent } from './ADMIN/admin-board/admin-board.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    UserDashboardComponent,
    HomeComponent,
    NavabrComponent,
    SidebarComponent,
    AnswerComponent,
    GivenAnswersComponent,
    AllAnswersComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    UpdateAnswerComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AllQuestionsComponent,
    UserAnswersComponent,
    QuestionAnswersComponent,
    NewAdminComponent,
    SerachedQuestionComponent,
    PostComponent,
    AllPostComponent,
    AdminCreateVerifiactionComponent,
    AdminBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
