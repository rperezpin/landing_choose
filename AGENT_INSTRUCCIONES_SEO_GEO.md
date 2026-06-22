# AGENTE — OPTIMIZACIÓN SEO + GEO DE EASYCHOOSE.ES

> Documento de instrucciones para el agente de desarrollo/contenido.
> Basado en datos reales de Google Search Console (últimos 3 meses: 29-mar-2026 → 18-jun-2026).
> Objetivo: maximizar visibilidad en buscadores tradicionales (SEO) **y** en motores generativos / respuestas de IA (GEO).

---

## 0. CONTEXTO Y PUNTO DE PARTIDA (no inventar, son los datos que hay)

EasyChoose es un sitio **muy joven y con tracción mínima**. El estado real según Search Console:

| Métrica (3 meses) | Valor |
|---|---|
| Impresiones totales | 69 |
| Clics totales | 6 |
| CTR global | ~8.7% |
| Páginas con impresiones | 5 (de ellas solo 2 son contenido real) |
| Tema dominante | Portátiles para estudiantes / universidad |
| País dominante | España (52 impresiones, 5 clics) |
| Dispositivo que convierte | Móvil (21.7% CTR) vs Ordenador (2.2% CTR) |

**Implicación estratégica que el agente NO debe perder de vista:**
El sitio no tiene un problema de "afinar" SEO — tiene un problema de **falta de contenido indexable y falta de autoridad**. La prioridad NO es optimizar metadatos de 5 páginas, es **construir un cuerpo de contenido** que cubra el embudo de decisión de compra, manteniendo la regla de oro de EasyChoose: *cada pieza debe servir para decidir qué comprar, cuánto gastar o cuándo comprar — nunca para educar sobre tecnología en abstracto.*

---

## 1. ARREGLAR LO QUE YA ESTÁ ROTO (bloqueante — hacer primero)

Search Console reporta 8 páginas con problemas críticos de indexación. Hasta resolverlos, cualquier contenido nuevo arranca cojo.

| Problema | Páginas | Acción del agente |
|---|---|---|
| Página con redirección | 3 | Auditar cadenas de redirección. Eliminar saltos intermedios (301 directo a destino final). Verificar que ninguna URL canónica apunte a una redirigida. |
| Soft 404 | 2 | Identificar las 2 URLs. Si la página no tiene contenido útil → devolver 404/410 real. Si sí lo tiene → asegurar contenido suficiente y respuesta 200 limpia. |
| Página alternativa con canónica correcta | 2 | Caso típico: `www.easychoose.es` vs `easychoose.es`. **Decidir un único dominio canónico** (recomendado: `easychoose.es` sin www, que es el que ya rankea) y redirigir 301 todo lo demás. Confirmar `<link rel="canonical">` coherente en todas las páginas. |
| Rastreada pero no indexada | 1 | Revisar calidad/profundidad de esa página. Mejorar contenido o solicitar indexación manual en Search Console tras la mejora. |

**Regla de dominio (crítica):** hay impresiones repartidas entre `easychoose.es/mejor-portatil-estudiantes/` (46 imp., pos. 32.6) y `www.easychoose.es/mejor-portatil-estudiantes/` (1 imp., pos. 50). Es la misma página compitiendo consigo misma. **Consolidar en una sola URL canónica** concentra la autoridad y mejora la posición.

### Entregables del bloque 1
- [ ] Un único dominio canónico configurado a nivel servidor (301 de las demás variantes).
- [ ] 0 soft 404 (resueltos o convertidos en 404 real).
- [ ] Sitemap.xml regenerado solo con URLs 200 canónicas, reenviado en Search Console.
- [ ] `robots.txt` verificado: no bloquea recursos CSS/JS necesarios para renderizar.

---

## 2. ARQUITECTURA DE CONTENIDO — DE 2 PÁGINAS A UN CLÚSTER

Hoy solo rankea **una** pieza de contenido (`mejor-portatil-estudiantes`). Y rankea para **18 variantes** de la misma intención (ver bloque 3). Eso demuestra que el nicho funciona, pero que falta cuerpo.

### 2.1 Modelo pilar + clúster (topic cluster)

Construir alrededor de cada categoría del wizard un **pilar** (guía de decisión amplia) rodeado de **artículos satélite** (decisiones concretas) enlazados entre sí.

**Pilar #1 (ya existe, reforzar): "Mejor portátil para estudiantes"**
Satélites a crear, priorizados por las consultas que ya generan impresiones:
- Mejor portátil para universitarios (carreras de letras/sociología → ver consultas reales)
- Mejor portátil para carreras técnicas/ingeniería
- Mejor portátil barato para estudiar (< X €)
- ¿Chromebook o portátil Windows para estudiar?
- Qué portátil comprar para la universidad (guía por presupuesto)

**Pilares siguientes (uno por categoría del wizard, en este orden de prioridad):**
1. Mejor móvil calidad-precio (mayor volumen de búsqueda en ES, y el móvil es tu dispositivo que MÁS convierte: 21.7% CTR)
2. Mejor tablet para estudiar / para ver series / para niños
3. Mejor portátil para teletrabajo
4. Mejor PC sobremesa por presupuesto
5. Movilidad: mejor patinete eléctrico calidad-precio (cuando el catálogo de afiliados lo soporte)

