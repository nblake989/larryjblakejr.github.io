// Find the copyright paragraph and replace "2023" with current year
const copyrightText = document.querySelector('.copyright').innerHTML;
document.querySelector('.copyright').innerHTML = copyrightText.replace('CURRENT_YEAR', new Date().getFullYear());
