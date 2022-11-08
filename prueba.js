const objetoPrueba = {
    nombre:'Alexander',
    apellido:'Acosta',
    email:'acosta@gmail.com'
}

const copiaObjeto = { ...objetoPrueba, ['Nombre']: 'Carlos' }

console.log( copiaObjeto );