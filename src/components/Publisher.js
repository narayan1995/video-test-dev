// src/components/Publisher.js
import React from 'react';
import { OTPublisher } from 'opentok-react';
import CheckBox from './CheckBox';

// src/components/Publisher.js
class Publisher extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        audio: true,
        video: true,
        videoSource: 'camera'
      };
    }
   // src/components/Publisher.js
  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  changeVideoSource = (videoSource) => {
    (this.state.videoSource !== 'camera') ? this.setState({videoSource: 'camera'}) : this.setState({ videoSource: 'screen' })
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
  }
  
  render() {
    return (
      <div className="publisher">
        Publisher
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <OTPublisher
          properties={{
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined
          }}
          onError={this.onError}
        />
      </div>
    );
  }
}


  export default Publisher;