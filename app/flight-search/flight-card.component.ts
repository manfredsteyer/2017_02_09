import { Flight } from '../entities/flight';

class FlightCardController {
    item: Flight;
    selectedItem: Flight;
    selectedItemChange: Function;

    select() {
        this.selectedItem = this.item;
        this.selectedItemChange({ $event: this.item });
    }
}

export let FlightCardComponent: angular.IComponentOptions = {
    controller: FlightCardController,
    template: require('./flight-card.component.html'),
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    }
}