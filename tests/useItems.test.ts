import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe("useItems hook", () => {
  test("should add and remove items", () => {
    const { result } = renderHook(() => useItems());

    expect(result.current.items.length).toBe(0);

    act(() => {
      result.current.addItem("Jugar a VideoJuegos");
      result.current.addItem("Andar en Bicicleta");
    });

    console.log(result.current.items);
    expect(result.current.items.length).toBe(2);
  });
});
