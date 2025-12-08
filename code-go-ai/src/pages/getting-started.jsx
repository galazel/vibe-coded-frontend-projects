import React from "react";
import { programmingTopics } from "../constants/data";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

export function NewProblem() {
  return (
    <main className="grid grid-rows-[20vh_1fr] items-center p-5">
      <section className="flex justify-center  h-[20vh] items-center">
        <h1>What problem are you looking for to solve?</h1>
        <p>Choose from our topics available below</p>
      </section>
      <ItemGroup className="grid grid-cols-5 gap-5 ">
        {programmingTopics.map((topic, index) => (
          <Item key={index} variant="outline">
            <ItemHeader>
              <img
                src={topic.logo}
                alt={topic.name}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{topic.title}</ItemTitle>
              <ItemDescription>{topic.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </main>
  );
}

export function NewQuiz() {
  return <h1>new project</h1>;
}
