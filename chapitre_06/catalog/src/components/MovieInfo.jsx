import React from "react";


class MovieInfo extends React.Component {
    
    
  renderPleasewait(){
    return(
      "please wait a seconde"
    )
  }

  renderMovie(){

    const paramId = parseInt(this.props.match.params.ID)
    const movieElem = this.props.movies.find(elem => elem.id === paramId)

    return (
        <div>
            <p> title = {movieElem.title}</p>
            <p>Director {movieElem.director}</p>
            <p>Description{movieElem.description}</p>
            <div>
                <h3>Stars</h3>
                <ul>
                    {movieElem.stars.map((elem , index) => <li key={index}>{elem}</li>)}
                </ul>
            </div>
            <img src={movieElem.image} alt=""/>
        </div>
    )
}
  
    render() {
        if(this.props.movies.length === 0){
            return this.renderPleasewait()
        }else{
            return this.renderMovie()
        }

       

}
}
export default MovieInfo;