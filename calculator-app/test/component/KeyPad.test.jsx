import { render, screen } from "@testing-library/react";
import KeyPad from "../../src/components/keypad/KeyPad";
import { describe, it, vi, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { buttonsLayout } from "../../src/utils/keypadLayout";

describe("Button component", () => {
  it("check button is called with onClick function", async () => {
    const onClick = vi.fn();
    render(<KeyPad handleButtonClick={onClick} />);
    const user = userEvent.setup();
    for (const btn of buttonsLayout) {
      await user.click(screen.getByRole("button", { name: btn }));
      expect(onClick).toHaveBeenCalled();
    }
  });
});
