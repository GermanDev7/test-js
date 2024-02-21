//assertions o matchers

test('test1 obj',()=>{
    const data={name:'nico'};
    data.lastname='molina';
    expect(data).toEqual({name:'nico',lastname:'molina'});
});

test('test1 null',()=>{
    const data=null
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();// negar la condicion
});


test('test1 boolean',()=>{

    expect(true).toEqual(true);
    expect(false).toEqual(false);


    expect(0).toBeFalsy(); 
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
});

test('string',()=>{

    expect('Christoph').toMatch(/stop/);
});

test('list',()=>{

    const numbers=[1, 2, 3,4 ];

    expect(numbers).toContain(3);
});