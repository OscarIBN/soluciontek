# Aplicación de Productos con React 19

Una aplicación web moderna construida con React 19, TypeScript y Tailwind CSS que incluye autenticación fake, consumo de API pública y modo oscuro/claro.

## Características

- ✅ **Pantalla de Login**: Autenticación fake con email y contraseña
- ✅ **Pantalla Home**: Lista de productos desde API pública (https://api.escuelajs.co/api/v1/products)
- ✅ **Logout**: Botón para cerrar sesión y limpiar la sesión
- ✅ **Modo Oscuro/Claro**: Toggle para cambiar entre temas
- ✅ **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- ✅ **Efectos Visuales**: Fondo con gradientes animados
- ✅ **Búsqueda**: Filtrado de productos en tiempo real

## Tecnologías Utilizadas

- **React 19**: Framework principal
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de estilos
- **Node.js 24.5.0**: Entorno de ejecución

## Instalación y Ejecución

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar la aplicación:
```bash
npm start
```

3. Abrir en el navegador: http://localhost:3000

## Uso

1. **Login**: Usa cualquier email y contraseña para acceder (autenticación fake)
2. **Explorar Productos**: Ve la lista de productos cargados desde la API
3. **Buscar**: Usa la barra de búsqueda para filtrar productos
4. **Cambiar Tema**: Usa el botón de sol/luna para alternar entre modo claro y oscuro
5. **Cerrar Sesión**: Usa el botón "Cerrar Sesión" para volver al login

## Estructura del Proyecto

```
src/
├── components/
│   ├── Login.tsx          # Componente de login
│   └── Home.tsx           # Componente principal con productos
├── contexts/
│   ├── AuthContext.tsx    # Contexto de autenticación
│   └── ThemeContext.tsx   # Contexto de tema
├── App.tsx                # Componente principal
└── index.css              # Estilos globales
```

## API Utilizada

La aplicación consume la API pública de EscuelaJS:
- **Endpoint**: https://api.escuelajs.co/api/v1/products
- **Datos**: Lista de productos con información completa
- **Formato**: JSON

## Características Técnicas

- **Autenticación**: Sistema fake que simula login con token
- **Persistencia**: Datos de usuario guardados en localStorage
- **Responsive**: Diseño adaptable usando Tailwind CSS
- **Animaciones**: Efectos suaves y transiciones
- **Accesibilidad**: Componentes accesibles y semánticamente correctos

## Autor

```
   ___                    ___ ____  _   _ 
  / _ \ ___  ___ __ _ _ _|_ _| __ )| \ | |
 | | | / __|/ __/ _` | '__| ||  _ \|  \| |
 | |_| \__ \ (_| (_| | |  | || |_) | |\  |
  \___/|___/\___\__,_|_| |___|____/|_| \_|
                                          
FullStack Senior
```