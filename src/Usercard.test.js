import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

// 1. Test that the UserCard.jsx works with different props.
test("renders the props correctly", () => {
  const fakeUser2 = {
    name: "Björn",
    email: "bjorn.mansson@qaperformance.se",
    phone: "0700121212",
  };
  render(<UserCard user={fakeUser2} />);

  expect(screen.getByText("Björn", { exact: false })).toBeInTheDocument();
  expect(
    screen.getByText("bjorn.mansson@qaperformance.se", { exact: false })
  ).toBeInTheDocument();
  expect(screen.getByText("0700121212", { exact: false })).toBeInTheDocument();
});

// test("renders the props correctly", () => {
//   const fakeUser = {
//     name: "Björn",
//     email: "bjorn.mansson@live.se",
//     phone: "0760112233",
//   };
//   render(<UserCard user={fakeUser} />);

//   expect(screen.getByText("Björn")).toBeInTheDocument();
//   expect(
//     screen.getByText("bjorn.mansson@live.se", { exact: false })
//   ).toBeInTheDocument();
//   expect(screen.getByText("0760112233", { exact: false })).toBeInTheDocument();
// });
