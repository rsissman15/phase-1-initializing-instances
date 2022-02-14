// Write your code here
class Breakfast{
    constructor(food,drink){
        this.food=food
        this.drink=drink
    }
}

let newBreakfast=new Breakfast('cereal','orange juice');

class Lunch{
    constructor(salad,soup,drink){
        this.salad=salad
        this.soup=soup
        this.drink=drink;
    }
}

let newLunch= new Lunch('romaine','chicken noodle','water');


class Dinner{
    #dessert;
    constructor(salad,soup,entree,dessert){
        this.salad=salad
        this.soup=soup
        this.entree=entree
        this.#dessert=dessert
    }
}

let newDinner=new Dinner ('cobb','french onion','chicken','cake')