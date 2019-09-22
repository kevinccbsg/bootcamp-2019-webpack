import page from 'page';
import { renderShowsDOM } from './shows';
import { hideFilter, showFilter } from './navbar';
import { showQuotesForm, hideQuotesForm } from './ui';
import renderDetail from './detail';
import addQuoteListener from './quotesForm';

page('/', () => { // eslint-disable-line
  console.log('Home page');
  showFilter();
  hideQuotesForm();
  renderShowsDOM();
});
page('/detail/:id', ctx => {
  console.log('Detail');
  const { params: { id } } = ctx;
  hideFilter();
  showQuotesForm();
  renderDetail(id);
  addQuoteListener(id);
});
page();
