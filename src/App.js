import './App.scss';
import PreviewCard from './components/preview-card/preview-card.component';

function App() {
    return (
        <div className="App">
            <PreviewCard orientation={"landscape"} />
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
        --CustomButton--OK
      --CollectionsOverview-Cmp
        --PreviewCard
    */
}