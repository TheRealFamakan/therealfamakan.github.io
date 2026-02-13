// Fonction pour télécharger le CV
function downloadCV() {
    // Créer un lien temporaire pour télécharger le fichier
    const link = document.createElement('a');
    link.href = 'assets/CV.pdf'; // Chemin vers votre CV
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Alternative avec fetch pour plus de contrôle
async function downloadCVAdvanced() {
    try {
        const link = document.createElement('a');
        link.href = 'assets/CV.pdf';
        link.download = 'CV_Famakan_Camara.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Notification de succès
        showNotificationDownload('CV téléchargé avec succès! 📄', 'success');
    } catch (error) {
        console.error('Erreur téléchargement:', error);
        showNotificationDownload('Erreur lors du téléchargement', 'error');
    }
}

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