import { GlobalStyle } from './GlobalStyle';

import FormContact from './FormContact';
import SearchFilter from './SearchFilter';
import ListContact from './ListContact';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <SearchFilter />
      <ListContact />
    </div>
  );
}
