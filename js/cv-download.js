// Fonction pour télécharger le CV
function downloadCV() {
    // Créer un lien temporaire pour télécharger le fichier
    const link = document.createElement('a');
    link.href = 'assets/FamakanCamaraMLAI.pdf'; // Chemin vers votre CV
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const cvFiles = {
    fr: {
        label: 'French',
        path: 'assets/cv-fr.pdf',
        filename: 'CV_Famakan_Camara_FR.pdf'
    },
    en: {
        label: 'English',
        path: 'assets/cv-en.pdf',
        filename: 'CV_Famakan_Camara_EN.pdf'
    }
};

let activeCVLanguage = 'fr';

function downloadCVAdvanced() {
    const modal = getCVModal();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    updateCVModal(activeCVLanguage);
}

function getCVModal() {
    let modal = document.querySelector('.cv-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.className = 'cv-modal';
    modal.hidden = true;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'cv-modal-title');
    modal.innerHTML = `
        <div class="cv-modal-content">
            <div class="cv-modal-header">
                <h2 id="cv-modal-title" class="cv-modal-title">Curriculum Vitae</h2>
                <div class="cv-modal-actions">
                    <div class="cv-language-toggle" role="group" aria-label="CV language">
                        <button type="button" class="cv-language-button" data-language="fr">French</button>
                        <button type="button" class="cv-language-button" data-language="en">English</button>
                    </div>
                    <button type="button" class="cv-modal-close" aria-label="Close CV preview">&times;</button>
                </div>
            </div>
            <iframe class="cv-modal-preview" title="CV preview"></iframe>
            <div class="cv-modal-footer">
                <a class="cv-modal-open" target="_blank" rel="noopener">Open in new tab</a>
                <a class="cv-modal-download" download>Download</a>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.querySelectorAll('[data-language]').forEach((button) => {
        button.addEventListener('click', () => updateCVModal(button.dataset.language));
    });
    modal.querySelector('.cv-modal-close').addEventListener('click', closeCVModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeCVModal();
    });
    return modal;
}

function updateCVModal(language) {
    const file = cvFiles[language] || cvFiles.fr;
    activeCVLanguage = language in cvFiles ? language : 'fr';
    const modal = document.querySelector('.cv-modal');
    modal.querySelector('.cv-modal-preview').src = file.path;
    modal.querySelector('.cv-modal-open').href = file.path;
    modal.querySelector('.cv-modal-download').href = file.path;
    modal.querySelector('.cv-modal-download').download = file.filename;
    modal.querySelectorAll('[data-language]').forEach((button) => {
        const isActive = button.dataset.language === activeCVLanguage;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

function closeCVModal() {
    const modal = document.querySelector('.cv-modal');
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCVModal();
});

function showNotificationDownload(message, type) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="close-btn">×</button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}
