//Base de datos con js

const productosTienda = [
    {tipoDeProducto: 'faston 1/4 Latonado',},
    {tipoDeProducto: 'faston 1/4 Cobrizado',},
    {tipoDeProducto: 'ojillo 3/16 Cobrizado',},
    {tipoDeProducto: 'Zapata 1/2 Cobrizado',},
    {tipoDeProducto: 'Faston 5/16 Galvanizado',},
    {tipoDeProducto: 'faston 1/8',},
    {tipoDeProducto: 'faston 3/16',},
    {tipoDeProducto: 'faston 3/8 Cobrizado',},
    {tipoDeProducto: 'PN 180'},
    {tipoDeProducto: 'hembra 1.80',},
    {tipoDeProducto: 'macho 1/8 Latonado',},
    {tipoDeProducto: 'macho 3/16 Latonado',},
    {tipoDeProducto: 'macho 1/4 Cobrizado',},
    {tipoDeProducto: 'macho 1/4 Latonado',},
    {tipoDeProducto: 'barrilito',},
    {tipoDeProducto: 'interlock Laton',},
    {tipoDeProducto: 'ojillo 5/32 Cobrizado',},
    {tipoDeProducto: 'ojillo 3/16 Latonado',},
    {tipoDeProducto: 'espada 3/16',},
    {tipoDeProducto: 'ojillo 1/4 Cobrizado',},
    {tipoDeProducto: 'ojillo 1/4 Latonado',},
    {tipoDeProducto: 'ojillo 5/16 Cobrizado',},
    {tipoDeProducto: 'ojillo 1/16 Latonado',},
    {tipoDeProducto: 'ojillo especial',},
    {tipoDeProducto: 'ojillo 3/8 Cobrizado',},
    {tipoDeProducto: 'ojillo 3/8 Latonado',},
    {tipoDeProducto: 'ojillo 1/2 Latonado',},
    {tipoDeProducto: 'Zapata 3/8 Cobrizado',},
    {tipoDeProducto: 'Zapata 3/8 Latonado',},
];

/*El valor de los value tiene que ser igual al de los objetos, o casi todos los objetos
Las propiedades que vamos a tener en la base de datsos son las que nosotros necesitemos
filtrar, como lo son, tipo, terminal, o no, haber, veámos veámos que rollo con esto

haber, esti creo que tendría que checarlo con los ids, después checar lógica

en nuestro homólogo tenemos uno que 
se enfoca en modelo, pero no tenemos un id para filtrar por
este mismo, lo mismo podría ser con las imágenes por ejemplo.

en el objeto tenemos la siguiente información,
marca, modelo, año, precio, puertas, color, transmision.
pero por los que filtramos es por los siguientes...

marca, año, precio minimo, precio máximo, puertas, transmision y color.

entonces en el de nosotros 
tipo será igual al tipo de producto que tengamos.

para esto hay que hacernos una pregunta, sobre qué productos queremos nosotros filtrar.

pfff
creo que el proyecto sólo se podría filtrar por una jajaja
o sea que enrealidad no es mucho, sólo sería el tipo de producto.
en todos los diferentes productos.

Si comparamos con nuestro homógolo sería algo como
tipoDeProducto = marca(que marca contiene el producto perce(la marca))*/


