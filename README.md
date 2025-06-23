# FlameheadLabs Portfolio

A modern, performant portfolio website for FlameheadLabs, built with Next.js, TypeScript, and Tailwind CSS. This project showcases the company's services, projects, and team members with a clean, responsive design.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with dark/light mode support
- **Content Management**: MDX-based content for easy updates
- **Performance Optimized**: Fast page loads and smooth animations
- **Project Showcase**: Detailed project pages with rich content
- **Team Section**: Meet the talented team behind FlameheadLabs
- **Contact Form**: Easy way to get in touch
- **View Analytics**: Page view tracking with Upstash Redis

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) with [Contentlayer](https://www.contentlayer.dev/)
- **Database**: [Upstash Redis](https://upstash.com/) (for view counting)
- **Deployment**: Vercel (recommended)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or pnpm
- Upstash Redis account (for view counting)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Flamehead-Labs-Ug/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   UPSTASH_REDIS_REST_URL=your_redis_rest_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_rest_token
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
flameheadlabs-portfolio/
├── app/                    # App router pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── projects/           # Projects listing and details
│   ├── services/           # Services listing and details
│   └── ...
├── components/            # Reusable components
├── content/                # MDX content
│   ├── projects/          # Project markdown files
│   ├── services/          # Service markdown files
│   └── team/              # Team member markdown files
├── public/                # Static files
└── styles/                # Global styles
```

## ✍️ Adding Content

### Add a New Project

1. Create a new `.mdx` file in `content/projects/` with the following frontmatter:
   ```mdx
   ---
   title: "Project Name"
   description: "Short description"
   date: "YYYY-MM-DD"
   published: true
   repository: "https://github.com/username/repo"
   ---
   
   Your project content here...
   ```

### Add a New Team Member

1. Create a new `.mdx` file in `content/team/` with the following frontmatter:
   ```mdx
   ---
   title: "Full Name"
   role: "Job Title"
   date: "YYYY-MM-DD"
   ---
   
   Team member bio and details...
   ```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Base URL of your site | Yes |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL | For view counting |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token | For view counting |

## 🚀 Deployment

### Vercel

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the repository on [Vercel](https://vercel.com/import)
3. Add the required environment variables
4. Deploy!

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Content management with [Contentlayer](https://www.contentlayer.dev/)
