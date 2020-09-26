
const mersennePrimes = [
    (2n**2n)-1n, 
    (2n**3n)-1n, 
    (2n**5n)-1n, 
    (2n**7n)-1n,
    (2n**13n)-1n,
    (2n**17n)-1n, 
    (2n**19n)-1n,
    (2n**31n)-1n, 
    (2n**61n)-1n, 
    (2n**89n)-1n, 
    (2n**107n)-1n, 
    (2n**127n)-1n, 
    (2n**521n)-1n, 
    (2n**607n)-1n,
    (2n**1279n)-1n,
    (2n**2203n)-1n,
    (2n**2281n)-1n,
    (2n**3217n)-1n,
    (2n**4253n)-1n,
    (2n**4423n)-1n,
    (2n**9689n)-1n,
    (2n**9941n)-1n,
    (2n**11213n)-1n,
    (2n**19937n)-1n,
    (2n**21701n)-1n,
    (2n**23209n)-1n,
    (2n**44497n)-1n,
    (2n**86243n)-1n,
    (2n**110503n)-1n,
    (2n**132049n)-1n,
    (2n**216091n)-1n,
    (2n**756839n)-1n,
    (2n**1257787n)-1n,
    (2n**1398269n)-1n,
    (2n**2976221n)-1n,
    (2n**3021377n)-1n,
    (2n**6972593n)-1n,
    (2n**13466917n)-1n,
    (2n**20996011n)-1n,
    (2n**24036583n)-1n,
    (2n**25964951n)-1n,
    (2n**30402457n)-1n,
    (2n**32582657n)-1n,
    (2n**37156667n)-1n,
    (2n**42643801n)-1n,
    (2n**43112609n)-1n,
    (2n**57885161n)-1n,
    (2n**74207281n)-1n,
    (2n**77232917n)-1n,
    (2n**82589933n)-1n,

]

const isKnownMersenne = (num) => {
    for(let i=0; i <=mersennePrimes.length; i++)
    if (num == mersennePrimes[i]) {
    return true
    } else if (num < mersennePrimes[i +1]) {
        return false
    }
    return false
    
};

module.exports = {isKnownMersenne}