import './App.scss';
import CustomButton from './components/custom-button/custom-button.component';

function App() {
    return (
        <div className="App">
            <CustomButton main>Watch Now</CustomButton>
        </div>
    );
}

export default App;


{
    /*
      Home-Page
      --Header-Cmp--OK
        --MenuItem-Cmp--OK
        --NotificationButton--OK
        --SearchButton--OK
        --UserButton--OK
      --Synopsis-Cmp
        --CustomButton
      --CollectionsOverview-Cmp
    */
}