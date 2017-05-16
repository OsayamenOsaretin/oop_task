'use strict';


	function Meal(name, ingredients, taste) {

		this.name = name;
		this.ingredients = [...ingredients];
		this.taste = taste;
	};

	Meal.prototype.prepareMeal = function(){
		// to create a meal you have to implement this function in some sort of way
	};

	
	// getter and setter methods encaspulate the data by creating specific interfaces for reaching them.

	Meal.prototype.getIngredients = function(){
		return this.ingredients;
	};

	Meal.prototype.getName = function(){
		return this.name;
	}

	Meal.prototype.getTaste = function(){
		return this.taste;
	};

	Meal.prototype.setTaste = function(taste){
		this.taste = taste;
	}

	Meal.prototype.setIngredients = function(ingredients){
		this.ingredients = [...ingredients];
	};

	Meal.prototype.setName = function(name){
		this.name = name;
	};



	module.exports = Meal;

	
	/* class NigerianMeal demostrates inheritance by 
	inheriting some of the functions from the superclass Meal  */
	
	function NigerianMeal(name,ingredients,taste){
		Meal.call(this, name, ingredients, taste);
	
		this.origin = "Nigeria";
	
	};

	NigerianMeal.prototype = Object.create(Meal.prototype);
	NigerianMeal.prototype.constructor = NigerianMeal;

	NigerianMeal.prototype.prepareMeal = function(){
		return "If this is Jollof, you shouldn't compare it to Ghanian Jollof, Fr Fr!";
	};

	NigerianMeal.prototype.getOrigin = function(){
		return this.origin;
	};

	NigerianMeal.prototype.setOrigin = function(origin){
		this.origin = origin;
	};

	module.exports = NigerianMeal;

	

