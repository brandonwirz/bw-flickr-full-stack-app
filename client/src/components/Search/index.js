import React, {Component} from "react";
import {connect} from "react-redux";
import {searchPhotos, savePhoto, addBoards} from "../../redux/addFlickrImages";

// import {SavePhoto} from "../SavePhoto";
import "./search.css"
// import {Search} from "../../redux/flickr;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: "",
            search: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount(){
          this.props.addBoards();
    }

    onInputChange(event) {
        console.dir(event.target);
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value.substr(0,40)});//up to 40 characters
    }

    onSubmit(event) {
        event.preventDefault()
        if (this.state.search !== "") {
            this.props.searchPhotos(this.state.search);
        } else {
            alert("You must type something into the search box");
        }
    }

    handleSave(photo){
        if (this.state.board !== "") {
            this.props.savePhoto(this.state.board, photo);
        } else {
            alert("You must choose a board from the dropdown menu first");
        }
    }

    render() {
        const photos = this.props.flickr.photos.map((image, i) => {
            let src = `http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`
            let src2 = `http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg`
            return (
                <div className="imageThumbs" key={image.id}>
                    <a href={src2}  target="_blank">
                    <img src={src} alt={image.title}/></a>
                    <br/>
                    <button className="save-button" onClick={() => this.handleSave(src)}>save</button>
                </div>
            )
        });
        return(
            <div className="search">
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        className="input-search"
                        type="text"
                        placeholder=" Search"
                        value={this.state.value}
                        onChange={this.onInputChange}
                        name="search"/>
                    <button className="flickr-button">Flickr</button>&nbsp;
                    <select className="selector" name="board" onChange={this.onInputChange}>
                        <option value="">Choose a board</option>
                        {this.props.flickr.boards.map((board,id) => <option value={board._id} key={board._id}>{board.title}</option>)}
                    </select>

                </form>
                <div>{ photos }</div>
            </div>
        );
    }
}

export default connect(state => state, {searchPhotos, savePhoto, addBoards})(Search)
