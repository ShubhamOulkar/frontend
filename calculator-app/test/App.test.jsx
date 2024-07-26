import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { describe, it, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";

describe("Test calculator app", () => {
  function renderComponent() {
    render(<App />);

    const user = userEvent.setup();

    const getBtnByRole = (btnText) =>
      screen.getByRole("button", { name: btnText });

    const inputField = screen.getByRole("textbox");

    const getDisplayValue = async (result) =>
      await screen.findByDisplayValue(result);

    const keyPad = ({ key, code }) =>
      fireEvent.keyDown(inputField, { key: key, code: code });

    return {
      user,
      inputField,
      getDisplayValue,
      btns: {
        evaluate: getBtnByRole("="),
        add: getBtnByRole("+"),
        sub: getBtnByRole("-"),
        divide: getBtnByRole("/"),
        mul: getBtnByRole("×"),
      },
      getBtnByRole,
      keyPad,
    };
  }

  it.each([
    { expression: "100-100*0+50", result: "150" },
    { expression: "10/0", result: "Infinity" },
    { expression: "5000+5*100/1000", result: "5,000.5" },
  ])(
    "check calculation screen: $expression",
    async ({ expression, result }) => {
      // Arrange
      const { user, inputField, btns, getDisplayValue } = renderComponent();
      //  Act
      await user.type(inputField, expression);
      await user.click(btns.evaluate);
      // Assert
      expect(await getDisplayValue(result)).toBeInTheDocument();
    }
  );

  it.each([
    { arith: "5+5", arithSymbol: "+", result: "10" },
    { arith: "5-5", arithSymbol: "-", result: "0" },
    { arith: "5*5", arithSymbol: "×", result: "25" },
    { arith: "5/5", arithSymbol: "/", result: "1" },
  ])("check keyboard for $arith", async ({ arithSymbol, result }) => {
    const { user, getBtnByRole, getDisplayValue, btns } = renderComponent();
    const btn5 = getBtnByRole("5");
    await user.click(btn5, 5);
    await user.click(getBtnByRole(arithSymbol));
    await user.click(btn5, 5);
    await user.click(btns.evaluate);
    expect(await getDisplayValue(result)).toBeInTheDocument();
  });

  it("checking numpad accessibility : 4*8=32 ", async () => {
    const { getDisplayValue, keyPad } = renderComponent();
    keyPad({ key: "4", code: "Numpad4" });
    keyPad({ key: "*", code: "NumpadMultiply" });
    keyPad({ key: "8", code: "Numpad8" });
    keyPad({ key: "Enter", code: "NumpadEnter" });
    expect(await getDisplayValue("32")).toBeInTheDocument();
  });

  it("checking reset (delete) button", async () => {
    const { user, inputField, getDisplayValue, getBtnByRole, btns } =
      renderComponent();
    await user.click(getBtnByRole("4"));
    await user.click(btns.divide);
    await user.type(inputField, "100");
    await user.click(btns.evaluate);
    expect(await getDisplayValue("0.04")).toBeInTheDocument();
    await user.click(getBtnByRole("RESET"));
    expect(await getDisplayValue("0")).toBeInTheDocument();
  });

  it("checking << DEL (backspace) button accessibility", async () => {
    const { user, getDisplayValue, getBtnByRole, keyPad } = renderComponent();
    for (let i = 0; i < 3; i++) {
      await user.click(getBtnByRole("8"));
    }
    await user.click(getBtnByRole("« DEL"));
    expect(await getDisplayValue("88")).toBeInTheDocument();
    keyPad({ key: "Backspace", code: "Backspace" });
    expect(await getDisplayValue("8")).toBeInTheDocument();
  });

  it("should not render anything when input is invalid/unexpected", async () => {
    const { getDisplayValue, keyPad } = renderComponent();
    keyPad({ key: "a", code: "keyA" });
    expect(await getDisplayValue("0")).toBeInTheDocument();
  });
});
