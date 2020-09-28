# Is Known Mersenne

Quickly determines if a number is a known mersenne prime. Returns boolean value

![openbits logo](https://lh3.googleusercontent.com/z3ETaQ_Xc_uFNIzCCabpoYbl67eUXUSIUWIA1w4dl-RwYz3ZzFGyzBYdui9ZltF9iJNcJxNYPHZpthsJjm1q9GX9rV7SH2s2Kq_BV7zOQTQS70-inB1yvsvQxuvOuDl0E8pLcjWk) This package is also served through OpenBits (http://openbits.world)


### Prerequisites

Node 10.4 or later



### Installation





```
npm install is-known-mersenne
```

### Usage

Input must be in BigInt format. Simply add n after all integers.
```
const isKnownMersenne = require('is-known-mersenne');

isKnownMersenne(7n); => true
isKnownMersenne(2n**2n-1n) => true
isKnownMersenne(10n); => false
isKnownMersenne(2n**10n-1n); => false


```



## Running the tests



```
npm test
```



 

## Author

* **Cristian Perez Ramirez** 
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
