//links a button install variable to the buttonInstall id in the html document
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

//adds a button if the item hasn't been installed yet
if ('beforeinstallprompt' in window) {
    window.addEventListener('beforeinstallprompt', (event) => {

        window.deferredPrompt = event;

        butInstall.classList.toggle('hidden', false);
    });

    // creates a click handler event for the installation
    butInstall.addEventListener('click', async () => {

        const promptEvent = window.deferredPrompt;

        if (!promptEvent) {

            promptEvent.prompt();

            window.deferredPrompt = null;

            butInstall.classList.toggle('hidden', true);
        }

    });

}
//ensures the app will not try to reinstall if already installed
window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;
});
