const { createApp } = Vue

/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. */

  createApp({
    data() {
      return {

        message : 'ciao user',
        mediaImg : 'https://picsum.photos/400'

    }
    }
  }).mount('#app')