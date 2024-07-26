import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import ToggleBtn from "../../src/components/ToggleBtn/ToggleBtn";
import { themesArray } from "../../src/utils/ThemesArray";

describe("Check theme toggler", () => {
  const renderComponent = async () => {
    render(<ToggleBtn />);
    const user = userEvent.setup();
    await user.tab();
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).toHaveFocus();
    const themeBtns = screen.getAllByRole("button");
    const rootHtml = () => document.documentElement.getAttribute("class");

    return {
      user,
      themeBtns,
      rootHtml,
    };
  };

  it("check theme is changed for three times on root element", async () => {
    const { themeBtns, user, rootHtml } = await renderComponent();
    for (let btn in themeBtns) {
      await user.click(themeBtns[btn]);
      expect(rootHtml()).toBe(themesArray[btn]);
    }
  });

  it("Accessibility check of theme toggle button", async () => {
    const { themeBtns, user, rootHtml } = await renderComponent();
    for (let btn in [1, 2]) {
      await user.tab();
      fireEvent.keyDown(themeBtns[btn], { key: "Enter", code: "NumpadEnter" });
      expect(rootHtml()).toBe(themesArray[btn]);
    }
  });
});