### 2.2 Reglas de cada pieza de contenido (el agente las aplica SIEMPRE)

1. **Intención de compra explícita en el H1 y primer párrafo.** Nada de "Todo sobre los portátiles". Sí: "El mejor portátil para estudiantes según tu carrera y presupuesto".
2. **Respuesta directa arriba (formato GEO, ver bloque 4).** Los primeros 40-60 palabras deben contener la recomendación resumida — esto sirve tanto para el featured snippet de Google como para que un LLM la cite.
3. **Estructura por intención, no por specs.** Secciones tipo "Si estudias diseño…", "Si tu presupuesto es < 500 €…", no "Procesadores", "Memoria RAM".
4. **Tabla comparativa** con 3-5 opciones, columnas: modelo (tipo genérico, no marca en el encabezado), precio aprox., para quién, enlace afiliado.
5. **CTA al wizard** de la app (`app.easychoose.es`) en cada pieza: "¿Aún dudas? Deja que EasyChoose elija por ti →".
6. **Cumplimiento Ómnibus**: cualquier precio o descuento mostrado usa el precio mínimo real de los últimos 30 días, no PVP inflado.
7. **Disclosure de afiliados** visible (Amazon Associates + Awin) en toda página con enlaces monetizados.

---

## 3. PALABRAS CLAVE REALES — EXPLOTAR LO QUE YA APARECE

Estas son las consultas que **ya** generan impresiones (datos reales, no estimación). Casi todas están en posición 27-78: hay contenido, pero débil. El objetivo es subirlas a top 10.

| Consulta | Impresiones | Posición actual | Acción |
|---|---|---|---|
| portátiles para carreras de letras | 4 | 27.3 | Crear satélite específico. Nadie lo cubre bien → oportunidad. |
| portátiles para universitarios | 3 | 63.3 | Reforzar en pilar + satélite universidad. |
| portátil para la universidad | 3 | 64.7 | Idem. Mismo intent, agrupar. |
| qué portátil comprar para la universidad | 2 | 33.5 | Intent transaccional puro → sección dedicada con tabla y enlaces. |
| mejor portátil para estudiante universitario | 2 | 35.5 | Keyword principal del satélite universidad. |
| portátiles para sociología | 1 | 30 | Long-tail de nicho, bajo esfuerzo, baja competencia. |
| elegir portatil | 1 | 16 | **Está cerca de top 10** — conecta directamente con la propuesta de valor del wizard. Optimizar la home para esta. |
| dime precios | 1 | 11 | Intención de comparación de precios → reforzar tablas de precio. |

**Marca (defensiva):** "easy choose", "choose easy", "easyscho" ya rankean en pos. 1-11. Asegurar que la home y los perfiles de marca (Google Business, redes) refuercen la entidad "EasyChoose" para no perder el branded search.

**Regla para el agente:** NO perseguir keywords genéricas de altísimo volumen ("portátil", "móvil") donde compites contra PcComponentes/El Corte Inglés/Amazon con años de autoridad. Perseguir **long-tail de intención de compra específica** donde la competencia es floja (carreras concretas, presupuestos concretos, perfiles concretos). Es el único terreno ganable a corto plazo.

---

## 4. GEO — OPTIMIZACIÓN PARA MOTORES GENERATIVOS (ChatGPT, Gemini, Perplexity, AI Overviews)

GEO es donde EasyChoose puede ganar terreno **más rápido que en SEO clásico**, porque los LLM premian estructura y respuestas claras por encima de autoridad de dominio acumulada. Reglas concretas:

### 4.1 Formato que los LLM citan
1. **Respuesta extraíble al inicio.** Cada artículo abre con un bloque de 2-3 frases que responde la pregunta de forma autocontenida. Un LLM debe poder copiar ese párrafo y que tenga sentido sin el resto.
2. **Encabezados en forma de pregunta.** `<h2>¿Qué portátil necesito si estudio una carrera de letras?</h2>` — coincide con cómo la gente pregunta a un chatbot.
3. **Listas y tablas claras.** Los modelos extraen y citan mejor datos estructurados que prosa larga.
4. **Datos concretos y verificables**: rangos de precio, cifras de RAM/batería, "para presupuestos de 400-600 €". Lo concreto se cita; lo vago se ignora.
5. **Fecha de actualización visible** ("Actualizado: junio 2026") y mantenerla fresca. Los LLM y AI Overviews favorecen contenido reciente para consultas de producto.

### 4.2 Datos estructurados (Schema.org) — el agente los implementa
- `Article` / `BlogPosting` en cada guía (con `datePublished`, `dateModified`, `author`).
- `FAQPage` con las preguntas reales del bloque 3 como `Question`/`Answer`.
- `ItemList` / `Product` en las tablas comparativas (nombre, precio, oferta) — respetando Ómnibus en el campo precio.
- `Organization` con logo, sameAs (perfiles sociales) y `BreadcrumbList` en todo el sitio.
- `WebSite` con `SearchAction` (sitelinks searchbox).

