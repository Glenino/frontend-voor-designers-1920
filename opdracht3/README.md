# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht moest ik een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers mijn ontwerp op verschillende manieren kunnen bedienen. Verschillende states moeten vormgeven zijn en worden getoond op het juiste moment.


## Werkwijze
Eerst heb ik voor mezelf een lijst gemaakt met alles wat ik in mijn ontwerp wou hebben. Vervolgens heb ik opdracht 1, 2, Frontend Development opdracht en de opdracht voor Inleiding Programneren bekeken voor inspiratie en wellicht code die ik kon gebruiken voor deze opdracht. Tot slot als ik bij een onderdeel er niet uitkwam door errors of dat er niks gebeurd, heb ik hulp gevraag met behulp van Discord.


## Planning
1. Les 5: Briefing opdracht 3, API uitzoeken, tutorial doorlopen, schetsen en beginnen met coderen
2. Les 6: Eerste versie testen. Meenemen: breakdown-schets, JSON laden in de console, daarna in Javascript HTML elementen aanmaken, de data koppelen en toevoegen aan de DOM
3. Les 7: Demo presenteren
4. Les 8: Oplevering en beoordeling

Door Corona liep mijn planning anders dan die van de lessen hierboven. In de eerste twee weken (les 5 en 6) had ik meer gefocust op de andere vakken, waardoor ik niks had gedaan aan Frontend. In de weken daarna (les 7 en 8) heb ik een inhaalslag gemaakt en heb ik veel meer tijd kunnen steken in mijn code en iets kunnen maken. In de extra week (dankzij Corona) heb ik lopen experimenteren met van alles en mijn eindopdracht geperfectioneerd tot wat het nu is.


## Mijn ontwerp: MovieRoulette
Mijn uiteindelijke ontwerp is MovieRoulette, waarbij de gebruiker zes films te zien krijgt, waarbij ie kan klikken op de films voor informatie en de film in je favorietenlijst kan zetten. Op deze manier kan de gebruiker de film later weer bekijken.

Met behulp van de pijlen op je toetsenbord en de pijlknoppen, kan de gebruiker de filmcarrousel besturen. Op deze manier kan de gebruiker op meerdere manieren de carrousel besturen.

Verder als de gebruiker over een film hovert, komt de titel van de film in beeld, wordt de cover groter en de border veranderd van kleur, zodat het meer opvalt voor de gebruiker.

Tot slot als de gebruiker op een film klikt en oppakt, kan ie hem naar het favorietenvak slepen. Als de film in de buurt is, wordt het vak donkergroen, waardoor de gebruiker weet wanneer ie de film kan loslaten, zodat het in het vak terechtkomt.


## MovieRoulette
(https://glenino.github.io/frontend-voor-designers-1920/opdracht3/)


## Feedback
Ik heb mijn werk laten bekijken door Jane Lacroes.

Ze vond dat ik de JSON goed heb toegepast, op dezelfde manier hoe het was uitgelegd in de les.
Echter vond ze wel dat ik de loading state miste van de UI stack, waardoor ik dat punt van de beoordeling deels goed had.

Voor punt twee (de UI events) vond ze dat ze de UI events duidelijk vond. Ze vond vooral de pijlen het duidelijkst, omdat je ermee naar links/rechts kan gaan door erop te klikken, maar ook met de toetsenbord. Ze gaf me als tip om wellicht nog te kijken of ik nog meer UI events kan toevoegen. En ze had moeite met het draggen van de foto's.

Tot slot het toepassen van de principes. Ze vond dat ik alle principes goed had toegepast met behulp van de pijlen vooral. Ze vond het extra goed dat ik voor elklaar heb gekregen dat wanneer je bij de laatste foto komt en je klikt naar rechts, je weer naar het begin gaat en andersom, waardoor  principe 8 goed wordt toepast.

Overal vond ze dat ik het goed heb gedaan, alleen de loading state vind ze jammer dat ie mist.


## Aanpassingen na feedback
Ik heb na de feedback twee aanpassingen gedaan.

De eerste aanpassing die ik heb gemaakt is dat er nu een kleine zin onder de favorietenvak staat. Hierdoor is het duidelijker voor de gebruiker waar hij/zij de foto's in kan slepen. Jane gaf toe dat ze de tekst niet had gelezen, waardoor ze niet wist waar ze heen moest draggen per se. Met behulp van de tekst is het duidelijker.

De tweede aanpassing is dat ik nu een loading state heb. Ik wist niet goed hoe dat moest, maar heb het opgezocht online en heb met behulp van dat een loading state kunnen maken met een gifje. Opzicht als introductie vind ik het goed om een loading state te krijgen, zodat je een soort eerste indruk aan de gebruiker achterlaat voor wat gaat komen.


## Wat lukte wel/niet?
Met behulp van opdracht 2 en de keyCode van Ids heb ik de carrousel aan de praat kunnen krijgen en in tegenstelling tot opdracht 2, ook bestuurbaar gemaakt met de pijltoetsen.

Het tweede wat is gelukt is de dropzone (de favorietenvak). Dit is vooral gelukt, door de code die ik nog had bij opdracht 1.

Verder heb ik met behulp van een tutorial een loading screen kunnen maken, wat me eerst niet lukte doordat ik niet precies wist hoe ik moest beginnen met het maken ervan. Na de tutorial snapte ik veel beter hoe het moest en kon de code gelukkig mijn eigen maken.

Tot slot is het mij gelukt om informatie op te roepen van de API, zoals de afbeeldingen en de titelz van de films.

Wat me helaas niet lukte is de titel zichtbaar te krijgen wanneer de gebruiker over een cover hovert. Ik had er wel tips voor gekregen hoe ik het moest aanpakken, maar kreeg het helaas niet aan te praat.

Het andere wat me niet is gelukt is alle informatie zichtbaar maken wanneer de gebruiker op de cover klikt. Dit komt grotendeels omdat het ongeveer op dezelfde manier moet als bij de titel zichtbaar laten maken, alleen kreeg het niet aan te praat.


## Bronnen
Mijn bronnen staan weergegeven in mijn code bij de stukken code die ik heb gekopieërd.


## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De data wordt van een externe bron ingeladen met Javascript.
3. Een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) worden opgevangen en zijn vormgegeven.
4. In de demo maak je gebruik van meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
5. In de demo dien je rekening te houden met de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
6. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github

