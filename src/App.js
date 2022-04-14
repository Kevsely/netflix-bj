import MenuItem from './components/menu-item/menu-item.component';

import './App.scss';
import NotificationButton from './components/notification-button/notification-button.component';
import SearchButton from './components/search-button/search-button.component';

function App() {
  return (
    <div className="App">
      <NotificationButton />
      <SearchButton />
    </div>
  );
}

export default App;


{
  /*
    Home-Page
    --Header-Cmp
      --MenuItem-Cmp--OK
      --NotificationButton--OK
      --SearchButton
      --UserButton
    --Synopsis-Cmp
    --CollectionsOverview-Cmp
  */
}