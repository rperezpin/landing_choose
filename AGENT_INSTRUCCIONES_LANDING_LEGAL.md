# AGENT_INSTRUCCIONES_LANDING_LEGAL

**Proyecto:** EasyChoose (easychoose.es / app.easychoose.es)
**Stack:** Astro v6.4.8
**Fecha de auditoría:** 13 de julio de 2026
**Fuentes:** Google Search Console (abr–jul 2026), inspección de easychoose.es, /aviso-legal/, /politica-de-privacidad/, /quienes-somos/, /metodologia-puntuacion/

---

## 0. Resumen ejecutivo — orden de prioridad

| # | Bloque | Riesgo | Plazo |
|---|--------|--------|-------|
| 1 | Falta la declaración obligatoria de Afiliado de Amazon | **Cierre de cuenta de afiliado** | HOY |
| 2 | Precios estáticos con fecha ("22 de junio de 2026") | **Incumplimiento del Acuerdo Operativo de Amazon** | HOY |
| 3 | Política de privacidad con placeholder "choose" y plantilla de Shopify | Sanción AEPD / RGPD | 48 h |
| 4 | Aviso legal sin NIF ni domicilio (LSSI-CE art. 10) | Sanción LSSI | 48 h |
| 5 | Google Tag Manager carga antes del consentimiento | Sanción AEPD | 1 semana |
| 6 | Proveedores de afiliación inconsistentes entre 3 páginas | Credibilidad + legal | 1 semana |
| 7 | Conflicto canónico www / no-www | SEO | 1 semana |
| 8 | Optimización de landing y GEO | Crecimiento | 2–4 semanas |

---

# PARTE 1 — CUMPLIMIENTO LEGAL

## 1.1 CRÍTICO: falta la declaración de Afiliado de Amazon

**Estado actual:** la frase obligatoria **no aparece en ninguna parte del sitio**. Ni en la home, ni en el aviso legal, ni en la metodología, ni en las guías.

El Acuerdo Operativo del Programa de Afiliados de Amazon (Cláusula 5, *Identificación como Afiliado*) exige que esta declaración aparezca **de forma clara y prominente**. No es una recomendación: es condición de permanencia en el programa. Un incumplimiento detectado puede suponer la retención de comisiones y el cierre de la cuenta (`easychoose-21`).

**Texto exacto a usar (no lo parafrasees, no lo traduzcas, no lo resumas):**

```
En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.
```

**Dónde colocarlo (los cuatro sitios, no elijas):**

1. **Footer global** del sitio (`Footer.astro` o equivalente) — visible en todas las páginas, incluida `app.easychoose.es`. Tamaño legible, no `font-size: 10px` escondido.
2. **Aviso legal**, sección 5 (Enlaces de Afiliado), como primera línea del bloque.
3. **Metodología de puntuación**, en la sección "Política de afiliados".
4. **Página de resultados del asistente** (`app.easychoose.es`), justo encima o debajo del bloque de productos recomendados. Amazon indica explícitamente que la buena práctica es tenerlo **en la misma página que el enlace de afiliado**. Aquí es donde más importa.

**Nota sobre el disclaimer ampliado.** Algunos afiliados españoles añaden: *"...según las condiciones establecidas por Amazon para afiliados"*. Es una variante aceptada, pero **la frase mínima obligatoria es la de arriba**. Usa esa literal y no la modifiques.

---

## 1.2 CRÍTICO: precios y el badge "Precios actualizados: 22 de junio de 2026"

**Estado actual:** la home muestra un badge con fecha de precios de hace tres semanas. La página de metodología dice *"Los precios mostrados son orientativos y pueden variar"*.

**Dos problemas:**

**(a) Incumplimiento de Amazon.** El Acuerdo Operativo prohíbe mostrar precios, ofertas o descuentos de productos de Amazon salvo que se obtengan **en tiempo real** vía API oficial. Actualmente no tienes acceso a la Creators API (la PA-API fue retirada el 15 de mayo de 2026 y el nuevo umbral es 10 ventas cualificadas en los últimos 30 días). Mientras no tengas API:

