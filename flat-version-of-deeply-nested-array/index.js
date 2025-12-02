/**
 * For more programming concepts, questions, tips, and tutorials, visit:
 *
 * https://bit.ly/devtools-yt
 * https://code.devtools.tech
 * https://devtools.tech
 *
 * Author: Yomesh Gupta (https://yomeshgupta.com)
 */

/**
 * Question: Given a deeply nested array, create a function on the array, namely flatten, that when invoked returns
 * a flat version of the original array. Function should be defined in a way that it can be invoked on existing
 * and future arrays. 
 * 
 * 
    var input = [
        1, 2, 3,
        [4],
        [5, 6, [7], [8, [9, [10]]]],
        11, 12, 13,
        [14, [[[[[15, [16]]]]]]],
        17, 18,
        [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
    ];

    var flatArray = input.flatten();
    // flatArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
 *
 */

// Solution

/** var themes = []; themes.flatten(); */

var input = [
    1, 2, 3,
    [4],
    [5, 6, [7], [8, [9, [10]]]],
    11, 12, 13,
    [14, [[[[[15, [16]]]]]]],
    17, 18,
    [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
];

function flatten() {
    let flat = [];

    this.forEach(element => {
        if(Array.isArray(element)) {
            let nestedFlat = element.flatten();
            // need to figure out why this is not working with concat method
            flat = [...flat, ...nestedFlat];
        } else {
            flat.push(element);
        }
    });

    return flat;
}

Array.prototype.flatten = flatten;
console.log(input.flatten());
