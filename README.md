﻿# _Registreringssida-Inloggningsida-Adminsida_
## _Registreringssida_
_En registreringssida i react med Node.js och PHP där klientsinformation sparas i en databas med hashning._
_Jag har ännu inte implementerat kontroll av inmatning, så det är möjligt att skicka tomma inmatningar till databasen. Jag planerar att fixa det när jag har tid._

__Date: 2024/05/27__ _Har fixat inmatningskontrollen med hjälp av Joi, förbättrat själva koden med hjälp av routers, models och middlewares._

## _inlogInloggningsida_
_Just nu har jag inte fixat det, men på inloggningssidan hämtar man all information från databasen._

__Date: 2024/05/27__ _allt koden ser bra ut men hittar inte felet än eftersom det är något tokigt med hashat lösenord._

__Date: 2024/05/28__ _Allt fungerar som det ska, felet låg i databasen. Eftersom jag hade satt VARCHAR(50) för lösenord, men det hashade lösenordet var ungeför 100-200 tecken långt._
## _Adminsida_
__Date: 2024/05/28__ _har även fixat en admin sida som hämtar allt från db, men ska jobba vidare på den så att admin kan radera och ändra den._

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)
