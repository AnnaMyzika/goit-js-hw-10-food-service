const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');

const switchBtn = document.querySelector('#theme-switch-toggle');

localStorage.setItem('themeType', JSON.stringify(Theme));

const savedThemeType = localStorage.getItem('themeType');

const parsedThemeType = JSON.parse(savedThemeType);

let currentParsedTheme = localStorage.getItem('currentTheme');

if (localStorage.getItem('currentTheme') === null) {
  body.classList.add(parsedThemeType.LIGHT);
} else {
  body.classList.add(currentParsedTheme);
}

if (body.classList.contains(parsedThemeType.DARK)) {
  switchBtn.checked = true;
}

switchBtn.addEventListener('change', themeSwitch);

console.log(body);

function themeSwitch() {
  if (body.classList.contains(parsedThemeType.DARK)) {
    body.classList.replace(
      parsedThemeType.DARK,
      parsedThemeType.LIGHT,
    );
    localStorage.setItem('currentTheme', body.className);
    switchBtn.checked = false;
  } else {
    body.classList.replace(
      parsedThemeType.LIGHT,
      parsedThemeType.DARK,
    );
    localStorage.setItem('currentTheme', body.className);
    switchBtn.checked = true;
  }
}
