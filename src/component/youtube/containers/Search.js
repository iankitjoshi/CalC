import React from "react";
import '../../../assets/youtube.scss';
const img1 = require('../../../img/search2.png')


class Search extends React.Component{

    render() {
        return (
            <div className="search">
                <label>
                    <input type="text" class="form-control"  placeholder=" Search" className="searchs" onChange={e => this.props.onChange(e)} />
                    <button type="button" className="search-btns"  onClick={this.props.searchResult}>
                        <img src={img1} className="search-btn" />
                    </button>   
                </label>
            </div>   
          
        )
    }
}

export default Search

