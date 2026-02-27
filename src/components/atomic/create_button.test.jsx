import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateButton from "./create_button";

describe("CreateButton Component", () => {
  it("renders correctly with default props", () => {
    render(<CreateButton />);
    const button = screen.getByRole("button", { name: /tambah/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<CreateButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with type submit when passed as prop", () => {
    render(<CreateButton type="submit" />);
    const button = screen.getByRole("button", { name: /tambah/i });
    expect(button).toHaveAttribute("type", "submit");
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<CreateButton onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /tambah/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
