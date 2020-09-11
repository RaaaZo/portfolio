import React from "react";
import { Header } from "components/atoms/Header";

export default {
  title: "atoms/Header",
  component: Header
};

export const primary = () => <Header>About me </Header>;
export const title = () => <Header title>About me </Header>;
