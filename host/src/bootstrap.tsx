import React from "react"
import { createRoot } from "react-dom/client"
import { Router } from "./router/router"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<Router />)
