function myfunc(x, y = 7, z = 42) {
    console.log({x, y, z});
    return x + y + z;
}

console.log(myfunc(1)); 
