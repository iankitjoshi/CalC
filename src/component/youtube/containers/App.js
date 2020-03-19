import React from 'react';
import { Container } from "react-bootstrap";
import { ViewVideo , VideoList , Search} from '../containers';
import searchYouTube from 'youtube-api-search';
import '../../../assets/youtube.scss';


const KEY = "AIzaSyC06F2cPmmfxiJSa7XXdTrQ5VjbmC4rkyU";

class Apps extends React.Component{

  state = {
    videoList: [],
    url: 'https://www.youtube.com/watch?v=ESKOqqa5joA',
    texttosearch : ""
  }

  componentDidMount() {
    searchYouTube({ key: KEY, term: "", maxResults: 20}, (videos) => {
      this.setState({ videoList: videos });
    }); 
  }

  playThisVideo = (id) => {
    this.setState({ url: `https://www.youtube.com/watch?v=${id}`})
  }                   

  enterText = (e) => {
    let { value } = e.target;
    this.setState({ texttosearch: value }, () => { });
  }

  searchResult = () => {
    searchYouTube({ key: KEY, term: this.state.texttosearch, maxResults: 20 }, (videos) => {
      this.setState({ videoList: videos });
    });
  }

  render() {
    return (
      <div className="appvideo">
        <Container>
          <Search onChange={this.enterText} searchResult={this.searchResult}/>
          <ViewVideo url={this.state.url}/>
          <VideoList list={this.state.videoList} playThisVideo={this.playThisVideo}/>
        </Container>
      </div>
    );
  }
}

export default Apps;
