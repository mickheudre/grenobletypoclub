<template>
  <div class="flex flex-col w-screen h-screen justify-center mx-auto ">
    <Logo class="fill-green w-64 h-64 mx-auto my-4"/>
    <p class="font-sans text-green text-md my-4 max-w-md mx-auto">Entreprendre la création d’une typographie est un processus laborieux où il est facile d’abandonner en cours de route lorsque l’on est débutant.e. C’est pourquoi nous avons eu l’idée au printemps 2021 de créer le Grenoble Typo Club pour nous réunir et avancer ensemble, nous soutenir et partager nos connaissances.
      Nos fontes sont distribuées sous licence libre, bancales mais pleines d’amour, créées pour que chacun.e puisse s’en emparer.</p>
    </div>
  </template>
  <script>
  export default {
    setup () {
      useHead({
        script: [
        { 
          async: true,
          src: 'https://scripts.withcabin.com/hello.js',
        }]
      }) },
      head: {
        title: 'Grenoble Typo Club'
      }
    }
</script>