
function HomePage() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'row',
        }}>
            <div style={{
                borderWidth: " 10em",
                borderTop: "10em",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: 20,
                width: '100%',
                height: '15em',
                backgroundColor: 'blue',
            }}>
                <div> <p style={{}}> 100 </p> Carnet(s) </div>
                <div> 100 Note(s) </div>
                <div> 100 catégories</div>
            </div>


            <div style={{
                width: '100%',
                height: '46em',
                backgroundColor: 'blue', backgroundColor: 'red',
            }}>ok ok ok ok ok  </div>
        </div>
    );
}

export default HomePage;