- **NO muestres precios numéricos de productos de Amazon.**
- Sustituye el precio por un CTA: `Ver precio actual en Amazon →`
- Los rangos por categoría de la home (`€300 – €2.500`) **sí son válidos**: son rangos de mercado orientativos, no precios de producto concretos. Puedes mantenerlos.

**(b) El badge de fecha es un pasivo.** Un badge que dice "actualizados hace 3 semanas" comunica lo contrario de lo que pretende. Genera desconfianza y, si el precio real ha cambiado, es publicidad engañosa (RDL 1/2007, Ley de Competencia Desleal).

**Acción:**
- **Elimina el badge de fecha de la home.**
- Si en algún punto muestras precios de merchants de Awin (PcComponentes, isinwheel), esos **sí** pueden mostrarse porque tienes feed con precio real. Ahí, marca la fecha/hora de obtención junto al precio.
- **Directiva Ómnibus:** si muestras cualquier descuento o "antes/ahora", el precio tachado debe ser el **precio mínimo de los últimos 30 días**, no el PVPR inflado. Nunca uses el % de descuento que muestra Amazon: casi siempre se calcula sobre PVPR, no sobre el mínimo de 30 días.

---

## 1.3 Política de privacidad — reescritura completa obligatoria

**Estado actual: es una plantilla de Shopify sin adaptar.** Evidencias:

- Sección 1 dice literalmente: *"...cuando visita el sitio web **choose**"* ← **placeholder sin sustituir**
- Habla de *"nuestros clientes"* y de *"cuando usted rellena un formulario"* — EasyChoose no tiene clientes ni formularios
- Menciona "Google Analytics" pero el sitio carga **Google Tag Manager** (GTM-WKHGW4FH)
- **No identifica al Responsable del Tratamiento** con NIF ni domicilio
- **No indica la base jurídica** de cada tratamiento (art. 6 RGPD)
- **No indica plazos de conservación** concretos
- **No menciona el derecho a reclamar ante la AEPD**
- **No menciona transferencias internacionales** (Google → EE. UU.)
- **No menciona el tratamiento por IA** (las respuestas del wizard se envían a Google Gemini)

Esto último es importante y es específico de tu caso: **el usuario introduce datos en el wizard que se envían a un tercero (Google Gemini) para generar la recomendación.** Eso es una comunicación de datos a un encargado del tratamiento y hay que declararla.

### Texto de sustitución completo

