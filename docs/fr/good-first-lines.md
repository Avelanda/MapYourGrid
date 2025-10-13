---
hide:
  - navigation
  - toc
  - footer
---

<div class="page-headers">
<h1>Bonnes Premieres Lignes </h1>
</div>

Cartographie ta premiere ligne! Ces coordonnées pointent vers des lignes electriques faciles à cartographier pour les débutants. Tu peux aussi rajouter des "bonnes premieres lignes" [en bas de la page](#rajouter-une-ligne).

??? success "INTRODUCTION (Click Me)"
    Bienvenue sur notre plateforme interactive et centre de contribution aux « bonnes premières lignes » via OpenStreetMap ! Cliquez sur la case « bonnes premières lignes » de votre choix et commencez à cartographier l'infrastructure électrique directement dans iD ou JOSM. :rocket:
    Si tu es un débutant, explore notre tutoriel [JOSM Starter-Kit](https://mapyourgrid.org/starter-kit/#josm-starter-kit) ou [iD Starter-Kit](https://mapyourgrid.org/starter-kit/#id-starter-kit). Tu peux aussi utiliser notre hashtag **#MapYourGrid** pour  soutenir l'initiative! 

    Como usar: <br>
    1. Cliquez sur l'une des lignes.<br>
    2. Si vous utilisez iD, appuyez sur le bouton de l'éditeur iD, qui ouvrira directement une page d'édition dans iD et vous téléportera à l'emplacement de cette ligne..<br>
    3. Si utilizas JOSM, asegúrate de que «Remoto» esté activado y de que tu bloqueador de anuncios esté desactivado. Pulsa el botón JOSM y ve a JOSM. Serás teletransportado a la primera línea correcta. Sin embargo, el país no se cargará, pero puedes hacerlo utilizando nuestro Map It 📍 para ese país o región.<br>
    4. Une fois que vous avez terminé le mappage, revenez à cette page et à la case de votre première ligne correcte, puis cliquez sur « terminé » si vous avez réussi à terminer la ligne, ou sur « essayé » si vous avez essayé mais sans succès.




<div id="gfl-container">
  <div id="loading">Loading good first lines...</div>
</div>

### **<div class="tools-header">Rajouter une ligne</div>**

<div id="add-gfl-form">
  <div class="form-group">
    <label for="add-coordinates">Coordinates *</label>
    <input type="text" id="add-coordinates" placeholder="" required>
    <small>Latitude,Longitude (example: 43.22443,12.82870)</small>
  </div>
  
  <div class="form-group">
    <label for="add-country">Country *</label>
    <input type="text" id="add-country" placeholder="" required>
    <small>Example: Spain</small>
  </div>
  
  <div class="form-group">
    <label for="add-details">Region/Details (Optional)</label>
    <input type="text" id="add-details" placeholder="" maxlength="200">
    <small>Example: "Madrid Region", "Line goes North"</small>
  </div>
  
  <button id="submit-gfl" class="submit-btn">Add Good First Line</button>
  <div id="form-message"></div>
</div>

## *Archived Lines*

[Archived Lines :fontawesome-solid-paper-plane:](archive/archive.md){ .md-button .md-button--primary }

<script src="/assets/javascripts/gfl.js"></script>