# Uniform vNext Demos

This is a [Turbo monorepo](https://turbo.build/repo) based project with npm as a package manager.

### Monorepo Structure:

- `apps/baseline` the simplest Uniform demo app. All components purely controlled by canvas fields. This app doesn't have integrations and enhancers. It supposed to be used as a simplest demo, or as a quick way to develop own/custom demo journey.

### Requirements:

- [Node.js](https://nodejs.org/en/download/) 18.12.0+

### Uniform Project Setup

1. Clone this repo onto your local machine
2. Create a new project at https://uniform.app. Give it a name and select "Empty Project".
3. Under your team's Security settings, create an API Key with full permissions to Canvas and Context.
4. Copy your API Key, Project ID, and Quick Connect Key. You will add these to your `.env` file (see below) and to the Uniform Chrome extension respectively. It is important to note that once you close the API Key window you will not be able to copy the API or Quick Connect key values again. If you do close the API Key window before copying you will need to go through the API Key creation process again.
5. Navigate to "Settings -> Canvas Settings" under your new Uniform project and add `http://localhost:3000/api/preview?secret=javadrip` into the Preview URL and click "Save". This will allow you to preview your project as you develop.

#include "apps/baseline/README.md"
