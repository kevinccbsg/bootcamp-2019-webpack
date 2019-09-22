import styles from './css/styles.css';
import renderSomething from './js/render';
import './scss/style.scss';

console.log('Handling CSS');

const template = () => `
  <div class="${styles.myExample}">Lorem ipsum dolor</div>
`;

renderSomething(template(), document.body);
