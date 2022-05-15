import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "marine-blog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "82d4a88138e04b44b27d56d575c3ca5eb6ed",
});
