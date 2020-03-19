import React from "react";
import { Row, Card } from "react-bootstrap";
import Thumb from 'video-thumbnail-url';
import '../../../assets/youtube.scss';


class VideoList extends React.Component{
    state = {
        videosInformation : []
    }

    createThumbnail = (props) => {
        let { list = [] } = props;
        console.log('props',props)

        let videosInformation = []
        list.map(item => {
            let result = {}
            console.log('list',list)

            Thumb(`https://www.youtube.com/watch?v=${item.id.videoId}`)
            .then(thumb_url => {
                result = { ...result, thumbnail: thumb_url, video: item.id.videoId };
                videosInformation.push(result);

                console.log(thumb_url,'thumb_url',videosInformation,'videosInformation')
                console.log(item.id.videoId,'item.id.videoId',result,'video')

                this.setState({ videosInformation: videosInformation }, () => {
                })
            });
        })
    }

    componentWillReceiveProps = (prevProps, nextProps) => {
        this.createThumbnail(prevProps);
    }

    render() {
        const { videosInformation } = this.state;
        return (
        <Row>
                {
                    this.props.list && this.props.list.map((item, index) => {
                        return <Card className="video-list" onClick={e => this.props.playThisVideo(videosInformation[index].video)}>
                                <Card.Img variant="top" src={`${videosInformation && videosInformation[index] && videosInformation[index].thumbnail}`} />
                            </Card>
                        })
                }   
        </Row>
        )
    }
}

export default VideoList