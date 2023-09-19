import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// 2. Test that the "Loading.." text is generated.
test("should render Loading.. text", () => {
  render(<App />);
  expect(screen.getByText("Loading..")).toBeInTheDocument();
});

// 3. Test that the right amount of User Cards are generated.
test("should render the right amount of user cards", async () => {
  render(<App />);
  const user = userEvent.setup();
  await waitFor(async () =>
    expect(screen.queryByText("Loading..")).not.toBeInTheDocument()
  );

  const btn = screen.getByRole("button");
  await user.click(btn);

  const userCards = screen.getAllByText("Email:", { exact: false });
  expect(userCards).toHaveLength(3);
});

// 4. Test that there are no user cards when the user presses the toggle button.
test("should display no user cards after press of toggle button", async () => {
  render(<App />);
  const user = userEvent.setup();
  await waitFor(async () =>
    expect(screen.queryByText("Loading..")).not.toBeInTheDocument()
  );

  const btn = screen.getByRole("button");
  await user.dblClick(btn);

  expect(
    screen.queryByText("Email:", { exact: false })
  ).not.toBeInTheDocument();
});

// 5.Test that the text "All users currently hidden" appears when pressing the toggle button.
test("should display the text 'User card is hidden' after toggling the button", async () => {
  render(<App />);
  const user = userEvent.setup();
  await waitFor(async () =>
    expect(screen.queryByText("Loading..")).not.toBeInTheDocument()
  );

  const btn = screen.getByRole("button");
  await user.dblClick(btn);

  expect(screen.getByText("All users currently hidden")).toBeInTheDocument();
});
