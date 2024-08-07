document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const span = document.getElementsByClassName('close')[0];
    const openModalButtons = document.querySelectorAll('.open-modal');

    const packContents = {
        'pack-americain': `
            <h2>Pack Américain</h2>
            <p>SOON</p>
            <a href="chemin/vers/pack-americain.zip" class="download-btn" download>Télécharger le pack</a>
        `,
        'pack-lore-friendly': `
            <h2>Pack Lore Friendly</h2>
            <p>SOON</p>
            <a href="chemin/vers/pack-lore-friendly.zip" class="download-btn" download>Télécharger le pack</a>
        `,
        'pack-allemand': `
            <h2>Pack Allemand</h2>
            <p>SOON</p>
            <a href="chemin/vers/pack-allemand.zip" class="download-btn" download>Télécharger le pack</a>
        `,
        'pack-francais': `
            <h2>Pack Français</h2>
            <p>SOON</p>
            <a href="chemin/vers/pack-francais.zip" class="download-btn" download>Télécharger le pack</a>
        `
        ,
        'pack-debutant': `
            <h2>Pack Débutant</h2>
            <p>Vous avez plusieurs dossiers avec tout se qu'il faut pour moddé votre jeux sans crash.</p>
            <p>"Tout les informations pour l'installation du pack se trouve dans le dossier README"</p>
            <a href="Dossier/LSPDFR Tools.zip" class="download-btn" download>Télécharger le pack</a>
        `
        ,
        'pack-staff': `
            <h2>Formulaire Staff</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc80t2dIS68KLhhFzik4HO1WiYAKJGXrmBfgX5s7lQjP1NNqA/viewform?usp=sf_link" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours...</iframe>
        `
        ,
        'pack-animateur': `
            <h2>Formulaire Animateur/ice</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd7df9NQJ_Mbuf-et7qyUaRs1RMtLdXBSm-vVz769t8qUb6dg/viewform?usp=sf_link" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours...</iframe>
        `
        ,
        'pack-support': `
            <h2>Formulaire Support</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwJebkcFb_YJwQEyOwXgMu_L2Si2YHLS_GJSd0Jms-fyYq1w/viewform?usp=sf_link" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours...</iframe>
        `
        ,
        'pack-dev': `
            <h2>Formulaire DEV</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8HhxgKnVNAdB_z0SVbORwvu1C2hqmw1rqFX3sgp9ORWionQ/viewform?usp=sf_link" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
        `
    };

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pack = button.getAttribute('data-pack');
            modalBody.innerHTML = packContents[pack];
            modal.style.display = 'block';
        });
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});