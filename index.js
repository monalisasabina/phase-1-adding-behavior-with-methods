// Your code here

class Cat{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }

  // For an instance of Cat, speak returns "name says meow!",
  speak(){
    return `${this.name} says meow!`
  }
  
}
let littleKitty= new Cat('meowmeow')
   console.log(littleKitty.speak())
// .....................................................................................................
   

class Dog{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }

    speak(){
        return `${this.name} says woof!`
      }
}
let myDog= new Cat('Bosco')
   console.log(myDog.speak())

// ......................................................................................................


class Bird{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    
  speak(){

    if(this.sex === 'male'){
        return `It's me! ${this.name}, the parrot!`
    } else {
        return `${this.name} says squawk!`
    }
  }
}

let birdGender= new Bird('Tweety','female')
 console.log(birdGender.speak())



