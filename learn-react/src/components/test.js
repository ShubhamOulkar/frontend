function Test() {
  const desserts = [
    {
      title: "Chocolate Cake",
      description: "Chocolate cake is a cake flavored with melted chocolate",
      calories: 500,
    },
  ];

  const newDesserts = desserts.map((dessert) => {
    return {
      title: dessert.title.toUpperCase(), // this expression can not overwrite title property because of spread operator after expression. If you want to overwrite then use speread operator first then do all other manipulations.
      kCal: dessert.calories / 1000,
      ...dessert,
    };
  });

  const [data] = desserts.map((item) => {
    return { ...item };
  });

  //   console.log("data:", data);
  //   console.log("new:", newDesserts);

  return <div>test component</div>;
}

export default Test;
