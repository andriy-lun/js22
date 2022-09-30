//-----------------------------------------------------
const u = "ASSIGMENT & COMPARISON OPERATORS"
//-----------------------------------------------------
console.log("\n" + u);
let x=3, y=2;
console.log("x = 3, y = 2");
console.log(" =     x =  y    x = y         " + (y)/1    );
console.log("+=     x += y    x = x + y     " + (x + y)/1);
console.log("-=     x -= y    x = x - y     " + (x - y)/1);
console.log("/=     x /= y    x = x / y     " + (x / y)/1);
console.log("*=     x *= y    x = x * y     " + (x * y)/1);
console.log("**=    x**= y    x = x** y     " + (x** y)/1);
console.log("%=     x %= y    x = x % y     " + (x % y)/1);

let z0 =  0, z1 =  1,  z2 = 2;
let t0 = "", t1 = "1";
console.log(z0==t0 ); // +
console.log(z0===t0); // -
console.log(z1!=t1 ); // -
console.log(z1!==t1); // +
console.log(z0<z1  ); // +
console.log(z0<=z1 ); // -
console.log(z0>z0  ); // +
console.log(z0>=z0 ); // +

//-----------------------------------------------------
console.log ("\n BITWISE OPERATORS")
//-----------------------------------------------------
console.log(5 & 1); //	1	0101 &  0001	0001
console.log(5 | 1); //	5	0101 |  0001	0101
console.log(~ 5	 ); //	-6  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NOT 10
console.log(5 ^ 1); //	4	0101 ^  0001	0100
console.log(5<< 1); //	10	0101 << 1	    1010
console.log(5>> 1); //	2	0101>>  1	    0010
console.log(5>>>1); //	2	0101>>> 1	    0010

//-----------------------------------------------------
const tern = "TERNARY";
const oper = "OPERATORS";
//-----------------------------------------------------
oper !== tern                                 // CONDITION
    ? console.log("\n" + tern + " " + oper)   // if TRUE
    : console.log("never printed");           // if FALSE
console.log("\n condition ? true : false")

//-----------------------------------------------------
const p = "CONDITION OPERATOR"; // IF ELSE  
//-----------------------------------------------------
console.log("\n" + p + " IF ELSE" + "\ntemperature state of the H2O");
let t = 15;
 0 < t < 100;
 if (t < 0) {
    console.log (('SOLID ICE \n').toLowerCase());
} else if (t > 100) {
    console.log(('VAPOR GAS \n').toLowerCase());
} else {
    console.log(("LIQUID WATER \n").toLowerCase());
};

//-----------------------------------------------------
console.log("SWITCH OPERATOR")
//-----------------------------------------------------
const seasonNum = "three";
let season = "";
switch (seasonNum) {
    case 1: {
        season = "spring";
        console.log (season);
    }
    break;
    
    case 2: {
        season = "summer";
        console.log (season);
    }
    break;

    case  3 :
    case '3':
    case 'three': {
        season = "autumn";
        console.log (season);
    }
    break;

    case 4: {
        season = "winter";
        console.log (season);
    }
    break;
    
    default: {
        console.error("Please input № from 1 to 4");
    }
}