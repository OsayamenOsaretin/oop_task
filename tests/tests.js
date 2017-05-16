'use strict';

const Meal = require('../app/meal.js');
const NigerianMeal = require('../app/meal.js');

const amala = new Meal("amala", ["flour", "water", "kindness"], "extraNice");
const jollof = new Meal("jollof", ["rice", "tomatoes", "swag"], "it's not Nigerian, can't say");
const nigerianJollof = new NigerianMeal("jollof", ["rice", "tomatoes", "jazz"], "Don't even play with this awesomeness");


	describe('Show encapsulation by using getter and setter methods', function(){
		it('should return amala has the name of the meal using the getter method', function(){
			expect(amala.getName()).toEqual("amala");
		});

		it('should retun return list of changed ingredients after changing using setter methods', function(){
			expect(jollof.getIngredients()).toEqual(["rice", "tomatoes", "swag"]);
		});
	});


	describe('Show inheritance by calling method from super class Meal not in subclass Nigerian Meal', function(){
		it('should get taste using get taste method, even though not in NigerianMeal class', function(){
			expect(nigerianJollof.getTaste()).toEqual("Don't even play with this awesomeness");
		});
		
	});

	describe('Show polymorphism by using functionality useable in subclass in instance of superclass', function(){
		it('should get origin of Nigerian meal from a generic meal declaration', function(){
			expect(jollof.getOrigin()).toEqual("Nigeria");
		});
	});