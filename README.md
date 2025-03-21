## Portfolio BaltaDev
```
BaltaDev/
├── 📄 index.html
├── 📄 package.json
├── 📁 src/
│   ├── 📄 App.tsx
│   ├── 📄 main.tsx
│   ├── 📁 Styles/
│   │   ├── 📄 global.css
│   │   ├── 📄 navbar.css
│   │   └── 📄 home.css
│   ├── 📁 assets/
│   │   ├── 📁 images/
│   │   │   ├── 🖼️ logo balta2.jpg
│   │   │   └── 🖼️ FotoPerfil.jpeg
│   │   ├── 📁 icons/
│   │   │   ├── 🖼️ adobexdicon.svg
│   │   │   ├── 🖼️ htmlicon.svg
│   │   │   ├── 🖼️ cssicon.svg
│   │   │   ├── 🖼️ javascripticon.svg
│   │   │   ├── 🖼️ typescripticon.svg
│   │   │   ├── 🖼️ sassicon.svg
│   │   │   ├── 🖼️ reacticon.svg
│   │   │   ├── 🖼️ nodejsicon.svg
│   │   │   ├── 🖼️ tailwindicon.svg
│   │   │   ├── 🖼️ figmaicon.svg
│   │   │   └── 🖼️ canvaicon.svg
│   │   └── 📁 lib/
│   │       └── 📄 data.tsx
│   ├── 📁 features/
│   │   ├── 📁 components/
│   │   │   ├── 📄 Navbar.tsx
│   │   │   ├── 📄 SideBarRight.tsx
│   │   │   └── 📄 ThemeToggleButton.tsx
│   │   ├── 📁 pages/
│   │   │   ├── 📄 Contact.tsx
│   │   │   ├── 📄 Home.tsx
│   │   │   ├── 📄 Projects.tsx
│   │   │   └── 📄 Skills.tsx
│   │   └── 📁 routing/
│   │       └── 📄 routes.tsx
├── 📄 vite.config.ts
├── 📁 public/
│   └── 📄 Untitled-1.ini
├── 📄 README.md
```
### Paso 2: Resolver el conflicto

Edita el archivo `README.md` para resolver el conflicto. Elimina las marcas de conflicto y combina los cambios de ambas versiones si es necesario.

### /home/dci-student/Desktop/webDev DCI tz/Proyectos/BaltaDev/README.md

<file>
````markdown
// filepath: /home/dci-student/Desktop/webDev DCI tz/Proyectos/BaltaDev/README.md
## Portfolio BaltaDev
```
BaltaDev/
├── 📄 index.html
├── 📄 package.json
├── 📁 src/
│   ├── 📄 App.tsx
│   ├── 📄 main.tsx
│   ├── 📁 Styles/
│   │   ├── 📄 global.css
│   │   ├── 📄 navbar.css
│   │   └── 📄 home.css
│   ├── 📁 assets/
│   │   ├── 📁 images/
│   │   │   ├── 🖼️ logo balta2.jpg
│   │   │   └── 🖼️ FotoPerfil.jpeg
│   │   ├── 📁 icons/
│   │   │   ├── 🖼️ adobexdicon.svg
│   │   │   ├── 🖼️ htmlicon.svg
│   │   │   ├── 🖼️ cssicon.svg
│   │   │   ├── 🖼️ javascripticon.svg
│   │   │   ├── 🖼️ typescripticon.svg
│   │   │   ├── 🖼️ sassicon.svg
│   │   │   ├── 🖼️ reacticon.svg
│   │   │   ├── 🖼️ nodejsicon.svg
│   │   │   ├── 🖼️ tailwindicon.svg
│   │   │   ├── 🖼️ figmaicon.svg
│   │   │   └── 🖼️ canvaicon.svg
│   │   └── 📁 lib/
│   │       └── 📄 data.tsx
│   ├── 📁 features/
│   │   ├── 📁 components/
│   │   │   ├── 📄 Navbar.tsx
│   │   │   ├── 📄 SideBarRight.tsx
│   │   │   └── 📄 ThemeToggleButton.tsx
│   │   ├── 📁 pages/
│   │   │   ├── 📄 Contact.tsx
│   │   │   ├── 📄 Home.tsx
│   │   │   ├── 📄 Projects.tsx
│   │   │   └── 📄 Skills.tsx
│   │   └── 📁 routing/
│   │       └── 📄 routes.tsx
├── 📄 vite.config.ts
├── 📁 public/
│   └── 📄 Untitled-1.ini
├── 📄 README.md
```
````

### Paso 3: Marcar el conflicto como resuelto

Después de resolver el conflicto, marca el archivo como resuelto y continúa con el rebase.

```sh
git add /home/dci-student/Desktop/webDev DCI tz/Proyectos/BaltaDev/README.md
git rebase --continue
```

### Paso 4: Finalizar el rebase

Si hay más conflictos, repite los pasos anteriores hasta que todos los conflictos estén resueltos. Una vez que todos los conflictos estén resueltos, el rebase debería completarse correctamente.

Con estos pasos, deberías poder resolver el conflicto de fusión en `README.md` y completar el rebase.