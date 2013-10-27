# AngularJS - live

Inneholder kode som ble laget på Websteps fagdag 2013-10-26.

## Nødvendigheter for å kjøre koden

* En browser og en teksteditor
* En webserver. Jeg brukte Pythons innebygde på presentasjonen.

## Oppsett

1. Sjekk ut prosjektet: `git clone https://github.com/kmkr/angularjsintro.git`
1. Start en webserver som serverer rota til prosjektet. Python 2.x: `python -mSimpleHTTPServer`, Python 3.x: `python3 -m http.server`
1. Åpne `http://localhost:8000`

## Mulige utvidelser

Dersom du ønsker å leke inneholder følgende liste noen tips til utvidelser

* Splitt `FoodController` i to ved å introdusere en ny controller, `FoodListController` som tar for seg ansvaret til lista på høyre side. Bruk `FoodService` i begge controllerne slik at datakilden deles.
* Mulighet for å hoppe tilbake i lista: Dette kan gjøres ved å legge til en knapp, bruke `ng-click` og oppdatere `activeRecipeIndex`.
* Mulighet for å legge til en kommentar: Bruk for eksempel `<textarea>` sammen med `ng-model="recipe.comment"`.
* Mulighet for å slette elementer i lista til høyre: Legg til en ny knapp per `<li>`-element som fjerner elementet fra `recipes`.
* `myApp.js` begynner å bli stor. Lag en ny fil per controller og service. Bruk `angular.module('my.app')` for å _hente opp_ den allerede opprettede modulen `my.app` slik at du slipper å eksponere noe på `window`.