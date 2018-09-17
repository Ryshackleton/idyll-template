import { csv } from 'd3';
import { fetchJSON, simulateDelayedFetch } from './utils';
import config from '../app.config';

/**
 * @return {[Array]} of objects with promises that resolve to fetched data
 */
export default async () => {
  const { PATH_TO_DIST_DATA } = config;
  return [
    { myData: await fetchJSON(`${PATH_TO_DIST_DATA}/example-data.json`) },
    { csvExample: await csv(`${PATH_TO_DIST_DATA}/example-data.csv`) },
    { delayedFetch: await simulateDelayedFetch(1500, []) },
  ];
};
