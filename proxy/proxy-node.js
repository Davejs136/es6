const proxy = new Proxy({}, {
  get: function(target, propertyKey) {
    return target[propertyKey] ? true: 'No hay na';
  },

  set: function(target, property, value, receiver) {
    return receiver;
  }
  
  
})

proxy.a = 1;
proxy.b = 'nombre';

// Proxy de validacion:

const validator = {
  set(obj, prop, value) {
    console.log(value);
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age must be a value');
      }

      if (value < 0) {
        throw new RangeError('Invalid Age');
      }
    }

    // Comportamineto por defecto del setter
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
// person.age = 'young';
// person.age = -5;
person.age = 10;

console.log(person)