import { useState, useEffect } from "react"

export const useAuthStatus = () => {
  const [isAuthed, setIsAuthed] = useState(null)

  useEffect(() => {
    let handle = setInterval(() => {
      if (!window.__plugin_google_gapi_initialized.auth2) {
        console.debug(
          "GAPI auth2 not yet initialized...Will try again in a bit..."
        )
        return
      }
      console.debug("GAPI auth2 initialized...")

      console.debug("Adding GAPI auth listener.")
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(status => {
        console.info("User login status changed: " + String(status))
        setIsAuthed(status)
      })
      setIsAuthed(window.gapi.auth2.getAuthInstance().isSignedIn.get())

      clearInterval(handle)
    }, 100)
    return () => {
      if (handle != null) clearInterval(handle)
    }
  }, [])

  return isAuthed
}

export const loginUser = () => {
  window.gapi.auth2.getAuthInstance().signIn()
}

export const logoutUser = () => {
  window.gapi.auth2.getAuthInstance().signOut()
}
