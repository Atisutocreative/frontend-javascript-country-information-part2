# Opdrachtbeschrijving

## Inleiding
Jouw Country Information App was een grote hit bij Constantijn, dus hij heeft gevraagd of je hem wil
uitbreiden met wat extra functionaliteit!

Je gaat dit doen met behulp van de REST Counties API. De documentatie over de verschillende endpoints
kun je [hier](https://restcountries.eu/#api-endpoints-all) vinden. 

## Voor je begint
1. Je mag verder werken in jouw bestaande Country Information App
2. Schrijf voor alle onderstaande opdrachten eerst **stap voor stap de psuedo-code uit**. 
Check bij de pseudo-antwoorden of je geen stappen overgeslagen hebt. Begin dan pas met programmeren.

## Plan de campagne
1. Maak een nieuwe HTML-pagina aan en link daar naartoe vanaf de home-pagina. Maak ook een nieuw JavaScript 
bestand aan en link die aan de nieuwe pagina. Koppel ook het bestaande CSS bestand hieraan.
2. Maak een functie die alle landen ophaalt en sorteert op grootte van de populatie, van laag naar hoog.
3. Zorg ervoor dat er een lijst met land-namen en de bijbehorende vlag in de DOM wordt geplaatst. Gebruik 
destructuring om de properties aan te spreken.
4. De land-namen moeten worden weergegeven in een kleur die overeenkomt met het continent waar het land in ligt. 
Dit is altijd één van de volgende vijf contintenten: 
    * `Africa`: blauw
    * `Americas`: groen
    * `Asia`: rood
    * `Europe`: geel
    * `Oceania`: paarsgit 
3. Plaats de landkaart (te vinden in de `assets map`) bovenaan de pagina
4. Maak een menu-balk die op beide pagina's te zien is, zodat de gebruiker gemakkelijk van de home- naar de 
landen-pagina kan nagiveren.
