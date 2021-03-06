import React from "react";
import { List } from "./list";
import data from "./data.json";

// This default export determines where you story goes in the story list
export default {
  title: "Components/List",
  component: List,
};

const Template = (args) => <List items={data.items} />;

export const ListStory = Template.bind({});

ListStory.args = {
  /* the args you need here will depend on your component */
};
