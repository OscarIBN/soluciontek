# Solución Tekton - Aplicación React

Una aplicación web moderna construida con React 19, TypeScript y Tailwind CSS que incluye autenticación fake, consumo de API pública y modo oscuro/claro.

## 🚀 Características

- ✅ **Pantalla de Login**: Autenticación fake con email y contraseña
- ✅ **Pantalla Home**: Lista de productos desde API pública (https://api.escuelajs.co/api/v1/products)
- ✅ **Logout**: Botón para cerrar sesión y limpiar la sesión
- ✅ **Modo Oscuro/Claro**: Toggle para cambiar entre temas
- ✅ **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- ✅ **Efectos Visuales**: Fondo con gradientes animados
- ✅ **Búsqueda**: Filtrado de productos en tiempo real

## 🛠 Tecnologías Utilizadas

- **React 19**: Framework principal
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de estilos
- **Node.js 24.5.0**: Entorno de ejecución
- **Context API**: Gestión de estado global

## 📁 Estructura del Proyecto

```
solucion/
├── frontend/                 # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   │   ├── Login.tsx    # Pantalla de login
│   │   │   └── Home.tsx     # Pantalla principal
│   │   ├── contexts/        # Contextos de React
│   │   │   ├── AuthContext.tsx    # Contexto de autenticación
│   │   │   └── ThemeContext.tsx   # Contexto de tema
│   │   ├── App.tsx          # Componente principal
│   │   └── index.css        # Estilos globales
│   ├── package.json         # Dependencias
│   ├── tailwind.config.js   # Configuración Tailwind
│   └── README.md            # Documentación del frontend
└── README.md                # Este archivo
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 24.5.0 o superior
- npm o yarn

### Pasos para ejecutar

1. **Clonar el repositorio**:
```bash
git clone https://github.com/OscarIBN/soluciontek.git
cd soluciontek
```

2. **Instalar dependencias**:
```bash
cd frontend
npm install
```

3. **Iniciar la aplicación**:
```bash
npm start
```

4. **Abrir en el navegador**: http://localhost:3000

## 📱 Uso de la Aplicación

1. **Login**: Usa cualquier email y contraseña para acceder (autenticación fake)
2. **Explorar Productos**: Ve la lista de productos cargados desde la API
3. **Buscar**: Usa la barra de búsqueda para filtrar productos
4. **Cambiar Tema**: Usa el botón de sol/luna para alternar entre modo claro y oscuro
5. **Cerrar Sesión**: Usa el botón "Cerrar Sesión" para volver al login

## 🌐 API Utilizada

La aplicación consume la API pública de EscuelaJS:
- **Endpoint**: https://api.escuelajs.co/api/v1/products
- **Datos**: Lista de productos con información completa
- **Formato**: JSON

## 🎨 Características de Diseño

- **Responsive Design**: Adaptable a móviles, tablets y desktop
- **Modo Oscuro/Claro**: Toggle automático con persistencia
- **Animaciones**: Efectos suaves y transiciones
- **Gradientes**: Fondos con efectos visuales atractivos
- **Accesibilidad**: Componentes accesibles y semánticamente correctos

## 🔧 Características Técnicas

- **Autenticación**: Sistema fake que simula login con token
- **Persistencia**: Datos de usuario guardados en localStorage
- **Estado Global**: Context API para autenticación y tema
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Estilos utilitarios y responsivos

## Autor

```
   ___                    ___ ____  _   _ 
  / _ \ ___  ___ __ _ _ _|_ _| __ )| \ | |
 | | | / __|/ __/ _` | '__| ||  _ \|  \| |
 | |_| \__ \ (_| (_| | |  | || |_) | |\  |
  \___/|___/\___\__,_|_| |___|____/|_| \_|
                                          
FullStack
```