# Waste Services - Sito Web

Sito web vetrina/landing page per Waste Services - Gestione Rifiuti Sostenibile.

## Struttura del Progetto

```
waste-services/
│
├── index.html          # Pagina principale
├── css/
│   └── style.css       # Stili CSS
├── js/
│   └── script.js       # JavaScript
├── images/             # Cartella per le immagini
│   ├── hero-bg.jpg
│   ├── ambiente.jpg
│   ├── case-1.jpg
│   ├── case-2.jpg
│   └── case-3.jpg
└── README.md           # Questo file
```

## Istruzioni per l'Uso Locale

1. **Aprire il sito localmente:**
   - Apri il file `index.html` con un browser moderno (Chrome, Firefox, Edge, Safari)
   - Oppure usa un server locale come Live Server (VS Code) o Python SimpleHTTPServer

2. **Con VS Code:**
   - Installa l'estensione "Live Server"
   - Clicca destro su `index.html` → "Open with Live Server"

3. **Con Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Poi apri http://localhost:8000 nel browser
   ```

## Personalizzazione

### Modificare i Contenuti
- Apri `index.html` e modifica i testi direttamente nelle sezioni HTML
- Ogni sezione ha un ID (#azienda, #servizi, etc.) facilmente identificabile

### Modificare i Colori
- Apri `css/style.css`
- Modifica le variabili CSS nella sezione `:root` all'inizio del file:
  ```css
  --color-primary: #2563eb;    /* Colore principale */
  --color-secondary: #10b981;  /* Colore secondario */
  ```

### Aggiungere Immagini
1. Salva le tue immagini nella cartella `images/`
2. Sostituisci i riferimenti in `index.html`:
   - `hero-bg.jpg` - Immagine sfondo hero (1920x1080px consigliato)
   - `ambiente.jpg` - Immagine sezione azienda (800x600px)
   - `case-1.jpg`, `case-2.jpg`, `case-3.jpg` - Casi di successo (600x400px)

### Modificare Font
- Il sito usa i font di sistema per velocità
- Per usare Google Fonts, aggiungi in `<head>` di index.html:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  ```
  E modifica in `css/style.css`:
  ```css
  --font-main: 'Inter', sans-serif;
  ```

## Deploy su Aruba

### Metodo 1: FTP/SFTP (Consigliato)

1. **Usa un client FTP come FileZilla:**
   - Host: ftp.tuodominio.it (o l'indirizzo fornito da Aruba)
   - Username: il tuo username Aruba
   - Password: la tua password
   - Porta: 21 (FTP) o 22 (SFTP)

2. **Carica i file:**
   - Connettiti al server
   - Vai nella cartella `public_html` o `www`
   - Carica TUTTI i file e cartelle mantenendo la struttura:
     ```
     public_html/
     ├── index.html
     ├── css/
     ├── js/
     └── images/
     ```

3. **Verifica:**
   - Visita il tuo dominio (es: www.tuodominio.it)
   - Il sito dovrebbe essere online!

### Metodo 2: File Manager Aruba

1. Accedi al pannello di controllo Aruba
2. Vai in "File Manager"
3. Carica i file nella directory corretta (public_html)
4. Mantieni la struttura delle cartelle

### Metodo 3: cPanel (se disponibile)

1. Accedi a cPanel
2. Vai in "File Manager"
3. Carica i file nella directory `public_html`

## Checklist Pre-Deploy

- [ ] Hai sostituito tutte le immagini placeholder
- [ ] Hai verificato che l'email info@wasteservices.it sia corretta
- [ ] Hai verificato il numero di telefono e fax
- [ ] Hai testato tutti i link di navigazione
- [ ] Hai testato il sito su mobile (responsive)
- [ ] Hai compresso le immagini per velocità (usa TinyPNG.com)

## Ottimizzazioni Post-Deploy

### SEO
1. Aggiungi un file `robots.txt` nella root:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://www.tuodominio.it/sitemap.xml
   ```

2. Aggiungi un file `sitemap.xml` (puoi generarlo online)

3. Aggiungi Google Analytics (se necessario):
   ```html
   <!-- Inserisci prima di </head> in index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Performance
- Comprimi le immagini (max 200KB ciascuna)
- Usa formati moderni come WebP quando possibile
- Abilita la cache del browser (chiedi supporto Aruba se necessario)

## Browser Supportati

- Chrome (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Edge (ultime 2 versioni)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tecnologie Usate

- HTML5 semantico
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript Vanilla (ES6+)
- Responsive Design (Mobile-First)
- Nessuna dipendenza esterna (framework-free)

## Manutenzione

- **Backup regolari:** Scarica periodicamente i file dal server
- **Aggiornamenti:** Modifica i contenuti quando necessario
- **Monitoraggio:** Controlla che il sito sia sempre online

## Supporto

Per problemi tecnici con il sito, modifica i file sorgente localmente e ricarica via FTP.
Per problemi con Aruba, contatta il loro supporto tecnico.

## Contatti Waste Services

- **Email:** info@wasteservices.it
- **Telefono:** 0874 1862563
- **Fax:** 0824 1810739
- **Indirizzo:** Via Roma n.35, Campobasso (CB) 86100

---

**Note:** Questo è un sito statico HTML/CSS/JS puro, non richiede database, PHP o altre tecnologie server-side. Funziona su qualsiasi hosting web che supporti file statici.
