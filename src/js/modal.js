(function () {
  var modal = document.getElementById('modal');
  if (!modal) return;

  var openButtons = document.querySelectorAll('[data-modal-open]');
  var closeButtons = modal.querySelectorAll('[data-modal-close]');
  var previouslyFocused = null;
  var modalContainer = modal.querySelector('.modal__container');
  var modalTitle = document.getElementById('modal-title');
  var modalContent = document.getElementById('modal-content');

  var defaultTitle = modalTitle ? modalTitle.textContent : '';
  var defaultContent = modalContent ? modalContent.innerHTML : '';

  var FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

  function getFocusable() {
    return Array.prototype.slice.call(modal.querySelectorAll(FOCUSABLE));
  }

  function openModal(trigger) {
    previouslyFocused = document.activeElement;

    var imgSrc = trigger && trigger.getAttribute('data-gallery-img');
    if (imgSrc) {
      // Gallery lightbox mode
      if (modalTitle) modalTitle.textContent = '';
      if (modalContent) {
        modalContent.innerHTML = '<img src="' + imgSrc + '" alt="" class="modal__lightbox-img" />';
      }
      if (modalContainer) modalContainer.classList.add('modal__container--lightbox');
    }

    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    var focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeModal() {
    // Restore default content if lightbox was active
    if (modalTitle) modalTitle.textContent = defaultTitle;
    if (modalContent) modalContent.innerHTML = defaultContent;
    if (modalContainer) modalContainer.classList.remove('modal__container--lightbox');

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

  openButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { openModal(btn); });
  });
  closeButtons.forEach(function (btn) { btn.addEventListener('click', closeModal); });
}());
