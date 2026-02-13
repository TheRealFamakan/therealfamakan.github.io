// Configuration EmailJS simplifiée
class EmailJSManager {
    constructor() {
        // Remplacez par vos vraies clés après configuration
        this.publicKey = "BaECpfoSYG9Y-gCEh"; 
        this.serviceId = "service_zlfjurq"; 
        this.templateId = "template_mogva0l"; 
        
        this.init();
    }

    init() {
        // Initialiser EmailJS
        emailjs.init(this.publicKey);
    }

    async sendEmail(formData) {
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                reply_to: formData.email
            };

            const response = await emailjs.send(
                this.serviceId,
                this.templateId,
                templateParams
            );

            return response;
        } catch (error) {
            throw new Error('Échec de l\'envoi: ' + error.text);
        }
    }
}

// Export pour utilisation
window.emailManager = new EmailJSManager();