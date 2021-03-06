/* The contents of this file are subject to the Netscape Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/NPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 *
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s): 
 * 
 */
/**
    File Name:          15.5.4.5-6.js
    ECMA Section:       15.5.4.5 String.prototype.charCodeAt(pos)
    Description:        Returns a number (a nonnegative integer less than 2^16)
                        representing the Unicode encoding of the character at
                        position pos in this string.  If there is no character
                        at that position, the number is NaN.

                        When the charCodeAt method is called with one argument
                        pos, the following steps are taken:
                        1. Call ToString, giving it the theis value as its
                           argument
                        2. Call ToInteger(pos)
                        3. Compute the number of characters in result(1).
                        4. If Result(2) is less than 0 or is not less than
                           Result(3), return NaN.
                        5. Return a value of Number type, of positive sign, whose
                           magnitude is the Unicode encoding of one character
                           from result 1, namely the characer at position Result
                           (2), where the first character in Result(1) is
                           considered to be at position 0.

                        Note that the charCodeAt funciton is intentionally
                        generic; it does not require that its this value be a
                        String object.  Therefore it can be transferred to other
                        kinds of objects for use as a method.

    Author:             christine@netscape.com
    Date:               2 october 1997
*/
    var SECTION = "15.5.4.5-6";
    var VERSION = "ECMA_2";
    startTest();
    var TITLE   = "String.prototype.charCodeAt";

    writeHeaderToLog( SECTION + " "+ TITLE);

    var testcases = getTestCases();
    test();

function getTestCases() {
    var array = new Array();
    var item = 0;

    array[item++] = new TestCase( SECTION,
                                  "var obj = true; obj.__proto__.charCodeAt = String.prototype.charCodeAt; var s = ''; for ( var i = 0; i < 4; i++ ) s+= String.fromCharCode( obj.charCodeAt(i) ); s",
                                  "true",
                                  eval("var obj = true; obj.__proto__.charCodeAt = String.prototype.charCodeAt; var s = ''; for ( var i = 0; i < 4; i++ ) s+= String.fromCharCode( obj.charCodeAt(i) ); s") );

    array[item++] = new TestCase( SECTION,
                                  "var obj = 1234; obj.__proto__.charCodeAt = String.prototype.charCodeAt; var s = ''; for ( var i = 0; i < 4; i++ ) s+= String.fromCharCode( obj.charCodeAt(i) ); s",
                                  "1234",
                                  eval("var obj = 1234; obj.__proto__.charCodeAt = String.prototype.charCodeAt; var s = ''; for ( var i = 0; i < 4; i++ ) s+= String.fromCharCode( obj.charCodeAt(i) ); s") );

    array[item++] = new TestCase( SECTION,
                                  "var obj = 'hello'; obj.__proto__.charCodeAt = String.prototype.charCodeAt; var s = ''; for ( var i = 0; i < 5; i++ ) s+= String.fromCharCode( obj.charCodeAt(i) ); s",
                                  "hello",
                                  eval("var obj = 'hello'; obj.__proto__.charCodeAt = String.prototype.charCodeAt; var s = ''; for ( var i = 0; i < 5; i++ ) s+= String.fromCharCode( obj.charCodeAt(i) ); s") );
    return (array );
}

function test() {
    for ( tc = 0; tc < testcases.length; tc++ ) {
    testcases[tc].passed = writeTestCaseResult(
        testcases[tc].expect,
        testcases[tc].actual,
        testcases[tc].description +" = "+
        testcases[tc].actual );

        testcases[tc].reason += ( testcases[tc].passed )
                                    ? ""
                                    : "wrong value "
    }
    stopTest();
    return ( testcases );
}
