import React from "react";
import { Button } from "components/atoms/Button";

export default {
  title: "atoms/Button",
  component: Button
};

export const primary = () => <Button>HTML</Button>;
export const projectButton = () => <Button projectButton>HTML</Button>;
