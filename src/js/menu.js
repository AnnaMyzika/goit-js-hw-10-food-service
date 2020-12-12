import templates from '../tempaltes/menu.hbs';

import menu from '../menu.json';

const renderMenu = templates(menu);

const menuItems = document.querySelector('.menu');

menuItems.insertAdjacentHTML('beforeend', renderMenu);