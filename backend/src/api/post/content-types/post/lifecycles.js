const { exec } = require('child_process');

const route = '/home/proyectos/backend/deploy-script.sh';

module.exports = {
  async beforeUpdate(event) {
    // Ejecuta el script bash al actualizar una entrada
    exec(route, (error, stdout, stderr) => {
      console.log('Ejecutando script al actualizar una entrada')
      if (error) {
        console.error(`Error al ejecutar el script: ${error}`);
        return;
      }

      console.log(`Salida del script: ${stdout}`);
      if (stderr) {
        console.error(`Errores del script: ${stderr}`);
      }
    });
  },
  async beforeCreate(event) {
    // Ejecuta el script bash al crear una entrada
    exec(route, (error, stdout, stderr) => {
      console.log('Ejecutando script al crear una entrada')
      if (error) {
        console.error(`Error al ejecutar el script: ${error}`);
        return;
      }

      console.log(`Salida del script: ${stdout}`);
      if (stderr) {
        console.error(`Errores del script: ${stderr}`);
      }
    });
  },
  async beforeDelete(event) {
    // Ejecuta el script bash al eliminar una entrada
    exec(route, (error, stdout, stderr) => {
      console.log('Ejecutando script al eliminar una entrada')
      if (error) {
        console.error(`Error al ejecutar el script: ${error}`);
        return;
      }

      console.log(`Salida del script: ${stdout}`);
      if (stderr) {
        console.error(`Errores del script: ${stderr}`);
      }
    });
  },

}
