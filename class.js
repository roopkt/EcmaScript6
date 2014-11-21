//CLASS
describe("Class",function(){
    it("can create a class",function(){
        class Employee{
            doWork(){return "complete!";}
            getName(){return "Rupesh";}
        }
    let e = new Employee();
    expect(e.doWork()).toBe("complete!");
    expect(e.getName()).toBe("Rupesh");
    });
});
