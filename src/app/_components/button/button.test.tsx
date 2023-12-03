import { describe } from "node:test";
import { Button } from ".";
import { render, screen } from "@testing-library/react";
describe("Button Component", () => {
  test("renders a default button", () => {
    // const div = document.createElement("div");
    // ReactDOM.render(<Button>Click here</Button>, div);
    // document.body.appendChild(div);
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText("Click here")).toBeInTheDocument();
  });
  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>Click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
  test("applies the correct css class form different button variants", () => {
    const { rerender } = render(<Button variant="primary">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");
   
    rerender(<Button variant="info">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });
});
