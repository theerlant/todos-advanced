import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./input";

describe("Input Component", () => {
  it("renders correctly with expected placeholder", () => {
    render(<Input value="" onChange={() => {}} />);
    const input = screen.getByPlaceholderText(/tambah tugas baru/i);
    expect(input).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Input value="" onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct value based on props", () => {
    render(<Input value="Belajar Jest DOM" onChange={() => {}} />);
    const input = screen.getByDisplayValue("Belajar Jest DOM");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange handler smoothly when typing", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Input value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/tambah tugas baru/i);

    await user.type(input, "a");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
