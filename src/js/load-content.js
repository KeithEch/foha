(function () {
  function set(selector, value) {
    var el = document.querySelector(selector);
    if (el && value != null) el.textContent = value;
  }

  function loadContent() {
    fetch('/content/sections.json')
      .then(function (res) { return res.ok ? res.json() : Promise.reject(); })
      .then(function (c) {

        // Hero
        set('[data-content="hero.subhead"]', c.hero && c.hero.subhead);
        var logoImg = document.querySelector('[data-content="hero.logo_image"]');
        if (logoImg && c.hero && c.hero.logo_image) logoImg.src = c.hero.logo_image;

        // About — heading and body copy
        set('[data-content="about.heading1"]', c.about && c.about.heading1);
        set('[data-content="about.heading2"]', c.about && c.about.heading2);
        set('[data-content="about.paragraph"]', c.about && c.about.paragraph);

        // About — stats list: split '·'-separated string into diamond-bullet items
        var statsContainer = document.getElementById('about-stats');
        if (statsContainer && c.about && c.about.stats) {
          var items = c.about.stats.split(' · ');
          statsContainer.innerHTML = '';
          items.forEach(function (item) {
            var li = document.createElement('li');
            li.className = 'about__stat-item';
            var bullet = document.createElement('span');
            bullet.className = 'about__stat-bullet';
            bullet.setAttribute('aria-hidden', 'true');
            li.appendChild(bullet);
            li.appendChild(document.createTextNode(item.trim()));
            statsContainer.appendChild(li);
          });
        }

        // Overview
        set('[data-content="overview.heading1"]', c.overview && c.overview.heading1);

        // Gallery
        set('[data-content="gallery.heading1"]', c.gallery && c.gallery.heading1);

        // Prologue
        set('[data-content="prologue.heading1"]', c.prologue && c.prologue.heading1);
        set('[data-content="prologue.paragraph"]', c.prologue && c.prologue.paragraph);

        // Retail — heading and body copy
        set('[data-content="retail.heading1"]', c.retail && c.retail.heading1);
        set('[data-content="retail.paragraph"]', c.retail && c.retail.paragraph);

        // Retail — update link hrefs by index (preserves styled HTML buttons)
        if (c.retail && c.retail.links) {
          var retailLinks = document.querySelectorAll('#retail-links .retail__link');
          c.retail.links.forEach(function (link, i) {
            if (retailLinks[i]) retailLinks[i].href = link.url;
          });
        }

        // Footer
        set('[data-content="footer.legal"]', c.footer && c.footer.legal);

      })
      .catch(function () { /* placeholder content remains */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
  } else {
    loadContent();
  }
}());
