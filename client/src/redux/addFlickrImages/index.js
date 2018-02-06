import axios from "axios";


export function searchPhotos(searchWord) {
      return dispatch => {
      let apiKey = '821a771c6461a139ea575637fea49d22';
      axios.get(`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchWord}`)
          .then(response => {
              console.dir(response)
              dispatch({
                  type: "SEARCH_PHOTOS",
                  item: response.data.photos.photo
            });
        })
    }
}

export function savePhoto(boardId, photo) {
      return (dispatch) => {
      axios.put(`/flickr/add-image/${boardId}`, {image: photo})
          .then(response => {
              dispatch({
                  type: "SAVE_PHOTO",
                  data: response.data
            });
        })
    }
}

export function deletePhoto(boardId, imgUrl) {
      return (dispatch) => {
      axios({method:"delete", url:`/flickr/`, data: {boardId, imgUrl}})
          .then(response => {
              dispatch({
                  type: "DELETE_PHOTO",
                  data: response.data
            });
        })
    }
}

export function addBoards() {
     return (dispatch) => {
     axios.get(`/flickr`)
        .then(response => {
            dispatch({
                type: "GET_BOARDS",
                data: response.data
           });
       })
    }
}

const defaultObject = {
    photos: [],
    boards: []
}

export default function reducer(prevState = defaultObject, action) {
    switch (action.type) {
        case "SEARCH_PHOTOS":
            return {...prevState, photos: action.item}
        case "SAVE_PHOTO":
            const updatedBoards = prevState.boards.map(board => {
                return board._id === action.data._id ? action.data : board
            })
            return {...prevState, boards: updatedBoards};

        case "GET_BOARDS":
            return {...prevState, boards: action.data};
        case "DELETE_PHOTO": {
            let index = prevState.boards.findIndex(item => item._id === action.data._id);
            const updatedBoards = prevState.boards.map(board => {
                return board._id === action.data._id ? action.data : board
            })
            return {...prevState, boards: updatedBoards}
        }
        default:
            return prevState;
    }
}
