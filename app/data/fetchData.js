import dataFetches from './dataFetches';

export default async () => {
  return (await Promise.all(await dataFetches()))
    .reduce((acc, obj) => { // flatten array of objects to single object
      return { ...acc, ...obj };
    }, {});
};
