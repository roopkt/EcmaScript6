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
    
        
    it("can have constructor",function(){
        class Employee {
            constructor(name) {
                this._name = name;
            }
            doWork(){return "complete!";}
            getName(){return this._name;}
        }
        let e = new Employee("Rupesh");
        expect(e.doWork()).toBe("complete!");
        expect(e.getName()).toBe("Rupesh");
    });
    
        it("can have getter and setter",function(){
            class Employee {
                constructor(name) {
                this._name = name;
                }
                doWork(){return "complete!";}
                get name(){return this._name.toUpperCase();}
                set name(newValue) {
                    this._name = newValue;
                }
            }
            let e = new Employee("Rupesh");
      
            expect(e.name).toBe("RUPESH");
        
            e.name = "Rakesh";
        
            expect(e.name).toBe("RAKESH");
        
        });
        
        
        it("can have a super calss",function(){
            class Person {
                constructor(name) {
                this._name = name;
                }
                get name(){return this._name;}
                set name(newValue) {if(newValue) this._name = newValue;}
            }
            
            //employee is-a person
            class Employee extends Person {
                doWork(){
                    return `${this._name} is working`;
                }
            }
            let p = new Person("Rakesh");
            let e = new Employee("Rupesh");

            expect(p.name).toBe("Rakesh");
            expect(e.name).toBe("Rupesh");
            expect(e.doWork()).toBe("Rupesh is working");
        });
        
        
        it("can user super keyword",function(){
        class Person {
            constructor(name) {
                this._name = name;
            }
            get name(){return this._name;}
            set name(newValue) {if(newValue) this._name = newValue;}
            }

            //employee is-a person
            class Employee extends Person {
                constructor(name, title){
                    super(name);
                    this._title=title;
                }
                doWork(){
                    return `${this._name} is working`;
                }   
                get title() {
                    return this._title;
                }
            }
        let p = new Person("Rakesh");
        let e = new Employee("Rupesh","Developer");

        expect(p.name).toBe("Rakesh");
        expect(e.name).toBe("Rupesh");
        expect(e.title).toBe("Developer");
        expect(e.doWork()).toBe("Rupesh is working");
        });
        
        
        it("can user super keyword inside method",function(){
        class Person {
            constructor(name) {
            this._name = name;
            }
            doWork() {return "free";}
            get name(){return this._name;}
            set name(newValue) {if(newValue) this._name = newValue;}
            toString(){return this._name;}
        }

        //employee is-a person
        class Employee extends Person {
            constructor(name, title){
                super(name);
                this._title=title;
            }
            doWork(){
                return super() + "paid";
            }
            get title() {
                return this._title;
            }
            toString(){return this._name;}
        }
        let p = new Person("Rakesh");
        let e = new Employee("Rupesh","Developer");

        expect(p.doWork()).toBe("free");
        expect(e.doWork()).toBe("freepaid");
        expect(p.toString()).toBe("Rakesh");
        expect(e.toString()).toBe("Rupesh");
     });
});
