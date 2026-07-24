# OPTIMIZACIÓN DE EASYCHOOSE.ES — Categoría Movilidad Eléctrica

Basado en el sitio real (Astro, tema `#6C63FF`, asistente IA con Gemini, afiliación ya activa con isinwheel y Miravia vía Awin, más Amazon Associates). Todo lo que sigue se integra en la estructura y el tono que ya existe — no es un rediseño.

---

## 0. Antes de nada: reparto de papeles entre tus dos proyectos

Tienes el proyecto dedicado a homologación (patinetelegal.es o el nombre que elijas) y ahora quieres que EasyChoose también capture tráfico del mismo tema. Mismo propietario, mismo tema, dos dominios: si el contenido es casi idéntico, Google puede tratarlo como contenido duplicado o como una red de sitios manipulada, y termina penalizando o filtrando uno de los dos en vez de dejarte rankear ambos.

**Reparto de papeles, para que no compitan entre sí:**

| | Proyecto dedicado (patinetelegal.es o similar) | EasyChoose |
|---|---|---|
| **Rol** | Autoridad de datos: el listado completo, el verificador exhaustivo, los descodificadores | Capa de decisión: "dado que necesitas uno homologado, ¿cuál encaja contigo" |
| **Profundidad** | 386 modelos, códigos DGT, metodología, ordenanzas por ciudad | Solo lo necesario para completar la compra dentro del asistente |
| **Intención de la keyword** | "¿está homologado mi patinete?", "código VMP", "qué hacer si no está homologado" | "qué patinete comprar", "mejor patinete calidad-precio", que es exactamente lo que EasyChoose ya rankea |

**Instrucción concreta:** EasyChoose **no** debe publicar el listado completo de 386 modelos ni los descodificadores de códigos. Eso ya lo tienes en el proyecto dedicado. Aquí solo se usa el dato para **filtrar el catálogo del asistente** y para **una sección corta de la página ya existente**, con un enlace de autoridad hacia el proyecto dedicado para quien quiera el detalle completo. Enlace editorial natural, con texto descriptivo, nunca como granja de enlaces.

---

## 1. Lo urgente: auditar y limpiar el catálogo del asistente

Esto es más importante que cualquier contenido nuevo, y es la parte que mencionas de "eliminar los patinetes no homologados".

### El riesgo real

`metodologia-puntuacion.html` dice literalmente: *"la calidad de la recomendación es prioritaria sobre la monetización"*. Si el asistente recomienda hoy un patinete que no está en el listado oficial de la DGT — o peor, la versión no certificada de un modelo que sí existe certificado, como pasa con el iX7Pro de iScooter — EasyChoose está incumpliendo su propia promesa de neutralidad y exponiendo al usuario a comprar algo que no podrá usar legalmente desde el 22 de enero de 2027.

### Proceso de auditoría

1. **Exportar el catálogo actual** de la categoría "Movilidad eléctrica" de `app.easychoose.es` (marca + modelo + variante).
2. **Cruzarlo contra `02-vmp-certificados.json`** (el listado oficial de la DGT, 386 modelos, actualizado 16/07/2026 — documento que ya tienes del otro proyecto). Por cada producto del catálogo:
   - Coincide exacto marca + modelo → marcar `homologado: true`, guardar el `certificado_vmp`
   - No aparece → marcar `homologado: false`
   - Marca conocida por tener versiones duplicadas con y sin certificar (**iScooter, Kukirin**) → **verificar la URL exacta**, no el nombre. Ver la advertencia crítica del punto 2.
3. **Decisión sobre los `homologado: false`:**
   - Bicicletas eléctricas y scooters de asiento **no están sujetos a esta normativa** (el Manual VMP solo aplica a patinetes sin asiento y una plaza) → no tocar
   - Patinetes sin certificado → **no eliminarlos del todo**, porque hoy siguen siendo legales de comprar y usar hasta el 22/01/2027. Pero:
     - No deben aparecer en el **top de recomendaciones** sin aviso
     - Deben mostrar una etiqueta clara de su situación (ver punto 3)
     - Si dos productos empatan en la puntuación de uso real, el homologado gana el desempate

### Nuevo campo en el esquema de producto

```json
{
  "categoria": "movilidad-electrica",
  "tipo": "patinete",
  "marca": "iScooter",
  "modelo": "iX7Pro",
  "homologado_dgt": true,
  "certificado_vmp": "C1019",
  "url_producto_verificada": "https://www.iscooterglobal.eu/products/iscooter-patinete-electrico-ix7pro-certificado-vmp-para-espana",
  "fecha_verificacion": "2026-07-23",
  "nota": "Existe una versión del mismo nombre sin certificar (60 km/h, off-road). Enlazar solo esta URL."
}
```

