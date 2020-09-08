/*
 * HMPPS Offender Assessment API
 * OASys Data API.
 *
 * OpenAPI spec version: 2020-09-02
 * Contact: feedback@digital.justice.gov.uk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HmppsOffenderAssessmentApi);
  }
}(this, function(expect, HmppsOffenderAssessmentApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OvpDto', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.OvpDto();
      });

      it('should create an instance of OvpDto', function() {
        // TODO: update the code to test OvpDto
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.OvpDto);
      });

      it('should have the property ovp1Year (base name: "ovp1Year")', function() {
        // TODO: update the code to test the property ovp1Year
        expect(instance).to.have.property('ovp1Year');
        // expect(instance.ovp1Year).to.be(expectedValueLiteral);
      });

      it('should have the property ovp2Year (base name: "ovp2Year")', function() {
        // TODO: update the code to test the property ovp2Year
        expect(instance).to.have.property('ovp2Year');
        // expect(instance.ovp2Year).to.be(expectedValueLiteral);
      });

      it('should have the property ovpAgeWeightedScore (base name: "ovpAgeWeightedScore")', function() {
        // TODO: update the code to test the property ovpAgeWeightedScore
        expect(instance).to.have.property('ovpAgeWeightedScore');
        // expect(instance.ovpAgeWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ovpDynamicWeightedScore (base name: "ovpDynamicWeightedScore")', function() {
        // TODO: update the code to test the property ovpDynamicWeightedScore
        expect(instance).to.have.property('ovpDynamicWeightedScore');
        // expect(instance.ovpDynamicWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ovpNonViolentWeightedScore (base name: "ovpNonViolentWeightedScore")', function() {
        // TODO: update the code to test the property ovpNonViolentWeightedScore
        expect(instance).to.have.property('ovpNonViolentWeightedScore');
        // expect(instance.ovpNonViolentWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ovpPreviousWeightedScore (base name: "ovpPreviousWeightedScore")', function() {
        // TODO: update the code to test the property ovpPreviousWeightedScore
        expect(instance).to.have.property('ovpPreviousWeightedScore');
        // expect(instance.ovpPreviousWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ovpRisk (base name: "ovpRisk")', function() {
        // TODO: update the code to test the property ovpRisk
        expect(instance).to.have.property('ovpRisk');
        // expect(instance.ovpRisk).to.be(expectedValueLiteral);
      });

      it('should have the property ovpSexWeightedScore (base name: "ovpSexWeightedScore")', function() {
        // TODO: update the code to test the property ovpSexWeightedScore
        expect(instance).to.have.property('ovpSexWeightedScore');
        // expect(instance.ovpSexWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ovpStaticWeightedScore (base name: "ovpStaticWeightedScore")', function() {
        // TODO: update the code to test the property ovpStaticWeightedScore
        expect(instance).to.have.property('ovpStaticWeightedScore');
        // expect(instance.ovpStaticWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ovpTotalWeightedScore (base name: "ovpTotalWeightedScore")', function() {
        // TODO: update the code to test the property ovpTotalWeightedScore
        expect(instance).to.have.property('ovpTotalWeightedScore');
        // expect(instance.ovpTotalWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property ovpViolentWeightedScore (base name: "ovpViolentWeightedScore")', function() {
        // TODO: update the code to test the property ovpViolentWeightedScore
        expect(instance).to.have.property('ovpViolentWeightedScore');
        // expect(instance.ovpViolentWeightedScore).to.be(expectedValueLiteral);
      });

    });
  });

}));