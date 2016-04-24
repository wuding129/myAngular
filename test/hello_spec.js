/*
describe("Hello",function(){
    it("says hello",function () {
        expect(sayHello()).toBe("Hello, world!");
    });
});*/
describe("Hello",function(){
    it("says hello to receiver",function(){
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
});