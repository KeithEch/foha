(function () {
  function set(selector, value) {
    var el = document.querySelector(selector);
    if (el && value != null) el.textContent = value;
  }

  function loadContent() {
    fetch('/content/sections.json')
      .then(function (res) { return res.ok ? res.json() : Promise.reject(); })
      .then(function (c) {
        set('[data-content="hero.subhead"]', c.hero && c.hero.subhead);

        set('[data-content="about.heading1"]', c.about && c.about.heading1);
        set('[data-content="about.stats"]', c.about && c.about.stats);
        set('[data-content="about.heading2"]', c.about && c.about.heading2);
        set('[data-content="about.paragraph"]', c.about && c.about.paragraph);

        set('[data-content="overview.heading1"]', c.overview && c.overview.heading1);

        set('[data-content="gallery.heading1"]', c.gallery && c.gallery.heading1);

        set('[data-content="prologue.heading1"]', c.prologue && c.prologue.heading1);
        set('[data-content="prologue.paragraph"]', c.prologue && c.prologue.paragraph);

        set('[data-content="retail.heading1"]', c.retail && c.retail.heading1);
        set('[data-content="retail.paragraph"]', c.retail && c.retail.paragraph);

        var linksContainer = document.getElementById('retail-links');
        if (linksContainer && c.retail && c.retail.links && c.retail.links.length) {
          linksContainer.innerHTML = '';
          c.retail.links.forEach(function (link) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.name;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            li.appendChild(a);
            linksContainer.appendChild(li);
          });
        }
      })
      .catch(function () { /* placeholder content remains */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
  } else {
    loadContent();
  }
}());
