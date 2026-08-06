(function () {
  var modal = document.getElementById('modal');
  if (!modal) return;

  var openButtons = document.querySelectorAll('[data-modal-open]');
  var closeButtons = modal.querySelectorAll('[data-modal-close]');
  var previouslyFocused = null;
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
    var customTitle = trigger && trigger.getAttribute('data-modal-title');
    if (imgSrc) {
      // Gallery lightbox mode
      if (modalTitle) modalTitle.textContent = '';
      if (modalContent) {
        modalContent.innerHTML = '<img src="' + imgSrc + '" alt="" class="modal__lightbox-img" />';
      }
      modal.classList.add('modal--lightbox');
    } else if (customTitle) {
      // Custom text modal mode
      if (modalTitle) modalTitle.textContent = customTitle;
      if (modalContent) {
        var customContent = trigger.getAttribute('data-modal-content') || '';
        modalContent.innerHTML = '<p>' + customContent + '</p>';
      }
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
    modal.classList.remove('modal--lightbox');

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

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-modal-open]');
    if (trigger) openModal(trigger);
  });
  closeButtons.forEach(function (btn) { btn.addEventListener('click', closeModal); });
}());
