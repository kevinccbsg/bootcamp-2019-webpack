import styles from './css/styles.css';
import renderSomething from './js/render';

console.log('Handling CSS');

const template = () => `
  <div class="${styles.myExample}">Lorem ipsum dolor</div>
`;

renderSomething(template(), document.body);
