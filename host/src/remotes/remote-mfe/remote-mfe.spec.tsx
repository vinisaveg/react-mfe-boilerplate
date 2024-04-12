import React from "react"
import { render, waitFor } from "@testing-library/react"
import RemoteMfe from "./remote-mfe"

jest.mock("../../config/remotes.config.ts", () => ({
  remote: () => import("../../test/mocks/remote.mock"),
}))

describe("remote-mfe", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Should render the Fallback", () => {
    const { getByTestId } = render(<RemoteMfe />)

    const fallback = getByTestId("loading")

    expect(fallback).toBeInTheDocument()
  })

  it("Should render the RemoteMfe", async () => {
    const { getByTestId } = render(<RemoteMfe />)

    // waitFor needed due to Lazy import for the remote module
    const remoteMfe = await waitFor(() => getByTestId("remote-mock"))

    expect(remoteMfe).toBeInTheDocument()
  })
})
