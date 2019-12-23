"use strict;"

import React from "react"

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  { apiKey, clientId }
) => {
  setHeadComponents(
    <React.Fragment key="plugin-google-gapi">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var __plugin_google_gapi_initialized = new Proxy(
              {},
              {
                get: (obj, prop) => {
                  return obj.hasOwnProperty(prop) ? obj[prop] : false
                }
              }
            )

            function __plugin_google_gapi_auth_initClient() {
              let discoveryURLs = [
                'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
              ]

              let scopes = [
                'openid',
                'profile',
                'email',
                'https://www.googleapis.com/auth/drive.appdata',
              ]

              console.debug("Intializing GAPI client...")
              gapi.client.init({
                apiKey: '${apiKey}',
                discoveryDocs: discoveryURLs,
                clientId: '${clientId}',
                scope: scopes.join(' '),
              }).then(() => {
                console.log('Client initialized...')
                __plugin_google_gapi_initialized.client = true
                __plugin_google_gapi_initialized.auth2 = true
              }).catch((error) => {
                console.log(error)
              })
            }

            function __plugin_google_gapi_init() {
              console.debug("Intializing GAPI lib...")
              gapi.load('auth2:client', {
                callback: __plugin_google_gapi_auth_initClient,
                onerror: () => {console.error("gapi.load failed")},
              })
            }
          `,
        }}
      />
    </React.Fragment>
  )

  setPostBodyComponents(
    <script
      src="https://apis.google.com/js/api.js?onload=__plugin_google_gapi_init"
      async
      defer
    />
  )
}
