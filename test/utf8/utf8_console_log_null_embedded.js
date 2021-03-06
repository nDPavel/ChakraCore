//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test if console.log can handle strings with null embedded in them. Null characters should be skipped, and
// the remaining characters should be printed. See https://github.com/Microsoft/ChakraCore/pull/4539

console.log("abc\0def");
console.log("a bc def");      // there're two actual null characters in this string: "a<NUL>bc<NUL>def"
console.log("ab\0cd\0ef");
console.log("\0ab\0\0cd\0ef\0");
console.log("\0");
console.log(" ");  // "<NUL>"
console.log("\0\0\0");
console.log("  \0 \u0000"); // "<NUL><NUL>\0<NUL>\u0000"
console.log(" 中\0文"); // "<NUL>中\0文"
console.log("\u2014\u0041\u0000\u{10401}");
