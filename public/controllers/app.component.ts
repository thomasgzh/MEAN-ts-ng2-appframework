import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {EditorController} from './editor';
import {TodoAppComponent} from './todo';


@Component({
  selector: 'boot_app',
  template: `
    <h1>{{title}}</h1>
    <!--<a [routerLink]="['Todos']">Todos</a>-->
    <!--<a [routerLink]="['Document']">Document</a>-->
     <!--routerLink无法正确生成html， 直接写地址-->
     <a href="/todoapp">TODOs</a>
     <a href="/documentapp">DOCUMENT</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['stylesheets/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [EditorController,TodoAppComponent]
})

@RouteConfig([
  //{path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/todoapp', name: 'Todos', component: TodoAppComponent, useAsDefault: true},
  {path: '/documentapp', name: 'Document', component: EditorController}
])


export class AppComponent {
  public title = 'Angular 2 Demo Applications';
}
