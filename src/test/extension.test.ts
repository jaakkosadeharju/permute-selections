//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import { sortAsc } from "../sort_asc";
import { sortDesc } from "../sort_desc";
import { reverse } from "../reverse";

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

    test("Sorts arrays ascending", function () {
        assert.equal(['a', 'b', 'c'].join(), sortAsc(['c', 'a', 'b'], (s: string) => (s)).join());
    });
    test("Sorts arrays descending", function () {
        assert.equal(['c', 'b', 'a'].join(), sortDesc(['c', 'a', 'b'], (s: string) => (s)).join());
    });
    test("Reverses arrays", function () {
        assert.equal(['c', 'b', 'a'].join(), reverse(['a', 'b', 'c'], (s: string) => (s)).join());
        assert.equal(['c', 'b', 'a', 'd'].join(), reverse(['d', 'a', 'b', 'c'], (s: string) => (s)).join());
        assert.equal([].join(), reverse([], (s: string) => (s)).join());
    });
});