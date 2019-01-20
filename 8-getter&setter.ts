
//Getters & Setters

class Plant{
    private _species:string;

    set species(value:string){
        if(value.length>3){
            this._species=value;
        }else{
            this._species="Default";
        }
    }

    get species(){
        return this._species;
    }
}

let plant = new Plant();
plant.species="AB";
console.log(plant.species);

//Static Properties & Methods 
class Helpers{
    static PI:number=3.14;
    static calcArea(diameter:number):number{
        return this.PI*diameter;
    }
}
console.log(2*Helpers.PI);
console.log(Helpers.calcArea);