```markdown
# Política de Privacidad

Última actualización: [FECHA]

## 1. Responsable del tratamiento

- **Titular:** Rubén Pérez [APELLIDO2] (rpidev)
- **NIF:** [INSERTAR NIF — OBLIGATORIO]
- **Domicilio:** [INSERTAR DOMICILIO FISCAL — OBLIGATORIO]
- **Email:** info@rpidev.com
- **Sitio web:** https://easychoose.es

## 2. Qué datos tratamos y con qué base jurídica

**2.1. Datos de navegación (analítica)**
Recogemos dirección IP (anonimizada), tipo de navegador y dispositivo, páginas visitadas, origen del tráfico y eventos de interacción, mediante Google Tag Manager y Google Analytics 4.
- *Finalidad:* medir el uso del sitio y mejorar el servicio.
- *Base jurídica:* tu consentimiento (art. 6.1.a RGPD), recabado mediante el banner de cookies.
- *Conservación:* 14 meses.

**2.2. Respuestas al asistente de recomendación**
Cuando usas el asistente, introduces información sobre uso previsto, presupuesto y preferencias. Estos datos se procesan para generar la recomendación.
- *Finalidad:* prestar el servicio de recomendación solicitado.
- *Base jurídica:* ejecución de la relación a petición del interesado (art. 6.1.b RGPD).
- *Conservación:* las respuestas no se asocian a una cuenta ni a una identidad. Se conservan de forma agregada y anonimizada para mejorar el sistema.
- *No solicitamos ni necesitamos datos identificativos.* No pidas registro, nombre, email ni teléfono para usar el asistente.

**2.3. Consultas por email**
- *Finalidad:* atender tu consulta.
- *Base jurídica:* consentimiento / interés legítimo.
- *Conservación:* 1 año desde la última comunicación.

## 3. Uso de inteligencia artificial

EasyChoose utiliza un modelo de inteligencia artificial generativa (Google Gemini, de Google Ireland Limited) para dos funciones: puntuar la adecuación de los productos a tu contexto y responder tus preguntas en el chat.

**Estás interactuando con un sistema de inteligencia artificial, no con una persona.** Las respuestas del chat se generan automáticamente y pueden contener errores. No sustituyen el asesoramiento de un profesional ni las especificaciones oficiales del fabricante.

Las respuestas que introduces en el asistente se transmiten a Google como encargado del tratamiento para generar la recomendación. No se utilizan para entrenar modelos de terceros.

## 4. Destinatarios de los datos

| Destinatario | Finalidad | Garantías |
|---|---|---|
| Google Ireland Ltd. (GA4, GTM, Gemini) | Analítica y generación de recomendaciones | Cláusulas Contractuales Tipo + Data Privacy Framework |
| Amazon Services Europe S.à r.l. | Afiliación | Solo si haces clic en un enlace saliente |
| Awin AG / merchants asociados | Afiliación | Solo si haces clic en un enlace saliente |
| [Proveedor de hosting] | Alojamiento | Encargado del tratamiento |

Cuando haces clic en un enlace de afiliado, abandonas EasyChoose y pasas a la web del comercio, que aplicará su propia política de privacidad y sus propias cookies. EasyChoose no controla ni almacena los datos que dichos comercios recojan en sus plataformas.

## 5. Transferencias internacionales

Algunos proveedores (Google) pueden tratar datos fuera del Espacio Económico Europeo. Dichas transferencias se amparan en Cláusulas Contractuales Tipo aprobadas por la Comisión Europea y/o en la Decisión de Adecuación del EU–US Data Privacy Framework.

## 6. Tus derechos

Puedes ejercer los derechos de **acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad**, así como retirar tu consentimiento en cualquier momento, escribiendo a **info@rpidev.com** e indicando el derecho que deseas ejercer.

Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la **Agencia Española de Protección de Datos (AEPD)**, C/ Jorge Juan 6, 28001 Madrid — [www.aepd.es](https://www.aepd.es).

## 7. Menores

EasyChoose no está dirigido a menores de 14 años y no recoge conscientemente datos de menores de esa edad.

## 8. Cambios en esta política

Cualquier modificación se publicará en esta misma página con su fecha de actualización.
```

**Datos que faltan y que solo tú puedes rellenar:**
- NIF/DNI del titular → **obligatorio por LSSI-CE**
- Domicilio → **obligatorio por LSSI-CE**
- Nombre del proveedor de hosting

---

## 1.4 Aviso legal — correcciones

**Estado actual:** sección 1 solo tiene `Titular: rpidev (Rubén Pérez)`, `Email`, `Sitio Web`.

El artículo 10 de la LSSI-CE exige, como mínimo:
- Nombre o denominación social **completa**
- **NIF** ← falta
- **Domicilio** o dirección de establecimiento permanente ← falta
- Email y otro medio de contacto directo ✅ (tienes email)
- Datos de inscripción registral, si aplica
- Códigos de conducta a los que esté adherido, si aplica

**Sustituye la sección 1 por:**

```markdown
## 1. Información General

En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de
Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE),
se facilitan los siguientes datos:

- **Titular:** Rubén Pérez [APELLIDO2], que opera bajo la marca comercial rpidev
- **NIF:** [INSERTAR]
- **Domicilio:** [INSERTAR]
- **Email de contacto:** info@rpidev.com
- **Sitio web:** https://easychoose.es/
- **Actividad:** servicio gratuito de recomendación de productos tecnológicos
  financiado mediante enlaces de afiliación
```

