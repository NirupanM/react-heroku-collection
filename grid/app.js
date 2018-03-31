var images = ["http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150",
             "http://placehold.it/150x150"]

function GridContainer(){
  return(
    <div className="container">
      {images.map(function(img){return <GridItem imgUrl={img}/>})}
    </div>
  )
}

function GridItem(props){
  return(
    <div className="col-xs-2">
      <img src={props.imgUrl}/>
    </div>
  )
}


ReactDOM.render(<GridContainer />, document.getElementById("grid"));