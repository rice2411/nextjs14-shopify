import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [
  {
    id: 1,
    title: "React",
    description: `The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.`,
    icon: "/images/react.svg",
  },
  {
    id: 2,
    title: "NextJS",
    description: `Used by some of the world's largest companies, Next.js enables you to create
high-quality web applications with the power of React components.`,
    icon: "/images/next.svg",
  },
  {
    id: 3,
    title: "Firebase",
    description: `Discover Firebase, Google's mobile and web app development platform that helps developers build apps and games that users will love.`,
    icon: "/images/firebase.svg",
  },
  {
    id: 4,
    title: "Redux",
    description: `Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.`,
    icon: "/images/redux.svg",
  },
  {
    id: 5,
    title: "TailwindCSS",
    description: `Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.`,
    icon: "/images/tailwindcss.svg",
  },
  {
    id: 6,
    title: "Shopify",
    description: `A leading e-commerce platform that allows individuals and businesses to create and manage online stores`,
    icon: "/images/shopify.svg",
  },
  {
    id: 7,
    title: "GraphQL",
    description: `GraphQL queries access not just the properties of one resource but also smoothly follow references between them`,
    icon: "/images/grahpql.svg",
  },
  {
    id: 8,
    title: "Typescript",
    description: `TypeScript extends JavaScript by adding types to the language.`,
    icon: "/images/typescript.svg",
  },
  {
    id: 9,
    title: "Docker",
    description: `A platform designed to help developers build, share, and run container applications. We handle the tedious setup, so you can focus on the code.`,
    icon: "/images/docker.svg",
  },
];

const featuresSlice = createSlice({
  name: "features",
  initialState: initialState,
  reducers: {
    addPosts: (state, action) => {
      state.push(...action.payload);
    },
    addPost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    updatePost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post: any) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
      }
    },
    deletePost: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      return state.filter((post: any) => post.id !== postId);
    },
  },
});

export const { addPosts, addPost, updatePost, deletePost } =
  featuresSlice.actions;
export default featuresSlice.reducer;