**Y sustituye la sección 5 (Enlaces de Afiliado) por:**

```markdown
## 5. Enlaces de Afiliado y Modelo de Negocio

**En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas
que cumplen los requisitos aplicables.**

EasyChoose participa en los siguientes programas de afiliación:

- **Amazon Associates** (Amazon Europe Core S.à r.l.) — Store ID: easychoose-21
- **Awin** (Awin AG) y los comercios adheridos a su red
- [Añadir aquí SOLO los programas realmente activos y firmados]

Cuando haces clic en un enlace de producto y realizas una compra, EasyChoose
puede recibir una comisión **sin coste adicional alguno para ti**. Estos ingresos
financian el servicio gratuito de recomendación.

**La existencia de una relación de afiliación no influye en el orden ni en la
selección de los productos recomendados.** Los productos se puntúan según los
criterios publicados en la [metodología de puntuación](/metodologia-puntuacion/).
Si el producto más adecuado para tu caso está en un comercio sin acuerdo de
afiliación, EasyChoose lo recomendará igualmente.

**Sobre los precios:** los precios y la disponibilidad de los productos son
fijados por cada comercio y pueden variar en cualquier momento. EasyChoose no
garantiza el precio final de compra. Consulta siempre el precio vigente en la
web del comercio antes de completar la transacción.
```

## 1.5 CRÍTICO: proveedores de afiliación inconsistentes

Ahora mismo el sitio dice tres cosas distintas:

| Página | Proveedores declarados |
|---|---|
| `/aviso-legal/` | Amazon, PcComponentes, AliExpress, Miravia |
| `/metodologia-puntuacion/` | Amazon, PcComponentes, AliExpress, Miravia |
| `/quienes-somos/` | Amazon Associates, **Awin** u otros |

**Problema:** declarar programas de afiliación con los que no tienes acuerdo firmado es una manifestación comercial falsa. Y omitir Awin (que es tu red principal) es un incumplimiento de la obligación de divulgación.

**Acción:** define **una única lista canónica** de los programas realmente activos y replícala idéntica en las tres páginas. Si PcComponentes/AliExpress/Miravia son en realidad merchants dentro de Awin, decláralos así:

```
- Amazon Associates (directo)
- Awin, y a través de esta red los comercios: PcComponentes, isinwheel, [etc.]
```

**Regla:** si mañana das de alta un merchant nuevo, se actualiza esta lista. Considera extraer la lista a un único fichero de datos (`src/data/afiliados.json`) que las tres páginas importen, para que sea imposible que se desincronicen.

---

## 1.6 Banner de cookies — dos incumplimientos

**Estado actual:**
- Botones: `Solo necesarias` / `Aceptar todas`
- **El `<noscript>` de GTM aparece en el HTML servido**, lo que sugiere que **GTM se carga antes de que el usuario consienta**

**Problema 1 — carga previa al consentimiento.** Esto es la infracción más común y la más sancionada por la AEPD. Ninguna cookie no esencial ni ningún script de terceros puede ejecutarse antes de que el usuario pulse "Aceptar".

**Acción:**
- Implementa **Google Consent Mode v2** con estado por defecto denegado:
  ```javascript
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });
  ```
- Solo tras el clic en "Aceptar todas" se ejecuta `gtag('consent', 'update', {...: 'granted'})`.
- Esto es **también un requisito de Google Ads**: sin Consent Mode v2, las conversiones del EEE no se registran correctamente. Como acabas de lanzar campaña, esto te afecta directamente.

**Problema 2 — equivalencia de botones.** La AEPD exige que rechazar sea **tan fácil como aceptar**, en el mismo nivel y con el mismo peso visual. `Solo necesarias` es aceptable como equivalente a rechazar, **siempre que tenga el mismo tamaño, color de contraste y prominencia que `Aceptar todas`**. Verifica que no sea un enlace gris junto a un botón de color. Si lo es, iguálalos.

