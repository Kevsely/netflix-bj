import MenuItem from './components/menu-item/menu-item.component';

import './App.scss';
import NotificationButton from './components/notification-button/notification-button.component';
import SearchButton from './components/search-button/search-button.component';
import UserButton from './components/user-button/user-button.component';

function App() {
  return (
    <div className="App">
      <NotificationButton />
      <SearchButton />
      <UserButton />
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
      --SearchButton--OK
      --UserButton
    --Synopsis-Cmp
    --CollectionsOverview-Cmp
  */
}