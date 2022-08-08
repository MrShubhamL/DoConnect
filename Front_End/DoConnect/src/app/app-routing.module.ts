import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserDashboardComponent } from './USER/user-dashboard/user-dashboard.component';
import { UserGuard } from './services/user.guard';
import { HomeComponent } from './USER/home/home.component';
import { AnswerComponent } from './USER/answer/answer.component';
import { GivenAnswersComponent } from './USER/given-answers/given-answers.component';
import { AllAnswersComponent } from './USER/all-answers/all-answers.component';
import { AdminDashboardComponent } from './ADMIN/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { AdminHomeComponent } from './ADMIN/admin-home/admin-home.component';
import { UpdateAnswerComponent } from './USER/update-answer/update-answer.component';
import { AllQuestionsComponent } from './ADMIN/all-questions/all-questions.component';
import { UserAnswersComponent } from './ADMIN/user-answers/user-answers.component';
import { QuestionAnswersComponent } from './ADMIN/question-answers/question-answers.component';
import { NewAdminComponent } from './ADMIN/new-admin/new-admin.component';
import { SerachedQuestionComponent } from './USER/serached-question/serached-question.component';
import { PostComponent } from './USER/post/post.component';
import { AllPostComponent } from './USER/all-post/all-post.component';
import { AdminCreateVerifiactionComponent } from './ADMIN/admin-create-verifiaction/admin-create-verifiaction.component';
import { AdminBoardComponent } from './ADMIN/admin-board/admin-board.component';

const routes: Routes = [
  {
    path: "",
    component: SignInComponent
  },
  {
    path:"registration",
    component: SignUpComponent
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"answer/:id",
        component:AnswerComponent
      },
      {
        path:"given-answers/:id",
        component:GivenAnswersComponent
      },
      {
        path:"user-answers",
        component:AllAnswersComponent
      },
      {
        path:"update-answer/:queId/:ansId",
        component:UpdateAnswerComponent
      },
      {
        path:"searched-question/:id",
        component:SerachedQuestionComponent
      },
      {
        path:"user-post/:id",
        component:PostComponent
      },
      {
        path:"all-posts/:id",
        component:AllPostComponent
      }
    ]
  },
  {
    path:"admin-dashboard",
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"home",
        component:AdminHomeComponent
      },
      {
        path:"all-questions",
        component:AllQuestionsComponent
      },
      {
        path:"user-answers",
        component:UserAnswersComponent
      },
      {
        path:"question-answers/:id",
        component:QuestionAnswersComponent
      },
      {
        path:"create-admin",
        component:NewAdminComponent
      }
      
    ]
  },
  {
    path:"create-admin-verifiaction/7769038180/sendOTP", // You can change URL here......
    component:AdminCreateVerifiactionComponent
  },
  {
    path:"hisudf-adf-asdfsdf-asdfdsf-asdf-gg/5445-454-545-5-151-1-88/adm-in-bor-ad",
    component:AdminBoardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
