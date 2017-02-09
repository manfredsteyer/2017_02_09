import * as angular from 'angular';

class FlightEditController {
    info = "Willkommen!";
    id: string;

    constructor($stateParams: any) {
        this.id = $stateParams.id;
    }
}

export let FlightEditComponent: angular.IComponentOptions = {
    controller: FlightEditController,
    template: `
        <h1>{{$ctrl.info}}</h1>

        <div>Hier könnte auch Ihr Datensatz stehen. ID: {{$ctrl.id}}</div>
    `
}