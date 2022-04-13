import MenuItem from './components/menu-item/menu-item.component';

import './App.scss';
import NotificationButton from './components/notification-button/notification-button.component';

function App() {
  return (
    <div className="App">
      <NotificationButton />
    </div>
  );
}

export default App;


{
  /*
    Home-Page
    --Header-Cmp
      OK--MenuItem-Cmp 
      --NotificationButton
      --SearchButton
      --UserButton
    --Synopsis-Cmp
    --CollectionsOverview-Cmp
  */
}