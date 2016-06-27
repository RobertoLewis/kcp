//category
//this will contain individual list items
// it accepts an array of ResultsListItem components
import React from 'react';

const resultsCategory = (props) => {

  let thumbnails = props.visiblePictures.map((image, idx) => {
      return <ResultsListItem image={"/media/alias/" + image.uuid} caption={image.title} showModal={props.showModal} key={idx} />
      });



  return (
    <div className="row">{thumbnails}</div>
  )

}

export default ResultsCategory;
