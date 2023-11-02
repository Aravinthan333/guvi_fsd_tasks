class TravelPrice {
  constructor(distance, pricePerKm) {
    (this.distance = distance), (this.pricePerKm = pricePerKm);
  }

  travelFare() {
    return `Fare for ${this.distance}km is ${this.distance * this.pricePerKm}`;
  }
}
const travel = new TravelPrice(10.5, 6);
console.log(travel.travelFare());
