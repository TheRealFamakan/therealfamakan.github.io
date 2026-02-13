class ContactManager {
    constructor() {
        this.initializeForm();
    }

    initializeForm() {
        const form = document.querySelector('#contactForm'); // Changé ici
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = this.getFormData();
        const isValid = this.validateForm(formData);
        
        if (!isValid) return;
        
        this.showLoading(true);
        
        try {
            await this.sendViaEmailJS(formData);
            this.showSuccess();
            this.resetForm();
        } catch (error) {
            this.showError('Erreur lors de l\'envoi du message');
            console.error('Erreur EmailJS:', error);
        } finally {
            this.showLoading(false);
        }
    }

    getFormData() {
        const form = document.querySelector('#contactForm');
        return {
            name: form.querySelector('input[name="name"]').value,
            email: form.querySelector('input[name="email"]').value,
            subject: form.querySelector('input[name="subject"]').value,
            message: form.querySelector('textarea[name="message"]').value
        };
    }

    validateForm(data) {
        const errors = [];
        
        if (!data.name.trim()) errors.push('Le nom est requis');
        if (!data.email.trim()) errors.push('L\'email est requis');
        if (!this.isValidEmail(data.email)) errors.push('Email invalide');
        if (!data.subject.trim()) errors.push('Le sujet est requis');
        if (!data.message.trim()) errors.push('Le message est requis');
        
        if (errors.length > 0) {
            this.showError(errors.join(', '));
            return false;
        }
        
        return true;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    async sendViaEmailJS(formData) {
        // Initialiser EmailJS avec votre clé publique
        if (!window.emailjs) {
            throw new Error('EmailJS non chargé');
        }
        
        // S'assurer que EmailJS est initialisé
        emailjs.init("BaECpfoSYG9Y-gCEh");
        
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            reply_to: formData.email
        };
        
        console.log('Envoi avec les paramètres:', templateParams);
        
        return emailjs.send(
            "service_zlfjurq",
            "template_mogva0l", 
            templateParams
        );
    }

    showLoading(show) {
        const button = document.querySelector('#contactForm button[type="submit"]');
        if (show) {
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            button.disabled = true;
        } else {
            button.innerHTML = 'Send Message';
            button.disabled = false;
        }
    }

    showSuccess() {
        this.showNotification('Message envoyé avec succès! 🎉', 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        // Supprimer ancienne notification
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
        }, 5000);
    }

    resetForm() {
        document.querySelector('#contactForm').reset();
    }
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    new ContactManager();
});