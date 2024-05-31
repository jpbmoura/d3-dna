export const formatScores = (data: any, prevState: any, field: string) => {
  return {
    average:
      data.reduce((acc: number, item: any) => acc + item[field], 0) /
      data.length,
    min: Math.min(...data.map((item: any) => item[field])),
    max: Math.max(...data.map((item: any) => item[field])),
    scores: {
      "1": data.filter((item: any) => item[field] === 1).length,
      "2": data.filter((item: any) => item[field] === 2).length,
      "3": data.filter((item: any) => item[field] === 3).length,
      "4": data.filter((item: any) => item[field] === 4).length,
      "5": data.filter((item: any) => item[field] === 5).length,
    },
  };
};
