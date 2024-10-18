import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainPage from "./main.ui";

describe("app render", () => {
  it("render taskts", () => {
    const { container } = render(<MainPage />);
    expect(container).toHaveTextContent("메인페이지");
  });
});
