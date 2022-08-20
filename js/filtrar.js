//Variables
//Donde colocaremos nuestros productos ya filtrados y no filtrados-
const resultado = document.querySelector('#resultado');//Aquí colocaremos los resultados.
const datosBusqueda = {
    tipoDeProducto: '',
};//Eventos
/*Al iniciar mi app quiero que los productos se muestren, ojo, los productos los tengo en la base de datos*/
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productosTienda);//AQUÍ DESPUÉS LE VOY A TENER QUE METER UN ARGUMENTO(VARIABLE)
});
function mostrarProductos(productosTienda){//Aquí le tenemos que pasar un parámetro después.
    limpiarHTML();
    productosTienda.forEach(producto => {
        const productoMini = document.createElement('div');
        productoMini.classList.add('producto__mini');

        const containImage = document.createElement('a');
        containImage.href = '#';

        const imagen = document.createElement('img');
        imagen.src = 'img/fastonUnCuarto-latonado.jpg';
        imagen.classList.add('producto__imagen');
        containImage.appendChild(imagen);

//Esta es otra categoría
        const divInfo = document.createElement('div');
        divInfo.classList.add('producto__info');

        const containTexto = document.createElement('a');
        containTexto.href = '#';
    
        const productoTexto = document.createElement('p');
        productoTexto.classList.add('producto__texto');
        productoTexto.textContent = `${producto.tipoDeProducto}`;

        
        const productoPrecio = document.createElement('p');
        productoPrecio.classList.add('producto__precio');
        productoPrecio.textContent = '$43';//Aquí podría ser una variable de una base de datos


        const btnAgregar = document.createElement('button');
        btnAgregar.classList.add('btn__agregar--Carrito');
        btnAgregar.textContent = 'Agregar al Carrito';
        btnAgregar.type = 'submit';//Y creo que de esta manera le estaría agregando el submit.


        //Agregando info y a a productos__mini
        productoMini.append(containImage, divInfo);//Listo.
        //Agregando Productos 
        divInfo.append(containTexto, productoPrecio, btnAgregar);
        /*Y al final le agregaremos el productoTexto al contain texto, pero
        su valor será el de iterar sobre nuestro arreglo de productos y
        haber accedido a tipo de producto.*/
        containTexto.appendChild(productoTexto);

        resultado.appendChild(productoMini);
    });
}
//Ahora nos toca leer los datos que el usuario haya seleccionado
const terminales = document.querySelector('#terminales');
terminales.addEventListener('change', (e) => {
        datosBusqueda.tipoDeProducto = e.target.value;
//console.log(e.target.value);
//console.log(datosBusqueda); Aqui ya tenemos 
    //Cuando el usuario ya haya hecho la acción de filtrar, nosotros filtramos.
    filtrarProducto();
});
/*Haber, aquí ya leímos los elementos que estamos seleccionando(por así decirlo,
ya tenemos los datos que el usuario está seleccionando).

Estos datos que el usuario está seleccionando yo los quiero, para ello crearemos
un objeto, para que en dicho objeto pongamos los datos que el usuario está seleccionando

Para tomar estos datos y colocarlos en este objeto los igualaremos con la sintaxis de
punto para acceder a dichos valores del objeto, y e.target.value es el valor
que el usuario escoje.

Aquí podemos ver que ya tenemos dichos valores que el usuario seleccionó en el 
objeto, lo podríamos hacer sólo juntandolo en variables, pero si queremos crecer 
el proyecto lo que tenemos que hacer es juntar más y más información(mas en este caso que
son productos y son muchísimos, en un sólo lugar, en una sóla variable).

Ya teniendo esto ya podemos hacer el filtrado... para este filtrado usaremos filter
por así decirlo, vamos a iterar sobre todo nuestro arreglo de productos tienda y 
nos vamos a traer sólo los que sean iguales a datos búsqueda, si 
datosBusqueda.tipoDeProducto === (parám toma lugar de objetos).tipoDeProducto;
entonces regrésame psss qué será el tipo de producto de la base de datos, no?
smn smn.
*/

function filtrarProducto(){
const resultado = productosTienda.filter( filtrarTerminal );//Este si es el arreglo de dbs
//console.log('filtrando'); normalmente el filter es un arrow function con el param
//para que tome el lugar de todos los elementos, pero como estamos usando otro
//tipo de función, pues el parametro se lo colocamos a la otra funcion para que tome su valor
//console.log(resultado); esta nos muestra como se va llenando nuestro objeto
    mostrarProductos(resultado);//Le pasamos el resultado de los filtros
};

function filtrarTerminal(producto){//Este filtra sólo sobre terminales, sobre nada más. 
//console.log(producto);//Y esto nos iterará sobre todos los elementos que tengamos en el objeto
    if(datosBusqueda.tipoDeProducto){/*Le ponemos una validación, para que no 
nos regrese un null, si datos busqueda tiene algo.*/
    return producto.tipoDeProducto === datosBusqueda.tipoDeProducto;
    }
    return producto; //Si el usuario no ha seleccionado nada devuélveme todo el producto
}
/*Aquí finaliza la primera parte del filtrador, seccion terminales.

Ahora, una vez que yo tenga un resultado, quiero volver a imprimir dicho html
pero con las busquedas del resultado.
entonces después de resultado mandamos llamar el html nuevamente(mostrarProductos)
 y le paso el resultado.

 Ahora, la función mostrarProdcutos tendría que tomar un parámetro afuezas, preferentemente
 le pongo el valor de el arreglo.(los nombro igual)

 Y cuando yo mando llamar esa función mostrar autos le voy a tener que pasar igual, 
 un parámetro jajaja, (o sea al DOMCONTENTLOADED), este parámetro igual lo llamaré
 como el arreglo. 

 Si realizamos la acción podemos ver que filtra los elementos, pero hasta abajo de todos
 los elementos que no necesito, porque se supone que estoy filtrando.

 Eso pasa porque en ningún momento le estamos diciendo que borre el contenido previo, 
 sólo le estamos diciendo appendChild por cada iteración, eso significa que vuelva a 
 imprimir todo el html, por lo que nosotos tenemos que borrarlo.


*/
//Limpiar HTML. esta será llamada antes de recorrer e imprimir el html
function limpiarHTML(){
    while(resultado.firstChild){//MIENTRAS HAYA ALGO...
        resultado.removeChild(resultado.firstChild);

    }
};






