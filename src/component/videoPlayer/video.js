import React from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
const YOUR_API_KEY = 'AIzaSyCirAGaiTq85N0BR1bFV7hXQMDQtLUzY7c'

class Video extends React.Component{
    constructor(){
        super()
        this.state = {
            video : [],
            search : '',
            url:'https://www.youtube.com/watch?v=kJQP7kiw5Fk'
        }
    }



    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            search : this.state.search
        }
        this.setState({formData})
        console.log(formData,'formData')

        this.setState({
            search : ''
        })

        axios.get(`https://www.youtube.com/watch?v=kJQP7kiw5Fk`)
        .then(res => {
            const video = res.data
            console.log(video,'video')
        })
        .catch(err => {
            console.log(err)
        })
        

    }

    handleChange = (e) => {
        const search = e.target.value
        this.setState({search})
        console.log(search,'search')
    }

    render(){
        return(
            <div>
                <h4>Video</h4>
                <form onSubmit={this.handleSubmit}> 
                    <label>Search
                        <input type="text" value={this.state.search} id={this.state.search} onChange={this.handleChange} />
                        <input type="submit" value='Search' />
                    </label>
                </form>

                <ReactPlayer url={this.state.url} playing />
                
           
                
            </div>
        )
    }
}

export default Video