### 4.3 Entidad y autoridad para GEO
- Definir claramente **qué es EasyChoose** en una página "Quiénes somos / Cómo funciona" con lenguaje que un LLM pueda parafrasear: "EasyChoose es un comparador español de electrónica con IA que recomienda el producto concreto según el perfil y presupuesto del usuario."
- Mantener consistencia de la entidad en todo el sitio (mismo nombre, misma descripción, mismos datos de contacto) → ayuda al *entity recognition* de los modelos.
- Conseguir menciones en sitios que los LLM rastrean (directorios de herramientas IA, listados de comparadores). Una mención en una fuente que el modelo ya indexa vale más que diez backlinks de baja calidad.
- **No permitir** que `robots.txt` ni meta-tags bloqueen a los crawlers de IA (GPTBot, Google-Extended, PerplexityBot, ClaudeBot) si el objetivo es aparecer en sus respuestas. Decisión consciente: para GEO, **permitirlos**.

---

## 5. PRIORIDADES POR DISPOSITIVO Y GEOGRAFÍA (datos reales)

### 5.1 Móvil primero — no es opinión, es el dato
Móvil convierte a 21.7% CTR; ordenador a 2.2%. El agente DEBE:
- Verificar Core Web Vitals en móvil (LCP, CLS, INP) como prioridad sobre desktop.
- Diseño mobile-first en las guías: tablas que no rompan, CTAs táctiles grandes, texto legible sin zoom.
- El wizard de la app ya es el destino; asegurar que el salto web→app sea fluido en móvil.

### 5.2 España primero, pero ojo a LatAm
- España: 52 imp. / 5 clics → mercado principal, todo el contenido en español de España.
- Argentina (1 clic, pos 1.3), Colombia, México implícito: hay demanda en LatAm con **competencia local más floja**. 
- **Decisión a tomar** (marcar para Rubén, no ejecutar sin confirmación): si se quiere captar LatAm, evitar precios en € dentro del texto (usar rangos o "consulta precio"), porque rompe la utilidad para esos países. Por ahora **mantener foco España**; registrar LatAm como oportunidad futura, no como acción inmediata.

---

## 6. ENLAZADO INTERNO Y AUTORIDAD

1. **Enlazar cada satélite al pilar y viceversa** (clúster cerrado). Esto distribuye autoridad y ayuda a Google a entender la estructura temática.
2. **La home enlaza a los pilares** con anchor text descriptivo ("guía para elegir portátil de estudiante"), no "haz clic aquí".
3. **Cada guía enlaza al wizard de la app** como destino de conversión.
4. Backlinks: priorizar **calidad sobre cantidad**. Para un sitio nuevo, 5 enlaces de medios tech españoles o blogs de nicho valen más que 50 de directorios. Estrategia inicial: contenido tan útil/específico (ej. "portátiles para sociología") que blogs de nicho enlacen de forma natural.

---

## 7. ORDEN DE EJECUCIÓN (roadmap del agente)

**Fase 1 — Saneamiento (semana 1):** Bloque 1 completo. Sin esto, lo demás rinde menos.

**Fase 2 — Consolidar lo que rankea (semanas 2-3):**
- Reforzar `mejor-portatil-estudiantes` con estructura GEO (bloque 4) y schema.
- Crear satélites de las consultas reales del bloque 3 (empezar por "carreras de letras" y "universidad", que tienen más impresiones).
- Optimizar home para "elegir portátil" (pos. 16, casi top 10).

**Fase 3 — Expandir al embudo móvil (semanas 4-6):**
- Pilar "mejor móvil calidad-precio" (móvil convierte mejor).
- FAQPage + ItemList schema en todo lo nuevo.

**Fase 4 — Resto de categorías del wizard (continuo):**
- Tablets, sobremesa, teletrabajo, movilidad — un pilar por sprint.

**Métrica de éxito a 90 días:** pasar de 69 a 500+ impresiones/mes, subir las 8 consultas reales del bloque 3 a top 15, y conseguir la primera cita en una respuesta de IA (verificable preguntando a ChatGPT/Gemini "mejor portátil para estudiantes carrera de letras" y viendo si aparece EasyChoose).

---

## 8. LO QUE EL AGENTE NO DEBE HACER

- ❌ Crear contenido educativo abstracto ("qué es un procesador") que no ayude a decidir una compra.
- ❌ Perseguir keywords genéricas de cabeza donde compite con Amazon/PcComponentes.
- ❌ Mencionar marca/modelo en encabezados de las tablas si eso choca con la regla interna de EasyChoose; usar tipo genérico en la estructura y dejar la marca para la fila de recomendación con enlace afiliado.
- ❌ Inflar precios o ignorar la Directiva Ómnibus en cualquier dato de precio.
- ❌ Bloquear crawlers de IA si el objetivo es GEO.
- ❌ Generar páginas duplicadas www/no-www (causa raíz de los problemas actuales de canónica).
- ❌ Sacrificar rendimiento móvil por features de desktop.