Este campo alimenta tanto el filtro del asistente como la etiqueta visual del punto 3.

---

## 2. ⚠️ La trampa que ya detectamos — aplica igual aquí

iScooter (que **ya es tu afiliado**, según la metodología publicada) vende el mismo modelo en dos versiones con el mismo nombre y el mismo precio: una certificada a 25 km/h y otra sin certificar y más rápida. Pasa con el **iX7Pro**, el **i8M** y el **i9Ultra**.

**Comprobación obligatoria antes de dar por buena cualquier entrada del catálogo de iScooter:** la URL del producto debe contener `homologado-dgt` o `certificado-vmp`. Si no la contiene, es la versión no certificada, aunque el nombre visible sea idéntico.

```
✅ iscooter-i8m-patinete-elctrico-ligero-homologado-dgt
✅ iscooter-i9max-electric-scooter-homologado-dgt
✅ iscooter-patinete-electrico-ix7pro-certificado-vmp-para-espana

❌ iscooter-i8-electric-scooter
❌ iscooter-i9max-electric-scooter   (sin el sufijo homologado-dgt)
❌ iscooter-ix7pro-off-road-electric-scooter
```

Aplica el mismo cuidado a **Kukirin** si está en el catálogo: el G2 (certificado `C1011`) y el G2 Pro (certificado `A1156`) son modelos distintos con certificados distintos, no versiones del mismo producto.

Dado que isinwheel (marca hermana de iScooter) ya te ha subido la comisión al 8% tras una negociación reciente, tiene sentido dar prioridad de catálogo a isinwheel/iScooter frente a otras marcas cuando la puntuación de uso real quede empatada — **pero solo con las URLs verificadas de arriba**, nunca por defecto.

---

## 3. Elemento visual: la etiqueta de homologación

Encaja con el estilo ya existente de la página (iconos + texto corto, tono claro, nada alarmista). Añadir como badge en la tarjeta de resultado del asistente y en cualquier ficha de producto de movilidad:

```
✅ Homologado DGT · Certificado B1096
```
o
```
⏳ Sin certificado DGT · Circula legal hasta el 22/01/2027
```

Sin rojo, sin alarmismo — mismo criterio que ya aplicamos en el proyecto dedicado: quien tiene un patinete sin certificar no está haciendo nada ilegal hoy, solo tiene una fecha límite por delante.

**Frase de apoyo, reutilizable en tooltip o FAQ:**
> «La certificación VMP de la DGT confirma que el patinete podrá seguir circulando después del 22 de enero de 2027. No es obligatoria para circular hoy, pero si vas a comprar ahora, tiene sentido elegir directamente un modelo ya certificado.»

---

## 4. Cambios en la página `/mejor-patinete-electrico/` ya existente

Esta página ya está bien construida y ya rankea razonablemente (formato de guía, FAQ, criterios). No hay que rehacerla: hay que **añadir una capa de legalidad que hoy le falta** y que es justo lo que puede diferenciarla de cualquier otra guía de compra genérica.

### 4.1 Nuevo criterio en el bloque "Qué buscar en un patinete eléctrico"

Ahora mismo el criterio 🛑 "Sistema de frenado doble y certificación" menciona la DGT de pasada. Debería ser su propia tarjeta, con más peso, dado el contexto de 2026-2027:

> 🪪 **Certificado VMP vigente**
> Desde el 22 de enero de 2027 solo podrán circular los patinetes con certificado VMP de la DGT. Si compras ahora, elegir directamente un modelo certificado te evita tener que cambiarlo en menos de dos años. El asistente te muestra qué modelos están certificados dentro de tu presupuesto.

### 4.2 Ampliar la FAQ existente

Ya hay una pregunta («¿Qué patinete eléctrico es legal para circular en España?») que responde de forma genérica. Sustituirla y añadir dos más, en el mismo formato corto que ya usa la página:

**Sustituir:**
> **¿Qué patinete eléctrico es legal para circular en España?**
> Todos los patinetes vendidos hoy en España pueden circular, pero desde el 22 de enero de 2027 solo lo podrán hacer los modelos con certificado VMP de la DGT. Comprarlo ya certificado evita tener que cambiarlo antes de esa fecha. El asistente filtra automáticamente esta información en cada recomendación.

**Añadir:**
> **¿Qué pasa si mi patinete actual no está certificado?**
> Puedes seguir usándolo hasta el 22 de enero de 2027 si lo inscribes en el Registro de Vehículos Personales Ligeros de la DGT. A partir de esa fecha necesitarás un modelo certificado. Si quieres comprobar tu modelo actual, tienes una herramienta de verificación gratuita en [nombre del proyecto dedicado].

