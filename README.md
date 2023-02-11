# Course Tracker Airtable Severless

A course tracker app using airtable proxy server and hosted on cloudflare worker

**Link to project:** https://course-tracker-airtable-cloudflare-severless.pages.dev/

## How It's Made:

**Tech used:**<p>![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5) ![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3) ![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript) ![REACT BADGE](https://img.shields.io/static/v1?label=|&message=REACT.JS&color=2b625f&style=plastic&logo=react) ![CLOUDFLARE BADGE](https://img.shields.io/static/v1?label=|&message=CLOUFLARE&color=316c5e&style=plastic&logo=cloudflare) ![AIRTABLE BADGE](https://img.shields.io/static/v1?label=|&message=AIRTABLE&color=bbb111&style=plastic&logo=airtable)</p>

## Optimizations

One of the first thing I would optimize and refactor the code to increase efficiency and productivity

## Lessons Learned:

Utilized the airtable proxy server using to protect user api keys and base id from client side. Also working cloudflare worker commmand run the severless function

## Usage

### Prerequisites

- Cloudflare account with [Workers](https://www.cloudflare.com/products/cloudflare-workers/) enabled.
- An [Airtable Base ID](https://community.airtable.com/t/what-is-the-app-id-where-do-i-find-it/2984) and your [Airtable API key](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-).
- Node and Node Package Manager ([npm](https://www.npmjs.com/get-npm)).
- Familiarity with your computer's terminal/command line interface.

### Routing

By default, the routes for each of your tables are available at `YOUR_CLOUDFLARE_DOMAIN/RESOURCE_NAME`. For example, if my custom domain is `http://api.example.com` and the table I want to access is called `users`, I would access the API at `http://api.example.com/users`.

You can change this routing using a `PROXY_PREFIX` as described in the **Configuration** section below.

### Configuration

In addition to the required `AIRTABLE_API_KEY` and `AIRTABLE_API_BASE_ID` variables, you can also set the following configuration options as ENV vars:

- `AIRTABLE_API_URL` - Defaults to `https://api.airtable.com`.
- `AIRTABLE_API_VERSION` - Defaults to `v0`.
- `PROXY_PREFIX` - Use this if your Cloudflare worker's routes are prefixed by something before the Airtable resource name. For example, you may want to call `mycustomdomain.com/api/posts` instead of `mycustomdomain.com/posts`. In this example, you would add `api` as a prefix.
- `ALLOWED_TARGETS` - Use this to lock down your Airtable API to specific resources and methods. For example, a stringified JSON object like this: `'[{"resource":"posts","method":"GET,PUT"},{"resource":"comments","method":"*"}]'` will allow `GET` and `PUT` requests on the `posts` resource and all request methods on the `comments` resource. Allows all methods for all resources by default.
- `PROXY_CACHE_TIME` - Defaults to `0`. The number of seconds set on the `Cache-Control` header to use Cloudflare's caching.

## Installation:

1. Clone repo
1. run `npm intall`
1. cd worker update AIRTABLE_API_KEY
1. cd worker update AIRTABLE_API_BASE_ID
1. update the fetch URL = `https://airtable-proxy-worker.signalnerves.workers.dev/`
1. update airtable table name = `courses`

## Note:

The AIRTABLE*API_KEY and AIRTABLE_API_BASE_ID should be set using `wrangler secret`, a subcommand of `wrangler` for setting \_encrypted environment varibles*. Run `wrangler secret put` as seen below, and paste in your API key:

```sh
$ wrangler secret put AIRTABLE_API_KEY
Enter the secret text you would like assigned to the variable AIRTABLE_API_KEY on the script named airtable-form-handler:
******
🌀  Creating the secret for script name airtable-form-handler
✨  Success! Uploaded secret AIRTABLE_API_KEY.
```
