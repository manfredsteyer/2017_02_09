import * as angular from 'angular';
import {Flight} from "../entities/flight";
import { FlightService } from './flight.service';

class FlightSearchController {

    from: string = 'Hamburg';
    to: string = 'Graz';
    selectedFlight: Flight;
    flights: Array<Flight> = [];

    constructor(private flightService: FlightService) {
        console.debug('ctor');
    }

    search() {

            this
                .flightService
                .find(this.from, this.to)
                .then(resp => {
                    this.flights = resp.data;
                })
                .catch(resp => {
                    console.error(resp);
                });
    }

    select(f: Flight) {
        this.selectedFlight = f;
    }

}

export var FlightSearchComponent: angular.IComponentOptions = {
    controller: FlightSearchController,
    template: require('./flight-search.component.html')
}