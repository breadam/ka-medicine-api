/**
 * Kolay Asistan Medicine API
 * Kolay Asistan medicine application api layer. Revision Date: 04.12.2022
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KolayAsistanMedicineApi);
  }
}(this, function(expect, KolayAsistanMedicineApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KolayAsistanMedicineApi.Medicine();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Medicine', function() {
    it('should create an instance of Medicine', function() {
      // uncomment below and update the code to test Medicine
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be.a(KolayAsistanMedicineApi.Medicine);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property barcode (base name: "barcode")', function() {
      // uncomment below and update the code to test the property barcode
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property ingredientName (base name: "ingredient_name")', function() {
      // uncomment below and update the code to test the property ingredientName
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property usePeriod (base name: "use_period")', function() {
      // uncomment below and update the code to test the property usePeriod
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property useWith (base name: "use_with")', function() {
      // uncomment below and update the code to test the property useWith
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property usePiece (base name: "use_piece")', function() {
      // uncomment below and update the code to test the property usePiece
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property dayPeriod (base name: "day_period")', function() {
      // uncomment below and update the code to test the property dayPeriod
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property intervalPeriod (base name: "interval_period")', function() {
      // uncomment below and update the code to test the property intervalPeriod
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "category_id")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property recipeType (base name: "recipe_type")', function() {
      // uncomment below and update the code to test the property recipeType
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property atcCode (base name: "atc_code")', function() {
      // uncomment below and update the code to test the property atcCode
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

    it('should have the property atcName (base name: "atc_name")', function() {
      // uncomment below and update the code to test the property atcName
      //var instance = new KolayAsistanMedicineApi.Medicine();
      //expect(instance).to.be();
    });

  });

}));
