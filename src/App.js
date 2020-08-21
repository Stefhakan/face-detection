import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import Nav from './components/Nav/Nav';
import FaceDetect from './components/FaceDetect/FaceDetect'
// import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({
  apiKey: '000944692d3445e685276c5d6b5f9387'
 });

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 400
        }
      }
    }
}


class App extends React.Component {
  constructor(){
    super()
    this.state ={
      input:'',
      imageUrl:'',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
      params={particlesOptions} 
      />
        <Nav />
        {/*<Rank />*/}
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onSubmit}
        />
        <FaceDetect box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );

  }
}

export default App;
