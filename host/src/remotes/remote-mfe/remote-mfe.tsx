import React, { Suspense, lazy } from "react"
import Fallback from "../shared/fallback"
import mfesConfig from "../../config/remotes.config"

const Remote = lazy(mfesConfig.remote)

const RemoteMfe = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Remote />
    </Suspense>
  )
}

export default RemoteMfe
