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
    describe('RefSectionDto', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.RefSectionDto();
      });

      it('should create an instance of RefSectionDto', function() {
        // TODO: update the code to test RefSectionDto
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.RefSectionDto);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property refCrimNeedScoreThreshold (base name: "refCrimNeedScoreThreshold")', function() {
        // TODO: update the code to test the property refCrimNeedScoreThreshold
        expect(instance).to.have.property('refCrimNeedScoreThreshold');
        // expect(instance.refCrimNeedScoreThreshold).to.be(expectedValueLiteral);
      });

      it('should have the property refQuestions (base name: "refQuestions")', function() {
        // TODO: update the code to test the property refQuestions
        expect(instance).to.have.property('refQuestions');
        // expect(instance.refQuestions).to.be(expectedValueLiteral);
      });

      it('should have the property refScoredForOgp (base name: "refScoredForOgp")', function() {
        // TODO: update the code to test the property refScoredForOgp
        expect(instance).to.have.property('refScoredForOgp');
        // expect(instance.refScoredForOgp).to.be(expectedValueLiteral);
      });

      it('should have the property refScoredForOvp (base name: "refScoredForOvp")', function() {
        // TODO: update the code to test the property refScoredForOvp
        expect(instance).to.have.property('refScoredForOvp');
        // expect(instance.refScoredForOvp).to.be(expectedValueLiteral);
      });

      it('should have the property refSectionCode (base name: "refSectionCode")', function() {
        // TODO: update the code to test the property refSectionCode
        expect(instance).to.have.property('refSectionCode');
        // expect(instance.refSectionCode).to.be(expectedValueLiteral);
      });

      it('should have the property refSectionId (base name: "refSectionId")', function() {
        // TODO: update the code to test the property refSectionId
        expect(instance).to.have.property('refSectionId');
        // expect(instance.refSectionId).to.be(expectedValueLiteral);
      });

      it('should have the property shortDescription (base name: "shortDescription")', function() {
        // TODO: update the code to test the property shortDescription
        expect(instance).to.have.property('shortDescription');
        // expect(instance.shortDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));