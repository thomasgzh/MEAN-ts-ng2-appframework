import {bootstrap} from 'angular2/platform/browser';
import {EditorController} from './editor';
import {TodoAppComponent} from './todo';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_BINDINGS} from 'angular2/http';

bootstrap(TodoAppComponent, [HTTP_BINDINGS]);
