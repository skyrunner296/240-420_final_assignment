import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', }} >
        Birds gallery
      </h1>
      <div style={{ margin: 'auto', width: '50%' }}>
        <Carousel>
          <div>
            <img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
            <p className="legend">Bird 1</p>
          </div>
          <div>
            <img src="https://media.istockphoto.com/photos/close-up-snowy-owl-eye-with-wooden-background-picture-id986720632?b=1&k=20&m=986720632&s=170667a&w=0&h=Xc2AyG71OPENSHuMKFDwrFvyXtmLAfVq94D12YrH5Y4=" />
            <p className="legend">Bird 2</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1555267648-6a4efdb37f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <p className="legend">Bird 3</p>
          </div>
        </Carousel>
      </div>

      <h1 style={{ textAlign: 'center', }} >

        Dog gallery
      </h1>
      <div style={{ margin: 'auto', width: '50%' }}>
        <Carousel>
          <div>
            <img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
            <p className="legend">Dog 1</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1514373941175-0a141072bbc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
            <p className="legend">Dog 2</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1606583287991-cbc2a7794b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" />
            <p className="legend">Dog 3</p>
          </div>
        </Carousel>
      </div>

      <h1 style={{ textAlign: 'center', }} >

        Cat gallery
      </h1>
      <div style={{ margin: 'auto', width: '50%' }}>
        <Carousel>

          <div>
            <img src="https://images.unsplash.com/photo-1538128835124-7805d3fd3f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <p className="legend">Cat 1</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
            <p className="legend">Cat 2</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1606487167122-2677c9f0c2fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
            <p className="legend">Cat 3</p>
          </div>
        </Carousel>
      </div >
    </div>
  );
}

export default App;