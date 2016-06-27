// contains individual resultCategory components (dumb)
import React from 'react';
import ResultsListItem from './resultsListItem';
import ReactInfinite from 'react-infinite';

const ResultsList = (props) => {
  // console.log("the fucking props", props);

    let categories = [];
  for (let key in props.visiblePictures){
    let slash = key.lastIndexOf("/");
    let category = key.slice(0, slashOne);
    categories.push({

    });
  }
    const visiblePictures = props.visiblePictures.map((image, idx) => {
        return <ResultsCategory image={"/media/alias/" + image.uuid} caption={image.title} showModal={props.showModal} key={idx} />
        });

    return (

            <Infinite  elementHeight={200} preloadBatchSize={Infinite.containerHeightScaleFactor(0.5)} useWindowAsScrollContainer={true}>
                {visiblePictures}
                </Infinite>
        );



}

export default ResultsList;
