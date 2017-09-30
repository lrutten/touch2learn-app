# Touch2learn app

Dit is de broncode van de Touch2learn app.
Deze app is met Ionic gebouwd.

# 404 probleem

Alleen de Android apk met daarin WebView is niet in staat om
de JSON bij www.touch2learn.be op te halen. De webapp, gestart met `ionic serve`
werkt wel.

## Whitelist

Een eerste oplossing met `cordova-plugin-whitelist` schijnt niet te werken.

~~~~
cordova plugin add codova-plugin-whitelist
~~~~

Deze regels moet je bijvoegen in `index.html`.

~~~~
<meta http-equiv="Content-Security-Policy" content="default-src 'self' yourhost.com ws://localhost:35729 data: gap: https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *;script-src 'self' localhost:35729 'unsafe-eval' 'unsafe-inline';">    <title></title>
<!-- Allow requests to touch2learn.be -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self' touch2learn.be">
~~~~


## Crosswalk

Een tweede mogelijke oplossing is de CrossWalk WebView.

~~~~
cordova plugin add cordova-plugin-crosswalk-webview
~~~~

Na de installatie van de plugin is de build ongewijzigd. Kijk hiervoor in `Makefile`.
Hier is de pagina met de uitleg:

* [https://crosswalk-project.org/documentation/cordova/cordova_4.html](https://crosswalk-project.org/documentation/cordova/cordova_4.html)

## Whitelist bis

Nu is de whitelist alleen bijgevoegd. Er is geen toevoeging in `index.html`.
Dit schijnt wel te werken. De Javascript console geeft wel een waarschuwing dat de Content-Security-Policy meta tag ontbreekt.
Dit kan geen kwaad.