**Añade además:** un enlace permanente en el footer tipo "Configurar cookies" que permita **retirar el consentimiento** en cualquier momento. Es obligatorio y ahora no existe.

---

## 1.7 Reglamento Europeo de IA (UE 2024/1689) — art. 50

EasyChoose es un sistema conversacional de IA dirigido a consumidores. El art. 50 exige informar de forma clara de que el usuario **está interactuando con un sistema de IA**.

**Acción:**
- En la **primera pantalla del chat** de `app.easychoose.es`, añade un aviso visible:
  > *Estás hablando con un asistente de IA. Las respuestas se generan automáticamente y pueden contener errores. Verifica siempre las especificaciones en la web del fabricante antes de comprar.*
- No lo escondas en un tooltip. Debe verse sin interacción.
- Esto ya está parcialmente cubierto en la nueva política de privacidad (sección 3), pero **el aviso in-situ es el que cumple el art. 50**.

---

# PARTE 2 — ¿SON NECESARIAS "QUIÉNES SOMOS" Y "METODOLOGÍA"?

**Sí. Rotundamente. Son de las páginas más valiosas que tienes, y por cuatro razones distintas.**

### 2.1 Google Ads te puede tumbar la campaña sin ellas

La política de destino de Google Ads prohíbe los *thin affiliate sites*: sitios cuyo propósito principal es redirigir a otro comercio sin aportar valor original. La sanción es la desaprobación del anuncio, y en casos reiterados la suspensión de la cuenta.

Tus dos activos de defensa son **el wizard** (herramienta funcional original) y **la página de metodología** (contenido original que explica un sistema propio). Sin ellas, EasyChoose es indistinguible de una web de enlaces. **No las toques. Ambas son tu escudo.**

### 2.2 E-E-A-T de Google

Recomendar compras de 300–2.500 € es contenido de riesgo financiero moderado. Google evalúa Experiencia, Pericia, Autoridad y Confianza. Las señales que reconoce son exactamente: **autor identificado con nombre real, credenciales verificables, metodología publicada, y modelo de negocio declarado**. Tienes las cuatro. Es raro y es una ventaja.

**Mejora que sí toca hacer:** el enlace a LinkedIn y rpidev.com en "Quiénes somos" es bueno. Añade además `sameAs` en el Schema.org de la organización apuntando a esos perfiles.

### 2.3 GEO — la razón menos obvia y la más importante

En tu Search Console hay una consulta reveladora:

> *"soy periodista y necesito un portátil ultraligero que no pese en la mochila, tenga buena cámara para videollamadas en remoto y batería para todo el día. ¿cuál destaca?"*
> **Posición media: 9,5**

Eso no lo teclea un humano en Google. Es una **consulta generada por un motor de respuesta con IA** (ChatGPT Search, Perplexity, AI Overviews) descomponiendo la pregunta de un usuario. Y estás apareciendo en **posición 9,5** para ella, mientras que en tus keywords "normales" estás en posición 30-50.

**Esa es tu señal más valiosa del informe entero.** Los motores de IA citan preferentemente fuentes con: metodología explícita, autoría identificada, y declaración de conflictos de interés. Tus páginas de metodología y quiénes somos son literalmente lo que hace que un LLM te considere citable.

**Acción:** no solo las mantienes — las refuerzas (ver Parte 4).

### 2.4 Aprobación en redes de afiliación

Awin, y en general los merchants directos, revisan manualmente el sitio antes de aprobar. Una web sin "quiénes somos", sin metodología y sin disclosure es rechazo casi automático. Como quieres ampliar Movilidad hasta el mínimo de 5 marcas, esto importa.

**Veredicto: mantener ambas. Y añadir una tercera** (ver 4.4).

---

# PARTE 3 — SEO: LO QUE DICEN TUS DATOS

## 3.1 Diagnóstico

**Últimos 3 meses: 8 clics, 374 impresiones, posición media ~30.**

