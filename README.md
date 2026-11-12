# SEGURIPREV ESCUCHA · levantamiento en campo

Aplicación de una sola página para levantar en tableta los cinco instrumentos del programa
**SEGURIPREV ESCUCHA**: incorporación (día 7 y día 30), permanencia, salida, auditoría de
condiciones y evaluación de supervisión.

**Página:** https://luisrodrigoag-pixel.github.io/escucha/

## Cómo se usa en el iPad

1. Abrir la liga en Safari.
2. Compartir › **Añadir a pantalla de inicio**. Queda como una app y abre sin barra del navegador.
3. Elegir el instrumento, llenarlo y **Guardar encuesta**.
4. Al terminar la jornada: **Exportar y respaldar** › *Copiar* para pegar en Excel, o
   *Descargar CSV* para abrirlo en Numbers o mandarlo por correo.

## Dónde viven las respuestas

En la **tableta**, en el almacenamiento local del navegador. No se envían a ningún servidor:
esta página es estática y no tiene base de datos. Eso permite levantar encuestas sin señal,
pero significa que **lo que no se exporta, se pierde** si se borran los datos de Safari o se
reinstala el acceso directo. Exportar al cierre de cada jornada.

Cada tableta guarda lo suyo: no se ven entre sí.

## Confidencialidad

El instrumento E (evaluación de supervisión) es confidencial y no debe registrar el nombre de
quien contesta. Conforme al manual del programa, los supervisores no tienen acceso a las
respuestas individuales sobre su propia evaluación.

## Mantenimiento

Todo está en `index.html`, sin dependencias ni compilación: se edita y se sube. Las preguntas de
cada instrumento están en el arreglo `INSTRUMENTOS`, al principio del script.
