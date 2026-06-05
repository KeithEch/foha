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

            var trimmed = item.trim();
            if (trimmed.indexOf('System:') === 0) {
              var colonIdx = trimmed.indexOf(':');
              var label = trimmed.slice(0, colonIdx + 1);
              var value = trimmed.slice(colonIdx + 1).trim();
              li.appendChild(document.createTextNode(label + ' '));
              var btn = document.createElement('button');
              btn.type = 'button';
              btn.className = 'about__stat-link';
              btn.setAttribute('data-modal-open', '');
              btn.setAttribute('data-modal-title', (c.about && c.about.system_modal_title) || 'System Agnostic');
              btn.setAttribute('data-modal-content', (c.about && c.about.system_modal_body) || '');
              btn.textContent = value;
              li.appendChild(btn);
            } else {
              li.appendChild(document.createTextNode(trimmed));
            }

            statsContainer.appendChild(li);
          });
        }

        // Overview
        set('[data-content="overview.heading1"]', c.overview && c.overview.heading1);
        set('[data-content="overview.paragraph"]', c.overview && c.overview.paragraph);

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
