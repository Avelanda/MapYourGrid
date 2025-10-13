---
hide:
  - navigation
  - toc
  - footer
---

<div class="page-headers">
<h1>Good First Lines </h1>
</div>

Map your first power line! These coordinates point to easy-to-map power lines perfect for beginners. You can also [add good first lines at the bottom of the page](#want-to-add-a-good-first-line).

??? success "INTRODUCTION (Click Me)"
    Welcome to our interactive launchpad and hub for contributing to "Good First Lines" via OpenStreetMap! Click on a good first line box of your choice, and start mapping power infrastructure directly in iD or JOSM. :rocket:
    If this is your first time grid mapping, please go through the [JOSM Starter-Kit](https://mapyourgrid.org/starter-kit/#josm-starter-kit) or [iD Starter-Kit](https://mapyourgrid.org/starter-kit/#id-starter-kit). You can use the **#MapYourGrid** hashtag in your changeset to show your support for our initiative when you make an edit! 

    How to use: <br>
    1. Just press on a good first line box<br>
    2. If you use iD, then press on the iD editor button which will open up an edit page in iD directly and teleport you to that line's location<br>
    3. If you use JOSM, make sure "Remote" is activated, and your ad-blocker is deactivated. Press on the JOSM button, and go to JOSM. You will be teleported to the good first line. The country however will not be loaded, but you can do this using our Map It 📍 for that country or region.<br>
    4. Once done mapping, come back to this page and your good first line's box, and click on "completed" if you managed to finish the line, or "attempted" if you tried but were unsuccessful.




<div id="gfl-container">
  <div id="loading">Loading good first lines...</div>
</div>

### **<div class="tools-header">Want to add a good first line?</div>**

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