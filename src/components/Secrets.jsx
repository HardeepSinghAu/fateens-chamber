import React from "react";
import Card from "./Card";

const Secrets = () => {
  const items = [
    {
      heading: "Discount #1",
      title: " 10% Off!",
      date: "Only on Monday",
      description:
        "All day, every Monday until December 1st. You know where to find me",
    },
    {
      heading: "Discount #2",
      title: "Lifetime subscription.",
      date: "Anytime.",
      description: "Infinite visits to my shop..",
    },
    {
      heading: "Event #1",
      title: "Purify your shadow pokemon.",
      date: "August 1st.",
      description: "Not a cult."
    },
  ];

  return (
    <section id="secrets">
      <div>
        <h2>Secrets</h2>
      </div>
      <h3>Here you will find my secret discounts and events just for you!</h3>
        
        
      {items.map(({ heading, title, date, description }, id) => (
        <Card
          key={id}
          heading={heading}
          title={title}
          date={date}
          description={description}
        ></Card>
      ))}
    </section>
  );
};

export default Secrets;
