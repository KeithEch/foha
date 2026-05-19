(function () {
  var modal = document.getElementById('modal');
  if (!modal) return;

  var openButtons = document.querySelectorAll('[data-modal-open]');
  var closeButtons = modal.querySelectorAll('[data-modal-close]');
  var previouslyFocused = null;

  var FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

  function getFocusable() {
    return Array.prototype.slice.call(modal.querySelectorAll(FOCUSABLE));
  }

  function openModal() {
    previouslyFocused = document.activeElement;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    var focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (previouslyFocused) previouslyFocused.focus();
  }

  modal.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key !== 'Tab') return;

    var focusable = getFocusable();
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  openButtons.forEach(function (btn) { btn.addEventListener('click', openModal); });
  closeButtons.forEach(function (btn) { btn.addEventListener('click', closeModal); });
}());
