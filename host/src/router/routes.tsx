import React from "react"
import RemoteMfe from "../remotes/remote-mfe/remote-mfe"
import { RoutesList } from "./types"

export const routes: RoutesList = [
  {
    path: "/",
    element: <RemoteMfe />,
  },
]
