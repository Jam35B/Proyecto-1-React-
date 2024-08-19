import React from "react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";

describe("<App />", () => {
  test("should add a new item and remove item", async () => {
    const user = userEvent.setup();
    render(<App />);

    //buscar el input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    //buscar el form
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    const randomText = crypto.randomUUID();
    await user.type(input, randomText);
    await user.click(button!);

    //asegurar que el elemento sea agregado
    const list = screen.getByRole("list");
    expect(list).toBeDefined();
    expect(list.childNodes.length).toBe(1);

    //asegurando que lo podemos borrar
    const item = screen.getByText(randomText);
    const removeButton = item.querySelector("button");
    expect(removeButton).toBeDefined();

    await user.click(removeButton!);

    const noResults = screen.getByText("No hay elementos en la lista");
    expect(noResults).toBeDefined();
  });
});
