const admin = require('firebase-admin');

// Carga del archivo de credenciales del service account
const serviceAccount = require('./serviceAccountKey.json');

// Inicializar el SDK de Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// TODO: pega aquí el token FCM que te dio la app Flutter
const deviceToken = 'cjzpCZnWR1eN7zoReqOGYQ:APA91bErz4tTnhzAE-zpKysk8sJ7dYtzpqL-aE3qvvKlYGmIaeYfrmophGu08d8HfRwJOdwy08JrqKpA_TMs9Ewn06GYBqGnRqCifAoUaNSQDClTEy3NZeg';

async function sendPush() {
  const message = {
    token: deviceToken,
    notification: {
      title: 'Hola desde Firebase Admin Janeth',
      body: 'Este es un mensaje enviado con la API v1',
    },
    data: {
      origen: 'node-demo',
      tipo: 'prueba',
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('✅ Mensaje enviado correctamente:', response);
  } catch (error) {
    console.error('❌ Error al enviar mensaje:', error);
  }
}

sendPush();