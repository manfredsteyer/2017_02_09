import * as angular from 'angular';

class HomeController {
    info = "Willkommen!!";
}

export let HomeComponent: angular.IComponentOptions = {
    controller: HomeController,
    template: '<h1>{{$ctrl.info}}</h1>'
}