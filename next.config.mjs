/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion', 'lucide-react'],
  images: {
    domains: ['images.unsplash.com', 'raw.githubusercontent.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;