Estás en la página 3-4 de Google. El problema **no es el CTR ni la conversión** — es que no rankeas. Con posición 30, el CTR esperado es <0,5%; el tuyo (2,37% en España) está por encima de lo normal. Tu copy funciona. Lo que falta es autoridad y posición.

## 3.2 Conflicto canónico www / no-www — arréglalo hoy

En el informe de Páginas aparecen **dos URLs distintas** para la misma guía:

| URL | Impresiones | Posición |
|---|---|---|
| `https://easychoose.es/mejor-portatil-estudiantes/` | 134 | 27,24 |
| `https://www.easychoose.es/mejor-portatil-estudiantes/` | 1 | 50 |

Google está viendo **dos sitios**. Estás partiendo tu autoridad por la mitad.

**Acción:**
1. Redirección **301 permanente** de `www.easychoose.es/*` → `easychoose.es/*` a nivel de servidor/DNS (Netlify/Vercel/Cloudflare, según tu hosting).
2. Verifica que **todas** las etiquetas `<link rel="canonical">` apuntan a la versión sin `www`. La home ya lo hace correctamente (`canonical: https://easychoose.es/`), pero comprueba las guías.
3. En Search Console, asegúrate de que la propiedad es de **dominio** (no de prefijo de URL), para que consolide ambas.

## 3.3 Prioridad absoluta: el cluster de portátiles universitarios

Es tu único cluster con tracción real:

| Página | Impresiones | Posición | Clics |
|---|---|---|---|
| `/mejor-portatil-estudiantes/` | **134** | 27,24 | 1 |
| `/mejor-patinete-electrico/` | 56 | 35,41 | 0 |
| `/mejor-tablet-calidad-precio/` | 56 | 35,48 | 0 |
| `/mejor-movil-calidad-precio/` | 47 | 28,15 | 1 |
| `/mejor-pc-sobremesa/` | 34 | 20,35 | 1 |
| `/mejor-portatil-teletrabajo/` | 22 | 23,36 | 0 |

Y las consultas que las alimentan, todas en torno a la misma intención:

```
portatil para universidad          (7 impr, pos 39,86)
portatiles para carreras de letras (7 impr, pos 22,14)
portatil universidad               (7 impr, pos 39,86)
portatil para universidad          (6 impr, pos 35)
portátiles para universitarios     (6 impr, pos 61,67)
portátil para la universidad       (6 impr, pos 67)
que portatil comprar para la universidad (4 impr, pos 35,5)
```

**No disperses esfuerzo.** Olvida tablets y móviles durante 8 semanas. Todo el contenido nuevo va a este cluster.

**Estructura de cluster a construir alrededor de `/mejor-portatil-estudiantes/` como pilar:**

| Nueva URL | Consulta objetivo (real, de tu GSC) |
|---|---|
| `/portatil-carreras-letras/` | "portatiles para carreras de letras" (7 impr, pos 22) |
| `/portatil-ingenieria-arquitectura/` | derivada del mismo cluster |
| `/portatil-universidad-menos-600-euros/` | "menos de 600€" (1 impr, pos 5) |
| `/portatil-estudiante-vs-tablet/` | intención comparativa |

Cada una enlaza **hacia arriba** al pilar y **hacia el asistente**. El pilar enlaza hacia abajo a las cuatro. Eso es un topic cluster.

## 3.4 Móvil convierte 3× mejor que escritorio

| Dispositivo | Impresiones | Clics | CTR |
|---|---|---|---|
| Ordenador | 280 | 4 | **1,43 %** |
| Móviles | 93 | 4 | **4,30 %** |

Mismos clics con un tercio de las impresiones. **En móvil tu snippet convence tres veces más.**

Dos implicaciones:
1. **Prioriza Core Web Vitals en móvil.** Si hay algo que optimizar primero, es LCP y CLS en móvil.
2. **El wizard tiene que ser impecable en móvil.** Es donde está tu audiencia real.

## 3.5 Tráfico internacional: ruido, no oportunidad

España: 295 impresiones, 7 clics. Fuera: Estados Unidos (34), Países Bajos (13), Alemania (6), y luego LatAm.

