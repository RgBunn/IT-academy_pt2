class Vehicle{
    constructor(make,model,year,mileage){
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    drive(distance){
        return this.mileage += distance;
    }
    info(){
        return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles`;
    }
    service(){
        this.mileage=0;
        return `The vehicle ${this.make} ${this.model} has undergone maintenance.`
    }
}

class Car extends Vehicle{
    constructor(make,model,year,mileage,numDoors) {
        super(make,model,year,mileage);
        this.numDoors=numDoors;
    }
    info(){
        return `${super.info()} and ${this.numDoors}  doors.`;
    }
    openTrunk(){
        return `The trunk of your car is open!`
    }
}

const myCar = new Car('Toyota', 'Corolla', 2015, 50000, 4);
console.log(myCar.info());

myCar.drive(150);
console.log(myCar.info());

console.log(myCar.service());
console.log(myCar.info());

console.log(myCar.openTrunk());

class Truck extends Vehicle{
    constructor(make,model,year,mileage,cargoCapacity) {
        super(make,model,year,mileage);
        this.cargoCapacity = cargoCapacity;
    }
    info(){
        return `${super.info()} and ${this.cargoCapacity} kg cargo capacity`
    }
    loadCargo(weight){
        if(weight > this.cargoCapacity){
            return `The weight of your cargo exceeds the capacity of your car. The weight should be below ${this.cargoCapacity}kg!`
        }else{
            return `Cargo loaded successfully!`
        }
    }
}
const myTruck = new Truck('Ford', 'F-150', 2018, 30000, 1000);
console.log(myTruck.info());

myTruck.drive(200);
console.log(myTruck.info());

console.log(myTruck.loadCargo(10009));