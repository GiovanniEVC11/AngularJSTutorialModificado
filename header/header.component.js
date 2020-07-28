angular.module('PrimerModulo')
  .component('headerTemplate', {
      templateUrl: 'header/header.template.html',
      controller: function headerController(){
        this.titulo = "Mandarin";
        this.subtitulo = "No hay tiempo para rendirse";
      }
    });
