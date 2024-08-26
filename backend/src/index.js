'use strict';

module.exports = {
  async bootstrap({ strapi }) {
    const webhookURL = 'http://locahost:3010/webhook';  // Cambia esto a la URL de tu dominio

    try {
      // Crear el webhook a través del servicio de Strapi
      const existingWebhook = await strapi
        .plugin('webhooks')
        .service('webhooks')
        .find({ url: webhookURL });

      if (!existingWebhook.length) {
        await strapi
          .plugin('webhooks')
          .service('webhooks')
          .create({
            name: 'Mi Webhook Personalizado',
            url: webhookURL,
            events: ['entry.create', 'entry.update'], // Escoge los eventos que necesites
            enabled: true,
          });
        console.log('Webhook configurado correctamente');
      } else {
        console.log('El webhook ya está configurado');
      }
    } catch (error) {
      console.error('Error al configurar el webhook:', error);
    }
  },
};

