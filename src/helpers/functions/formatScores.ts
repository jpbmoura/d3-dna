export const formatScores = (data: any, prevState: any, field: string) => {
  const isLeader = data.filter(
    (item: any) => item["Você possui papel de liderança na Going2?"] !== "Não"
  );
  const isNotLeader = data.filter(
    (item: any) => item["Você possui papel de liderança na Going2?"] === "Não"
  );

  return {
    average:
      data.reduce((acc: number, item: any) => acc + item[field], 0) /
      data.length,
    leaderAverage:
      isLeader.reduce((acc: number, item: any) => acc + item[field], 0) /
      isLeader.length,
    notLeaderAverage:
      isNotLeader.reduce((acc: number, item: any) => acc + item[field], 0) /
      isNotLeader.length,
    asLeader: {
      "1": data.filter(
        (item: any) =>
          item[field] === 1 &&
          item["Você possui papel de liderança na Going2?"] !== "Não"
      ).length,
      "2": data.filter(
        (item: any) =>
          item[field] === 2 &&
          item["Você possui papel de liderança na Going2?"] !== "Não"
      ).length,
      "3": data.filter(
        (item: any) =>
          item[field] === 3 &&
          item["Você possui papel de liderança na Going2?"] !== "Não"
      ).length,
      "4": data.filter(
        (item: any) =>
          item[field] === 4 &&
          item["Você possui papel de liderança na Going2?"] !== "Não"
      ).length,
      "5": data.filter(
        (item: any) =>
          item[field] === 5 &&
          item["Você possui papel de liderança na Going2?"] !== "Não"
      ).length,
    },
    asNotLeader: {
      "1": data.filter(
        (item: any) =>
          item[field] === 1 &&
          item["Você possui papel de liderança na Going2?"] === "Não"
      ).length,
      "2": data.filter(
        (item: any) =>
          item[field] === 2 &&
          item["Você possui papel de liderança na Going2?"] === "Não"
      ).length,
      "3": data.filter(
        (item: any) =>
          item[field] === 3 &&
          item["Você possui papel de liderança na Going2?"] === "Não"
      ).length,
      "4": data.filter(
        (item: any) =>
          item[field] === 4 &&
          item["Você possui papel de liderança na Going2?"] === "Não"
      ).length,
      "5": data.filter(
        (item: any) =>
          item[field] === 5 &&
          item["Você possui papel de liderança na Going2?"] === "Não"
      ).length,
    },
    scores: {
      "1": data.filter((item: any) => item[field] === 1).length,
      "2": data.filter((item: any) => item[field] === 2).length,
      "3": data.filter((item: any) => item[field] === 3).length,
      "4": data.filter((item: any) => item[field] === 4).length,
      "5": data.filter((item: any) => item[field] === 5).length,
    },
  };
};
