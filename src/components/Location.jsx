import React from "react";
import ListItem from "./ListItem";
const Location = () => (
  <section id="location">
    <div>
      <h2>Location</h2>
    </div>
    <h3>I am in Pyrite Town Orre!</h3>
    <ul>
      <ListItem
        title="How to find me"
        description={"Go to the very entrance of Pyrite Town in Orre."}
      ></ListItem>
      <ListItem
        title="Town name"
        description={"Pyrite Town (Japanese: パイラタウン Pyra Town)"}
      ></ListItem>
      <ListItem
        title="Town description"
        description={"The town is hewn out of a crimson-colored canyon and is laced with bits of old trash and mining debris, the latter a reminder of the town's mining past. Most buildings and machinery found within Pyrite are saturated with rust."}
      ></ListItem>
      <ListItem
        title="Bulbapedia page"
        description={
            <a
            rel="noreferrer"
            target="_blank"
            href="https://bulbapedia.bulbagarden.net/wiki/Pyrite_Town"
          >
            click here.
          </a>
        }
      ></ListItem>
    </ul>
  </section>
);

export default Location;
