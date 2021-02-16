const enhancer = require('./enhancer.js');
// test away!

//Test that will check to make sure enhancer.js is defined.
describe('enhancer', ()=>{
    test('Enhancer exists', ()=>{
        expect(enhancer).toBeDefined()
    });

})

describe('Enhancer methods return proper item and follow method rules', ()=>{

    const Obj = {
        "name": 'Potion' ,
        "durability": 89,
        "enhancement": 10 ,
    }

    test('durability restores', ()=>{
        const expected = 100
        expect(enhancer.repair(Obj).durability).toBe(expected)
    })

    test('when enhancement succeeds ... ', ()=>{
        const newEnhancement = Obj.enhancement + 1

        expect(enhancer.success(Obj).enhancement).toBe(newEnhancement)

    })
})

describe('Item object contains a valid value for each key: name, durability, enhancement', ()=>{

    let item = {
        "name": 'Potion' ,
        "durability": 89,
        "enhancement": 0 ,
    };

    test('key value pairs exits', ()=>{
        expect(item).toHaveProperty('name')
        expect(item).toHaveProperty('durability')
        expect(item).toHaveProperty('enhancement')
    })

    test('ensures data type values of properties are valid and within their respective range', ()=>{
    
        expect(typeof(item.name)).toBe('string');
        expect(typeof(item.enhancement)).toBe('number');
        expect(typeof(item.durability)).toBe('number');

        expect(item.durability).toBeGreaterThanOrEqual(0);
        expect(item.durability).toBeLessThanOrEqual(100);
        expect(item.enhancement).toBeGreaterThanOrEqual(0);
        expect(item.enhancement).toBeLessThanOrEqual(20)
    })
})


//Triple AAA Arrange -> Act ->  Asses