"use strict"

// задача 1

var arr = [2, 5, 8, 4, 1, 12];
arr.sort(function(a, b){return a-b});

// задача 2

var str = 'The quick brown fox jumps over the lazy dog';
    
str = str.split( ' ' ).filter(function ( str ) {
    var word = str.match(/(\w+)/);
    return word && word[0].length > 4;
}).join( ' ' );

document.write( str );


// задача 3

var myVar;

function myStartFunction() {
    myVar = setInterval(function () {
        alertFunc("text");
    }, 1000);
}

function alertFunc(param1) {
    document.getElementById("demo").innerHTML += "repetition is fun ";
}


// задача 4


// задача 5

value_or_null = (document.cookie.match(/^(?:.*;)?sessionKey=([^;]+)(?:.*)?$/)||[,null])[1]

