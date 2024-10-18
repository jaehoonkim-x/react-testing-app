import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";

describe("list render", () => {
  it("render lists", () => {
    const items = ["데이터1"];
    const { container } = render(<List items={items} />);
    screen.debug();
    expect(container).toHaveTextContent("데이터1");
  });
});
