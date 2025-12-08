import React, { useState } from "react";
import { programmingTopics } from "../constants/data";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "../components/ui/button";
import {useQuery} from "@tanstack/react-query"

export function NewProblem() {
  const [content, setContent] = useState(true);
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/problem/ai_generated_code_problem"
      );
      return await response.json();
    },
  });

  const handleTopic = () => {
    setContent(false);
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return content ? (
    <main className="grid grid-rows-[20vh_1fr] items-center p-5">
      <section className="flex justify-center  h-[20vh] items-center">
        <h1>What problem are you looking for to solve?</h1>
        <p>Choose from our topics available below</p>
      </section>
      <ItemGroup className="grid grid-cols-5 gap-5 ">
        {programmingTopics.map((topic, index) => (
          <Item key={index} variant="outline" onClick={handleTopic}>
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
  ) : (
    <main className="w-full h-full bg-red-400 grid grid-cols-3 gap-2">
      <div>
        <h1>{data.full_name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? "Updating..." : ""}</div>
      </div>
      <div>terminal</div>
      <div>output</div>
    </main>
  );
}

export function Projects() {
  return <h1>new project</h1>;
}
