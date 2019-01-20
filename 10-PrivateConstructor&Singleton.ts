
//private constructor&singleton

class OnlyOne{

    private static instance:OnlyOne;

    private constructor(public name:string){}

        static getInstance(){
            if(!OnlyOne.instance){
                OnlyOne.instance=new OnlyOne("The Only One");
            }
            return OnlyOne.instance;
        }
 }

//let wrong=new OnlyOne("The Only One");

let right = OnlyOne.getInstance();


////Example

class Singleton {
    private static instance: Singleton;
    private _temperature: number;
    private constructor() { }
    static getInstance() {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
        Singleton.instance._temperature = 0;
      }
      return Singleton.instance;
    }
    get temperature(): number {
      return this._temperature;
    }
    set temperature(score) {
      this._temperature = score;
    }
    increaseTemperature(): number {
      return this._temperature += 1;
    }
    decreaseTemperature(): number {
      return this._temperature -= 1;
    }
  }

  const myInstance = Singleton.getInstance();
  console.log(myInstance.temperature); // 0

console.log(myInstance.temperature = 25); // 25
console.log(myInstance.increaseTemperature()); // 26
console.log(myInstance.increaseTemperature()); // 27
console.log(myInstance.decreaseTemperature()); // 26

/*
Think about this for a moment. If at this point we'd be able to create a new instance of our class,
we would be able to overwrite the temperature readings.
*/

const myInstance2 = Singleton.getInstance();
console.log(myInstance2.temperature); // 26