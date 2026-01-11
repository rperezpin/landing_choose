# Guía para Agentes de IA: Creación de la Landing Page

Este documento define los roles y las instrucciones específicas para los agentes de IA encargados de desarrollar la landing page de **GPT PC**.

## 🧬 Roles de Agentes

### 1. Arquitecto de Diseño (UX/UI Agent)
- **Misión**: Definir la estructura visual y la experiencia de usuario.
- **Requisito**: Seguir la línea estética premium y moderna definida en `landing_page_spec.md`.
- **Foco**: Asegurar que la propuesta de valor "simplificar la compra" sea el centro visual de la página.

### 2. Redactor Creativo (Copywriter Agent)
- **Misión**: Escribir los textos persuasivos de la landing.
- **Requisito**: Usar los ejemplos de uso de la aplicación real (Paso 1: Categoría, Paso 2: Uso, Paso 3: Personalización, Paso 4: IA Chat).
- **Tono**: Convincente, claro y tranquilizador para el usuario abrumado por la tecnología.

### 3. Desarrollador Frontend (Dev Agent)
- **Misión**: Implementar el código de la landing page.
- **Requisito**: Implementar preferiblemente en **Reflex** para mantener la coherencia tecnológica con la app principal.
- **Foco**: Optimización de velocidad, responsividad móvil y SEO.

## 📝 Instrucciones Clave de Implementación

1. **Contexto de Producto**: La landing debe dejar claro que la app ayuda a usuarios "expertos" y "no expertos" a no perderse entre especificaciones técnicas.
2. **Interactividad**: Incluir elementos visuales que imiten el flujo del asistente (ej. mini-carousels de categorías).
3. **Llamadas a la Acción (CTA)**: El objetivo final de cada sección debe ser dirigir al usuario al botón principal: "Empieza el Asistente".
4. **Uso de IA**: Resaltar que el proyecto utiliza IA de última generación para dar consejos personalizados, no solo filtros automáticos.

## 🔗 Referencias
- **Especificaciones**: `landing_page_spec.md`
- **Código Principal**: Carpeta `app/` para entender la lógica de los pasos del asistente.
