class Animal {
    constructor(name, isMammal){

    }
}



class Frog extends Animal{
    constructor(name, isMammal){
        super(name, isMammal)
    }
    jump() {
        console.log('hop hop');
    }
}

class Ape extends Animal {
    constructor(name, isMammal){
        super(name, isMammal)
    }
    yell() {
        console.log('Auooo');
    }
}

let manggil = new Frog //('paijo', false)
let panggil = new Ape //('kamu', true)
console.log(manggil.jump());
console.log(panggil.yell());