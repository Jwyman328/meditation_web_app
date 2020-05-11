export function createGraphDataFromRaw(rawDataArray:number[]) {
    let count = -1;
    let graphFormat = rawDataArray.map((moodPoint) => {
      count = count + 1;
      return { x: count, y: moodPoint, info: '' };
    });
    return graphFormat;
  }