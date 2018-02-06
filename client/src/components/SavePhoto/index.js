import React, {Component} from "react";
import {connect} from "react-redux";
// import {getPhotos} from "../../redux/flickr";
import {savePhoto, addBoards, deletePhoto} from "../../redux/addFlickrImages";
// import {Link} from "react-router-dom";
import "./save.css"

class SavePhoto extends Component {
    constructor(props){
        super(props);
        this.state = {
            boards: [],
        }
    }

    componentDidMount(){
          this.props.addBoards();
    }

    render() {
        return (
            <div className="img-container">
                <div name="board">
                    {this.props.flickr.boards.map((board, i) => {
                        return (
                            <div key ={board._id + i}>
                                <h1 className="title">{board.title}</h1>
                                {board.img.map((photoUrl, i) => {
                                    console.log(photoUrl);
                                    return (
                                        <div key={photoUrl + i} className="imageThumbs">
                                            <img src={photoUrl}/>
                                            <br/>
                                            <button className="delete-button" onClick={() => this.props.deletePhoto(board._id, photoUrl)}>Delete</button>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default connect(state => state, {savePhoto, addBoards, deletePhoto})(SavePhoto)
