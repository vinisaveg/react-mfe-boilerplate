import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
