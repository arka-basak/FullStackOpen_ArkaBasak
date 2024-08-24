const {test} = require('node:test')
const assert = require('node:assert')
const dummy = require('../utils/list_helper').dummy_function

test('dummy function, should return 1 on input', ()=>{
    const blogs = [] 
    assert.strictEqual(1, dummy(blogs) )
})