> **¿Cómo sé si un patinete concreto está certificado por la DGT?**
> El fabricante debe indicarlo en la ficha del producto y el patinete debe llevar una placa de marcaje remachada en el chasis con el número de certificado. En las recomendaciones de EasyChoose, los modelos certificados llevan la etiqueta ✅ Homologado DGT.

### 4.3 Añadir un mini-verificador (opcional, alto impacto)

Un componente ligero, no la herramienta completa del otro proyecto: un campo de búsqueda que consulte un subconjunto del JSON (solo marca + modelo + certificado, sin todo el aparato de descodificadores) y devuelva sí/no. Encaja bien justo debajo del bloque de criterios, antes del CTA al asistente.

```
¿Ya tienes patinete? Comprueba si está homologado
[ Marca y modelo...           ] [Comprobar]

→ resultado breve, con CTA "Ver alternativas certificadas"
  que lleva al asistente con el filtro homologado_dgt=true
  ya aplicado
```

Esto es lo que de verdad "capta tráfico": es una utilidad gratuita, comparte la keyword con tu proyecto dedicado, y convierte directamente dentro del embudo de EasyChoose sin que el usuario tenga que salir a otro dominio.

---

## 5. Página nueva, ligera: `/patinete-electrico-homologado-dgt/`

Una sola página nueva, con la misma estructura de frontmatter y bloques que ya usa el sitio (mismo patrón visto en `mejor-patinete-electrico`). Su función es captar la keyword de homologación sin duplicar el proyecto dedicado.

```yaml
title: "Patinete eléctrico homologado DGT: qué significa y cómo elegirlo | EasyChoose"
description: "Qué es el certificado VMP de la DGT, por qué importa desde 2027 y cómo elegir un patinete ya homologado según tu presupuesto y trayecto."
keywords: "patinete homologado dgt, patinete certificado vmp, patinete electrico legal, mejor patinete homologado"
```

**Estructura, corta (esto no es el proyecto dedicado, es una capa de entrada):**

1. Respuesta directa: qué es el certificado VMP y la fecha del 22/01/2027
2. Mini-verificador (punto 4.3)
3. 3 recomendaciones por tramo de presupuesto, con la etiqueta ✅ Homologado DGT y enlace al asistente filtrado
4. Enlace de autoridad, editorial, hacia el proyecto dedicado: *"Si quieres consultar el listado oficial completo de la DGT o comprobar un código de certificado como los de Segway o Ninebot, puedes hacerlo en [nombre del proyecto]."*
5. FAQ (3-4 preguntas, reutilizando las del punto 4.2)
6. CTA al asistente

Enlazar esta página nueva desde la tarjeta "Movilidad eléctrica" de la home y desde `/mejor-patinete-electrico/`.

---

## 6. Actualizar la transparencia de afiliados

`metodologia-puntuacion.html` ya menciona isinwheel como proveedor de afiliación vía Awin. Con la subida de comisión al 8% y la incorporación de iScooter EU, hay que:

- Añadir **iScooter EU** a la lista de comercios en `metodologia-puntuacion` y en el aviso legal
- Mantener la frase de neutralidad tal cual está — es correcta y es un activo de confianza real, no hay que tocarla
- Si en algún momento el catálogo prioriza isinwheel/iScooter en un empate, esa regla debe estar descrita aquí también, para que la promesa de neutralidad siga siendo verificable

---

## 7. Métrica para saber si esto funciona

Igual que en el proyecto dedicado: instrumentar el clic con parámetros que incluyan `homologado_dgt` (true/false) y `pagina_origen`. Si los productos homologados no convierten mejor que los no homologados en la categoría movilidad, revisar si la etiqueta y el mensaje de urgencia (sin ser alarmista) están comunicando bien el valor.

Y vigilar en Search Console si la nueva página `/patinete-electrico-homologado-dgt/` empieza a canibalizar el tráfico de `/mejor-patinete-electrico/` en vez de sumar. Si ocurre, hay que diferenciar más el intent de cada una o fusionarlas.

---

## 8. Resumen de tareas

1. **Auditar el catálogo** de movilidad eléctrica contra el JSON oficial de la DGT y etiquetar `homologado_dgt`
2. **Verificar cada URL de iScooter/Kukirin** contra la lista de sufijos válidos antes de dejarla en el catálogo
3. Añadir la **etiqueta visual** ✅/⏳ en tarjetas de resultado
4. Actualizar el criterio de certificación y la **FAQ** de `/mejor-patinete-electrico/`
5. Añadir el **mini-verificador** en esa misma página
6. Crear la página nueva **`/patinete-electrico-homologado-dgt/`**, corta, con enlace de autoridad al proyecto dedicado
7. Actualizar la lista de comercios afiliados en `metodologia-puntuacion` y aviso legal con iScooter EU
8. Enlazar la nueva página desde la home y desde la tarjeta de categoría
