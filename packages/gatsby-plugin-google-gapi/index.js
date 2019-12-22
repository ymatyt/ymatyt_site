"use strict;"
import { useState, useEffect } from "react"

var initDone = false
var authStatusListeners = new Set()

function metaAuthStatusListener(status) {
  let localAuthStatusListeners = new Set(authStatusListeners)
  for (let listener of localAuthStatusListeners) {
    listener(status)
  }
}

;(function() {
  if (typeof window !== `undefined`) {
    var handle = setTimeout(function f() {
      console.debug("handle: %s", handle)
      console.groupCollapsed("Trying to attach global auth status listener.")
      if (
        !window.hasOwnProperty("__plugin_google_gapi_initialized") ||
        !window.__plugin_google_gapi_initialized.auth2
      ) {
        console.debug(
          "Failed to global auth status listener. GAPI auth2 not yet initialized."
        )
        console.groupEnd()
        handle = setTimeout(f, 100)
        return
      }
      console.debug("Attached global auth status listener.")
      window.gapi.auth2
        .getAuthInstance()
        .isSignedIn.listen(metaAuthStatusListener)
      clearTimeout(handle)
      handle = null
      console.groupEnd()
      initDone = true
    }, 0)
  }
})()

export function registerAuthStatusListener(handler) {
  authStatusListeners.add(handler)
}

export function useAuthStatus() {
  const [isAuthed, setIsAuthed] = useState(null)

  useEffect(() => {
    let handle = setTimeout(function f() {
      console.groupCollapsed("Trying to register auth status listener.")
      if (!initDone) {
        console.debug(
          "GAPI for Gatsby not yet initialized...Will try again in a bit..."
        )
        console.groupEnd()
        handle = setTimeout(f, 100)
        return
      }
      console.debug("GAPI for Gatsby initialized...")

      console.debug("Adding auth status listener.")
      registerAuthStatusListener(status => {
        console.info("User login status changed: %s", status)
        setIsAuthed(status)
      })
      setIsAuthed(window.gapi.auth2.getAuthInstance().isSignedIn.get())

      console.groupEnd()

      clearTimeout(handle)
      handle = null
    }, 0)
    return () => {
      if (handle != null) clearTimeout(handle)
    }
  }, [])

  return isAuthed
}

export function loginUser() {
  if (!initDone) {
    console.debug(
      "Can't login yet since GAPI for Gatsby isn't yet initialized..."
    )
    return
  }
  window.gapi.auth2.getAuthInstance().signIn()
}

export function logoutUser() {
  if (!initDone) {
    console.debug(
      "Can't login yet since GAPI for Gatsby isn't yet initialized..."
    )
    return
  }
  window.gapi.auth2.getAuthInstance().signOut()
}
