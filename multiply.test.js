const Multiply=require("./multiplication");

test('2 multiplied by 2 should return 4',()=>{
    expect(Multiply(2,2)).toBe(4);
})