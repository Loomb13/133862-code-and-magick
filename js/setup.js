'use strict';

var userDialog = document.querySelector('.setup');
//userDialog.classList.remove('hidden');
//document.querySelector('.setup-similar').classList.remove('hidden');
//var similarListElement = document.querySelector('.setup-similar-list');
//var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizards = [
  {
    name: WIZARD_NAMES[0],
    lastname: WIZARD_LASTNAMES[3],
    coatColor:'rgb(215, 210, 55)',
    eyesColor:'red'
  },
  {
    name: WIZARD_NAMES[1],
    lastname: WIZARD_LASTNAMES[5],
    coatColor:'rgb(146, 100, 161)',
    eyesColor:'blue'
  },
  {
    name: WIZARD_NAMES[3],
    lastname: WIZARD_LASTNAMES[6],
    coatColor:'rgb(0, 0, 0)',
    eyesColor:'green'
  },
  {
    name: WIZARD_NAMES[6],
    lastname: WIZARD_LASTNAMES[2],
    coatColor:'rgb(56, 159, 117)',
    eyesColor:'yellow'
  }
  ];

for (var i = 0; i < wizards.length; i++); {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);

  }