**Argentina: 4 impresiones, 1 clic, CTR 25%, posición 6.** Es el único dato internacional interesante — pero son 4 impresiones. **No es una señal, es ruido estadístico.** No tomes decisiones de expansión a LatAm con esto.

**Acción:** ninguna. No hagas hreflang, no adaptes precios, no crees versiones regionales. Es prematuro y te distrae del cluster que sí funciona. Revísalo cuando tengas 500+ impresiones desde LatAm.

## 3.6 GEO — optimización para motores de respuesta con IA

Ya rankeas en posición 9,5 para una consulta conversacional larga (ver 2.3). Explota eso.

**Qué hacen los motores de IA (AI Overviews, ChatGPT Search, Perplexity) al elegir fuentes:**
- Prefieren páginas que **responden la pregunta en las primeras 2-3 frases** bajo un encabezado que es la propia pregunta
- Prefieren **datos concretos y verificables** ("autonomía mínima de 8 horas, peso inferior a 1,5 kg") sobre prosa vaga
- Prefieren fuentes con **metodología y autoría declaradas**
- Citan **listas y tablas** con más frecuencia que párrafos

**Acciones concretas:**

1. **Añade Schema.org que ahora no tienes o no es completo:**
   - `FAQPage` en la home (tu bloque FAQ ya existe, márcalo)
   - `HowTo` en la sección "Cómo funciona" (4 pasos, encaja perfecto)
   - `Organization` con `sameAs` → LinkedIn, rpidev.com
   - `Person` (Rubén Pérez) como `author` de las guías
   - `SoftwareApplication` para el asistente

2. **Reescribe los H2 de las guías como preguntas literales.** Ya lo haces bien en la home ("¿Qué portátil comprar para estudiar o trabajar?"). Replícalo en las guías.

3. **Bloque de respuesta directa.** Debajo de cada H2-pregunta, la primera frase debe ser la respuesta completa, autocontenida, citable sin contexto. Ejemplo de lo que ya tienes y funciona:
   > *"Para estudiar, busca autonomía mínima de 8 horas, peso inferior a 1,5 kg y pantalla de al menos 14 pulgadas."*

   Eso es exactamente lo que un LLM extrae y cita. Más de eso.

4. **Añade una sección de "criterios y umbrales" con números** en cada guía. Los LLMs citan cifras, no adjetivos.

5. **`llms.txt`** en la raíz del dominio. Es un estándar emergente, cuesta 10 minutos, y no tiene contrapartida negativa.

---

# PARTE 4 — LANDING: MEJORAS CONCRETAS

## 4.1 Elimina los emojis de los encabezados

La landing usa ⚡🛍️🤖🧠🧭🎁😩⏳💸🎯💰🔍 como iconos de sección. Problemas:
- Se leen como plantilla genérica de landing page
- Los lectores de pantalla los verbalizan ("emoji de cara agobiada")
- No transmiten profesionalidad en un sitio que pide confianza para gastar 1.000 €

**Sustitúyelos por iconos SVG** (Lucide, Tabler, Heroicons — todos MIT). Cuesta una tarde y sube el listón visual de golpe.

## 4.2 Arregla el Title Case y el copy hueco

- **"Velocidad Extrema"** → Title Case en español se lee como spam. Y además no dice nada: ¿extrema respecto a qué? Sustitúyelo por algo medible: **"Recomendación en menos de 2 minutos"**.
- **"Catálogo Inteligente"** → **"Catálogo actualizado del mercado español"**
- **"Asistente IA Dedicado"** → **"Chat para tu última duda"**

Regla general: **sentence case siempre en español**, y cada titular debe contener un hecho, no un adjetivo.

## 4.3 El H1 puede trabajar más

**Actual:** *"Qué portátil, móvil o tablet comprar sin perder horas comparando"*

Está bien, pero no contiene tu keyword de mayor volumen probado. Tu cluster real es **universidad/estudiantes**.

