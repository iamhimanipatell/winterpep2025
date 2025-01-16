function mergeArray(ar1, ar2){
    return [...ar1,...ar2];
}

const ar1 = [1,2,3];
const ar2 = [4,5,6];

const finalmerge = mergeArray(ar1, ar2);
console.log(finalmerge);