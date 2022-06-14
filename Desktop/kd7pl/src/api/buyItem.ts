type BuyOptions = {
  count: number;
  uniqueId: number;
};

export default function buyItem({ count, uniqueId }: BuyOptions) {
  console.log("count", count);
  console.log("uniqueId", uniqueId);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Successful");
    }, 1000);
  });
}
