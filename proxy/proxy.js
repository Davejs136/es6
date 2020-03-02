function init() {
  const lista = [
    {
      nombre: 'Juan',
      edad: 20
    },
    {
      nombre: 'ana',
      edad: 30
    }
  ];

  const add = document.querySelector('#add');
  const remove = document.querySelector('#remove');

  function crearTable(lista) {
    const tabla = document.querySelector('table');

    tabla.textContent = '';

    lista.forEach(list => {
      tabla.innerHTML += `
      <tr>
        <td>${list.nombre}</td>
        <td>${list.edad}</td>
      </tr>
      `;
    })
  }

  // Normalmente, manera mas general
  // crearTable(lista);

  // document.querySelector('#add').addEventListener('click', () => {
  //   lista.push({
  //     nombre: "pedro",
  //     edad: 50
  //   });

  //   crearTable(lista);
  // });

  // document.querySelector('#remove').addEventListener('click', () => {
  //   lista.splice(lista.indexOf({
  //     nombre: "pedro",
  //     edad: 50
  //   }), 1);

  //   crearTable(lista);
  // });


  // Implementando un Proxy
  function reactive(miarray) {
    const nueva = new Proxy(miarray, {
      set(target, property, value) {
        target[property] = value;
        crearTable();
        return true;
      }
    })

    return nueva;
  }

  let reactiveList = reactive(lista);

  crearTable(reactiveList);

  add.addEventListener('click', () => {
    reactiveList.push({
      nombre: 'Pedro',
      edad: 50
    });
  });

  remove.addEventListener('click', () => {
    reactiveList.splice(lista.indexOf({
      nombre: 'Pedro',
      edad: 50
    }), 1);
  })

}

window.addEventListener('load', init);
