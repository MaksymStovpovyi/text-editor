const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'DONE!';
});

// an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
