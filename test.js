var assert = require('assert');
const isKnownMersenne = require('./index').isKnownMersenne;



describe('known mersenne test', function () {
    it('should return true if number is known mersenne prime', function () {
          const result =  isKnownMersenne(2n**82589933n-1n);
           assert.strictEqual(result, true);
       });
       it('should return true if number is known mersenne prime', function () {
        const result =  isKnownMersenne(2n**20996011n-1n);
         assert.strictEqual(result, true);
     });

       it('should return false if number is not known mersenne prime', function () {
        const result =  isKnownMersenne(2n**8289932n-1n);
         assert.strictEqual(result, false);
     });

     it('should return false if number is not known mersenne prime', function () {
        const result =  isKnownMersenne(2n**828669932n-1n);
         assert.strictEqual(result, false);
     });
   });