**Opción:** mantener el H1 genérico en la home (correcto, es la home) pero asegurar que `/mejor-portatil-estudiantes/` tiene un H1 exacto tipo:

> *"Qué portátil comprar para la universidad en 2026"*

Y que su `<title>` es: `Qué portátil comprar para la universidad (2026) | EasyChoose` — con la keyword al principio, no al final.

## 4.4 Crea `/como-ganamos-dinero/`

Suena contraintuitivo, pero es una de las páginas con mejor retorno para un sitio de afiliación:

- Es **señal de confianza de primer orden** para Google (E-E-A-T) y para los LLMs
- Es la página que Awin y los merchants miran al aprobarte
- Refuerza tu posicionamiento de marca ("el amigo que sabe de tecnología" — un amigo te dice cómo se gana la vida)
- Es donde colocas la declaración de Amazon en su contexto natural

Contenido: qué es un enlace de afiliado, cuánto se cobra aproximadamente (porcentajes por categoría), por qué eso no altera el orden de las recomendaciones, y qué haces cuando el mejor producto está en una tienda sin acuerdo.

## 4.5 Falta un enlace directo de la home al catálogo

Acabas de añadir un catálogo con todos los productos de base de datos y **no aparece en la navegación ni en el footer**. Añádelo — pero:

**Advertencia:** el catálogo es tu página con más riesgo de ser clasificada como *thin affiliate* por Google Ads. **Nunca lo uses como URL de destino de los anuncios.** Los anuncios van al wizard. El catálogo es navegación secundaria para usuarios que ya están dentro.

## 4.6 Añade señales de actualización reales

Sustituye el badge de fecha de precios (que hay que quitar) por algo que sí puedas mantener honestamente:

> *Catálogo revisado mensualmente · Última revisión: [mes]*

Y añade `dateModified` en el Schema.org de las guías. Google y los LLMs lo usan para decidir frescura.

---

# PARTE 5 — CHECKLIST DE EJECUCIÓN

## Hoy (bloquea todo lo demás)
- [ ] Añadir la declaración de Afiliado de Amazon en footer + aviso legal + metodología + página de resultados del wizard
- [ ] Eliminar el badge "Precios actualizados: 22 de junio de 2026"
- [ ] Eliminar cualquier precio numérico de producto de Amazon; sustituir por "Ver precio actual en Amazon →"

## Esta semana
- [ ] Reescribir política de privacidad completa (texto en 1.3)
- [ ] Añadir NIF y domicilio al aviso legal (1.4)
- [ ] Unificar la lista de proveedores de afiliación en las 3 páginas (1.5)
- [ ] Redirección 301 www → no-www (3.2)
- [ ] Implementar Consent Mode v2 (1.6) — **también lo necesita tu campaña de Google Ads**
- [ ] Aviso de "estás hablando con una IA" en el wizard (1.7)
- [ ] Enlace "Configurar cookies" en el footer

## Semanas 2-4
- [ ] Schema.org: FAQPage, HowTo, Organization+sameAs, Person, SoftwareApplication
- [ ] Sustituir emojis por SVG
- [ ] Corregir Title Case y copy hueco (4.2)
- [ ] Reescribir title/H1 de `/mejor-portatil-estudiantes/`
- [ ] Crear `/como-ganamos-dinero/`
- [ ] Publicar `/portatil-carreras-letras/` (primera hija del cluster)
- [ ] `llms.txt`

## Semanas 5-8
- [ ] Completar el cluster de portátil universidad (3 páginas restantes)
- [ ] Core Web Vitals en móvil
- [ ] Enlazado interno pilar ↔ hijas ↔ wizard

---

## Aviso

Este documento identifica riesgos legales pero **no es asesoramiento jurídico**. Las plantillas de aviso legal y política de privacidad son un punto de partida sólido, no un sustituto de una revisión profesional. Para un proyecto que va a escalar tráfico pagado y afiliación, considera una revisión de un abogado especializado en LSSI/RGPD — cuesta bastante menos que una sanción de la AEPD o el cierre de la cuenta de Amazon.
