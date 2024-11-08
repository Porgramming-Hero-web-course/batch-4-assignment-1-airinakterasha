{

    class Car {
        make: string;
        model: string;
        year: number;
    
        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
    
        getCarAge(currentYear: number): number {
            return currentYear - this.year; 
        }
    }
    
    const car = new Car("Honda", "Civic", 2018);
    const currentYear = 2024; 
    console.log(car.getCarAge(currentYear)); 

}