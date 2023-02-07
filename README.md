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

## Uniform vNext Baseline Demo

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Environment Variables

- `UNIFORM_API_KEY`: your uniform api key
- `UNIFORM_PROJECT_ID`: your uniform project
- `GOOGLE_ANALYTICS_ID`: optional, for [ga-plugin](https://docs.uniform.app/integrations/data/google-analytics#activate-ga-plugin)

### Init and start Baseline Demo

1. In your terminal, from the project root, run the following command:

   ```bash
   npm i
   ```

2. Navigate to `/apps/baseline` folder:

   ```bash
   cd apps/baseline/
   ```

3. In your code editor and rename `.env.example` to `.env` file and add your `UNIFORM_API_KEY` and `UNIFORM_PROJECT_ID` variables

4. This command pushes all configurations to your new Uniform project.

   ```bash
   npm run push
   ```

5. Run the production server:

   ```bash
   npm run build && npm run start
   ```

   or development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Supported features

- Hardcoded top navigation menu with 3 links only (home, landing page, contact us)
- Personalized home page Hero
- A/B tested landing page Hero
- Landing page, Accordion nested canvas component example
- Contact us page, Container/Section smart canvas component example
- Visual Canvas & Project Map
- [Static page generation based on project map canvas API](https://docs.uniform.app/reference/packages/uniformdev-project-map#projectmapclient)
- Canvas components with default Title Parameter for better Visual Canvas experience
- Next SDK for components registration [DRAFT: Canvas + Next.js Getting Started Optimization](https://www.notion.so/DRAFT-Canvas-Next-js-Getting-Started-Optimization-579fa27b2ad0428392d19b7db2912aa8)
- GA plugin integration
- Standard context output type (client side personalization)

### Components

- About Item (2 variants)
- Accordion / Accordion Item (nested components example)
- Call To Action
- Contact Form (as a form component example)
- Contact Sidebar
- Container / Section Two Columns (advanced usage example)
- Divider
- Featured Callout
- Hero (image + text fields)
- Page (composition component)

### Compositions

- Home page
  - hardcoded top navigation menu
  - Hero personalized component
  - Call To Action
  - Featured Callout
  - hardcoded footer
- Landing page
  - hardcoded top navigation menu
  - Hero A/B test component
  - Featured Callout
  - Divider
  - Call To Action
  - About Item (left image)
  - About Item (right image)
  - Accordion / Accordion Item (4 items)
  - hardcoded footer
- Contact Us page
  - hardcoded top navigation menu
  - Container / Section Two Columns / Contact Sidebar / Contact Form
  - hardcoded footer

### Learn More

To learn more about Uniform, take a look at the following resources:

- [Uniform documentation](https://docs.uniform.app) - Learn how to take control of your stack.
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

