
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
                height: '15em',
                backgroundColor: 'blue',
            }}>
                <div> <p style={{}}> 100 </p> Carnet(s) </div>
                <div> 100 Note(s) </div>
                <div> 100 cat</div>
            </div>


            <div style={{
                width: '100%',
                height: '46em',
                backgroundColor: 'red',
            }}>
                <LargeButton />
            </div>
        </div>
    );
}

export default HomePage;
