'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];


var wizards = [//создаю массив объектов ,в котором прописываются функции генерации
  {
    generateName: function () {
      var i;
      var j;
      j = Math.floor(Math.random() * (WIZARD_LASTNAMES.length));
      i = Math.floor(Math.random() * (WIZARD_NAMES.length));
      return WIZARD_NAMES[i] + ' ' + WIZARD_LASTNAMES[j];
    },

    generateCoats: function () {

      var i;
      i = Math.floor(Math.random() * (COATS.length));
      return COATS[i];

    },

    generateEyes: function () {

      var i;
      i = Math.floor(Math.random() * (EYES.length));
      return EYES[i];

    }
  }

  for (i = 0; i < 4; i++){ //цикл который добавляет волшебников четыре раза в массив
  var temp_Wizard;
  temp_Wizard = [
    {
      name = wizards.generateName(),
      coatColor = wizards.generateCoats(),
      eyesColor = wizards.generateEyes(),
    }
  ];
  wizards.push(temp_Wizard);

}
]



for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  similarListElement.appendChild(wizardElement);
