import CarnetPage from './../Pages/CarnetPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import LargeButton from './../Components/Buttons/LargeButton'

function HomePage() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'row',
        }}>
            Statistique
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: 20,
                width: '100%',
                border: '1em',
                bordelColor: 'red',
                height: '15em',
                backgroundColor: 'white',
            }}>
                <div> <p style={{}}> 100 </p> Carnet(s) </div>
                <div> 100 Note(s) </div>
                <div> 100 cat</div>
            </div>


            <div style={{
                width: '100%',
                height: '46em',
                backgroundColor: 'white',
            }}>
                <CarnetPage />
            </div>
        </div>
    );
}

export default HomePage;
