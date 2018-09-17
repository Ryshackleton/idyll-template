import { csv } from 'd3';
import { fetchJSON, simulateDelayedFetch } from './utils';
import config from '../app.config';

const { PATH_TO_DIST_DATA } = config;

export default {
  myData: fetchJSON(`${PATH_TO_DIST_DATA}/example-data.json`),
  dataFromCSV: csv(`${PATH_TO_DIST_DATA}/example-data.csv`),
  delayedFetch: simulateDelayedFetch(1500, []),
};
