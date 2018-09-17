import { keys, values } from 'lodash';
import dataFetches from './dataFetches';

export default async () => {
  const datasetNamesArray = keys(dataFetches);
  const datasetPromisesArray = values(dataFetches);

  // fetch the data and reaassign the dataset to the appropriate dataset name
  return (await Promise.all(datasetPromisesArray))
    .reduce((acc, dataSet, index) => {
      return {
        ...acc,
        [datasetNamesArray[index]]: dataSet,
      };
    }, {});
};
