# AURA · web nueva (aurareset.es)

## Qué hay en esta carpeta
- `index.html`: inicio con la pausa de 3 minutos, las cuatro escenas del día (la luz pasa de día a noche), rituales, encuentros, preguntas y sobre AURA.
- `barcelona/` y `las-palmas/`: una página por ciudad.
- `assets/`: estilos, lógica y tus tipografías (alojadas por ti, sin Google Fonts).
- `sitemap.xml`, `robots.txt`, `og.png`.

## Cómo subirla
Sustituye el contenido del repositorio por esta carpeta y haz `git add .`, `git commit`, `git push`. Cloudflare publica solo.

## Lo que tienes que rellenar (5 cosas)
1. **Email**: en `assets/config.js`, pega la URL de envío de tu herramienta de email en `formEndpoint`. Hasta entonces la web NO guarda emails y ofrece Instagram como alternativa.
2. **Privacidad**: en el pie de cada página, sustituye los corchetes [tu nombre o razón social], [la herramienta de email] y [tu email de contacto].
3. **Audio**: sube tu voz a `audio/pausa-3min.mp3`. Sin audio, la pausa funciona en silencio.
4. **Analítica sin cookies**: pega el token de Cloudflare Web Analytics en `cfBeaconToken` (`assets/config.js`).
5. **Fotos reales**: hoy no hay fotos. Los halos de cada escena son el hueco; cuando tengas 5 o 6 fotos tuyas (sin tele encendida), se colocan ahí.

## Revisa tú, porque solo tú lo sabes
- Las respuestas de "Preguntas" (por ejemplo, "No necesitas experiencia previa").
- Que quieras prometer "te avisamos primero" también para Las Palmas.
- La cita de Thich Nhat Hanh (estaba en tu web sin autor; la he atribuido).

## Cómo funciona la pausa
Un toque en "Respira 3 minutos con AURA". Diez frases con fundido, 3 segundos de silencio y el cierre "Puedes continuar cuando quieras". Después aparece la invitación con email. No hay sonido al cargar la página. Hay un botón "Salir" discreto y la tecla Esc, por accesibilidad.

## Después de publicar
- Da de alta el sitio en Google Search Console y envía `https://aurareset.es/sitemap.xml`.
- Crea o revisa la ficha de Google para Barcelona y Las Palmas si ofreces algo presencial.
- Prueba la pausa con 5 personas que no sean amigas y mira cuántas la terminan.
