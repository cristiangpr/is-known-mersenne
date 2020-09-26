# Is Known Mersenne

Quickly determines if a number is a known mersenne prime. Returns boolean value


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
