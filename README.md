# MitBridge Documentation

Documentation site for MitBridge WordPress and WooCommerce custom theme using Divi Builder.

## Features

- Built with Next.js 14 and TypeScript
- UI components from Shadcn UI
- Responsive design with Tailwind CSS
- Dark mode support
- Organized documentation structure
- Search functionality
- Accessible components

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/mitbridge-docs.git
   cd mitbridge-docs
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

# or

yarn install
\`\`\`

3. Copy the environment variables:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev

# or

yarn dev
\`\`\`

## Deployment

### Build for Production

1. Build the application:
   \`\`\`bash
   npm run build

# or

yarn build
\`\`\`

2. Start the production server:
   \`\`\`bash
   npm run start

# or

yarn start
\`\`\`

### Deploy to Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will detect Next.js and configure the build settings
4. Add your environment variables in the Vercel dashboard
5. Deploy!

## Project Structure

- \`/app\` - Next.js 14 app router pages and layouts
- \`/components\` - Reusable UI components
- \`/lib\` - Utility functions and shared logic
- \`/public\` - Static assets
- \`/styles\` - Global styles and Tailwind CSS configuration

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
