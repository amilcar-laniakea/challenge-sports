<!-- @format -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://laniakea-store.herokuapp.com">
    <img src="https://starwarsblog.starwars.com/wp-content/uploads/2015/11/rebel-symbol-300x300.jpg" alt="Logo" width="100" height="auto">
  </a>

  <h3 align="center">Challenge SW!</h3>

  <p align="center">
    Star Wars mini-Proyecto
    <br />
    <a href=" https://github.com/amilcar-laniakea/challenge-sports.git"><strong>Repositorio</strong></a>
    <br />
    <br />
  </p>
</p>

### Features

-  Realizado en React 18;
-  Estructurado con React Router Dom v6;
-  Api Usada Start Wars [SW Link](https://swapi.dev/ 'SW Link').;
-  Tres paginas de prueba para la aplicacion: Home, Detail y not Found;
-  Libreria SASS incorporada;
-  Un mini-servidor basado en express para evitar errores de cache de rutas en produccion;

<details open="open">
  <summary>Contenino</summary>
  <ul>
   <li>
      <a href="#instalacion">Instalacion</a>
    </li>
    <li>
      <a href="#nomenclatura">Nomenclatura</a>
      <ul>
        <li><a href="#variables">Variables</a></li>
        <li>
          <a href="#funciones">Funciones</a>
          <ul>
            <li><a href="#funciones-de-componentes-y-servicios">Funciones de componentes y Servicios</a></li>
            <li><a href="#funciones-internas-de-componentes">Funciones internas de componentes</a> 
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#estructura">Estructura</a>
      <ul>
        <li><a href="#assets">Assets</a></li>
        <li><a href="#componentes">Componentes</a> 
          <ul>
            <li><a href="#servicios">Servicios</a></li>
          </ul>
        </li>
        <li><a href="#context">Context</a></li>
        <li><a href="#paginas">Paginas</a></li>
        <li><a href="#router">Router</a></li>
      </ul>
    </li>
    <li><a href="#desventajas">Desventajas de usar API Rest</a></li>
    <li><a href="#estilos">Estilos</a></li>
    <li><a href="#contact">Librerias usadas</a></li>
  </ul>
</details>

# Instalacion

-  Ejecuta npm i para instalar las dependencias;
-  El servidor de escucha predeterminado para la app es el puerto 3030;

# Nomenclatura

Definimos el tipo de estructura de nombres de variables y funciones como:

# Variables

Las variables estan declaradas en tipo camelcase: Cuando las variables son de tipo Hook, se usa la nomeclantura con prefijo is para la variable como se observa en el ejemplo:

```javascript
const [isData, setData] = useState([])
```

# Funciones

Las funciones se diferencian de dos tipos de acuerdo al proyecto:

# Funciones De Componentes y Servicios

Con nomenclatura tipo Pascal Case, se usa explicitamente con la palabra funcion de acuerdo con la nomenclatura seguida por AirBnB en dos articulos donde explican que su uso evita problemas como el
"Error’s call stack":

<a href='https://airbnb.io/javascript/'>link</a> en el apartado Functions.

```javascript
export default function ExamplePage() {
	return (
		//..
	)
}
```

# Funciones Internas de Componentes

Estas, al igual que las variables, se usan de tipo camelCase, para diferenciales de las funciones padre, ademas que en este caso su nomenclatura esta realizada de tipo variable y con funcion flecha:

```javascript
const handleGetExample = async (type) => {
	//...
}
```

## Estructura

La estructura del proyecto prosigue a continuacion:

### Assets

En los assets se encuentran los recursos estaticos disponibles por el proyecto, en este caso una carpeta imagen con el icono de carga

### Componentes

En los componentes se encuentras los modulos adicionales necesarios para que las paginas de la APP funcionen de manera correcta, en esta encontramos:

-  La carpeta common, que posee los 3 componentes globales o comunes reutilizados en la app => Error, Header y Loading;
-  El Layout se usa basicamente para establecer una diferenciacion entre las rutas y los componentes que se necesitan mostrar independientemente de la vista, en este caso el Header o navbar;
-  Los Servicios, los cuales funcionan como API REST para la consulta tipo GET tanto para procesar la lista necesaria en el home y el detalle del objeto a mostrar.

### Servicios

Los servicios son funciones unicas para exportar en cada componente que procesa una peticion de la APP, esta declaradas en consultas tipo axios.

# Context

El Context del proyecto se ubica de manera global ya que solo maneja un solo estado global, el Titulo principal del navbar, en caso de necesitarse mas de un context, se ubucarian el de alcance global
dentro de una carpeta Global dentro de context y le resto en sus respectivas carpetas.

La estructura del context esta definida por un proveedor, el que hace el manejo de los estados, y el consumidor, que es el que encapsula el o los componentes que necesitaran de su cambio de esdtado
para su correcto funcionamiento:

```javascript
export const ContextGlobalProvider = (props) => {
	const [isExampleVariable, setExampleVariable] = useState('example')

	const value = {
		isExampleVariable,
		setExampleVariable,
	}
	return <AppContext.Provider value={value} {...props} />
}

export const ContextGlobalConsumer = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('ContextConsumer debe estar dentro de proveedor AppContext')
	}
	return context
}
```

# Paginas

Las paginas son los bloques principales de la app, con estructura ya establecida en el punto funciones principales, de tipo Pascal Case, con su correspondiente archivo de estilo sea tipo css, scss o
sass:

```javascript
import './syle.scss'

export default function ExamplePage() {
	return (
		//..
	)
}
```

# Router

La carpeta router es el corazon de las rutas de la APP, con una funcion tipo constante, a diferencia del resto de funciones padre con su rutas que manejan la app, asi como la encapsulacion del layout
donde esta declarada la barra de navegacion principal:

```javascript
const Routers = () => (
	<Router>
		<Layout>
			<Routes>
				<Route exact path='detail/:type/:id' element={<Detail />} />
				<Route exact path='/' element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Layout>
	</Router>
)

export default Routers
```

# Estilos

Los estilos estan manejados por la libreria SASS de react, que aunqie su contenido generalmente es igual al de un contenido indistintamente css, para mejoras del mismo se podran usar paletas de
colores para temas oscuros y variables de colores:

Su estructura generalmente se compone de un prefijo que indica las sigas de la app, en este caso star wars "sw", seguido del nombre de componente o la pagina donde esta alojado, con subsiguiente
descripcion indicando si es un contenedor, titulo descripcion, sunbitulo o una lista, se recomienda usas hasta 4 anidaciones para lectura sencilla.

El problema con React es que no encamsula el css en componente,s cxomo si lo hacen frameworks que lo potencian como NextJS.

```css
.sw-page-titlecomponent-subtitlecomponent {
}
```

### Others

Liberias del proyecto:

-  [React Router Dom](https://www.npmjs.com/package/react-router-dom)
-  [Ant Design](https://www.npmjs.com/package/antd)
-  [Dotenv](https://www.npmjs.com/package/dotenv)
-  [SASS](https://www.npmjs.com/package/sass)
-  [Axios](https://www.npmjs.com/package/axios)
-  [React Helmet](https://www.npmjs.com/package/react-helmet)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Desventajas

El uso de API Rest para el actual proyecto conlleva desventajas, primero la carga de consultas hace que el tiempo de respuesta y renderizado se incremente notablemente, cosa que no ocurriria con la
implementacion de la herramienta GraphQL, la cual estoy actualmente revisando y estudiando paa una futura implementacion.

<!-- CONTACT -->

## Contact

Twitter - [@arkhalem](https://twitter.com/ArKhaleM) - amilcar.laniakea@gmail.com

Projecto: [SW Git](https://github.com/amilcar-laniakea/challenge-sports.git)

Demo: [SW Challenge](https://github.com/amilcar-laniakea/challenge-sports.git)
