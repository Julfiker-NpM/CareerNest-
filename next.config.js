const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'careernest'; // change if needed

module.exports = {
  output: 'export',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : '',
};