/* 
    + : addition operator
    - : subtraction operator
    * : multiplication operator
    ** : exponent
    / : division
    % : modulus
    == : equality
    === : equality with type check
    >= : greater than or equal to
    <= : less than or equal to
*/

console.table(
    [
        2 + 3, // 5,
        3 - 2, // 1
        3 * 3, // 9
        3 ** 3, // 27
        4 / 2, // 2
        10 % 4, // 2
        10 == 10, // true
        "10" == 10, // true
        10 === "10", // false
        10 >= 10, // true
        10 <= 10, // true
        null > 0, // false
        null == 0, // false
        null >= 0, // true
        null <= 0 // true
    ]
)
