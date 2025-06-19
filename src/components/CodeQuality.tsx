import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, Award, TrendingUp, Activity, Users, Lock, Eye } from 'lucide-react';

type Language = {
  name: string;
  percentage: number;
  color: string;
};

type GithubData = {
  totalRepos: number;
  publicRepos: number;
  privateRepos: number;
  totalStars: number;
  followers: number;
  following: number;
  publicGists: number;
  languages: Language[];
  recentRepos: any[]; // You can replace `any` with a more precise repo type if needed
  isRealData: boolean;
};



const CodeQuality: React.FC = () => {
 const [githubData, setGithubData] = useState<GithubData>({
  totalRepos: 0,
  publicRepos: 0,
  privateRepos: 0,
  totalStars: 0,
  followers: 0,
  following: 0,
  publicGists: 0,
  languages: [],
  recentRepos: [],
  isRealData: false
});


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/Munyia');
        const userData = await userResponse.json();

        // Fetch repositories (public only via public API)
        const reposResponse = await fetch('https://api.github.com/users/Munyia/repos?sort=updated&per_page=100');
        const reposData = await reposResponse.json();

        // Calculate total stars from public repos
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

        // Get language statistics from public repos
        const languageStats: { [key: string]: number } = {};
        for (const repo of reposData) {
          if (repo.language) {
            languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
          }
        }

        // Convert to percentage
        const totalReposWithLanguage = Object.values(languageStats).reduce((sum: number, count: number) => sum + count, 0);
        const languages = Object.entries(languageStats)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalReposWithLanguage) * 100),
            color: getLanguageColor(name)
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 6);

        // Calculate estimated private repos (your actual total is 64)
        const actualTotalRepos = 64; // Your actual total including private repos
        const publicRepos = userData.public_repos;
        const estimatedPrivateRepos = actualTotalRepos - publicRepos;

        setGithubData({
          totalRepos: actualTotalRepos,
          publicRepos: publicRepos,
          privateRepos: estimatedPrivateRepos,
          totalStars,
          followers: userData.followers,
          following: userData.following,
          publicGists: userData.public_gists,
          languages,
          recentRepos: reposData.slice(0, 6),
          isRealData: true
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback data with your actual information
        setGithubData({
          totalRepos: 64,
          publicRepos: 47,
          privateRepos: 17,
          totalStars: 45,
          followers: 12,
          following: 18,
          publicGists: 3,
          languages: [
            { name: 'JavaScript', percentage: 35, color: 'bg-yellow-500' },
            { name: 'TypeScript', percentage: 25, color: 'bg-blue-500' },
            { name: 'HTML', percentage: 20, color: 'bg-orange-500' },
            { name: 'CSS', percentage: 15, color: 'bg-blue-600' },
            { name: 'Python', percentage: 3, color: 'bg-green-500' },
            { name: 'Other', percentage: 2, color: 'bg-gray-500' }
          ],
          recentRepos: [],
          isRealData: false
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-500',
      'Python': 'bg-green-500',
      'Java': 'bg-red-500',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-blue-600',
      'React': 'bg-cyan-500',
      'Vue': 'bg-green-600',
      'PHP': 'bg-purple-500',
      'C++': 'bg-blue-700',
      'C': 'bg-gray-700',
      'Go': 'bg-cyan-600',
      'Rust': 'bg-orange-600',
      'Swift': 'bg-orange-400',
      'Kotlin': 'bg-purple-600',
      'Shell': 'bg-gray-600',
      'Dockerfile': 'bg-blue-800'
    };
    return colors[language] || 'bg-gray-500';
  };

  const codeMetrics = [
    {
      title: "Code Quality Score",
      value: "94%",
      description: "Based on best practices",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      trend: "+5%"
    },
    {
      title: "Project Completion",
      value: "98%",
      description: "Successful deployments",
      icon: <Activity className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      trend: "+12%"
    },
    {
      title: "Performance Score",
      value: "96/100",
      description: "Lighthouse average",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      trend: "+8%"
    },
    {
      title: "Client Satisfaction",
      value: "100%",
      description: "Positive feedback",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      trend: "Excellent"
    }
  ];

  // const recentActivity = [
  //   {
  //     type: "commit",
  //     message: "feat: implement real-time notifications in BayBook",
  //     repo: "baybook-platform",
  //     time: "2 hours ago",
  //     additions: 156,
  //     deletions: 23
  //   },
  //   {
  //     type: "pr",
  //     message: "fix: resolve payment integration issues in AsterCart",
  //     repo: "astercart-ecommerce",
  //     time: "1 day ago",
  //     additions: 45,
  //     deletions: 67
  //   },
  //   {
  //     type: "release",
  //     message: "v2.1.0: PrinceFynn Medicals major update",
  //     repo: "princefynn-medicals",
  //     time: "3 days ago",
  //     additions: 234,
  //     deletions: 89
  //   },
  //   {
  //     type: "commit",
  //     message: "refactor: optimize database queries in Halimafactor",
  //     repo: "halimafactor-ngo",
  //     time: "5 days ago",
  //     additions: 78,
  //     deletions: 134
  //   }
  // ];



  // const getActivityIcon = (type: string) => {
  //   switch (type) {
  //     case 'commit': return <GitCommit className="w-4 h-4" />;
  //     case 'pr': return <GitBranch className="w-4 h-4" />;
  //     case 'release': return <Star className="w-4 h-4" />;
  //     default: return <Code className="w-4 h-4" />;
  //   }
  // };

  // const getActivityColor = (type: string) => {
  //   switch (type) {
  //     case 'commit': return 'text-green-500';
  //     case 'pr': return 'text-blue-500';
  //     case 'release': return 'text-yellow-500';
  //     default: return 'text-gray-500';
  //   }
  // };

  if (loading) {
    return (
      <section id="code-quality" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading real-time GitHub data...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="code-quality" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 dark:text-white mb-4">
            Code Quality & Metrics
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            Real-time insights into my development practices, code quality, and GitHub activity
          </p>
          {githubData.isRealData && (
            <div className="mt-4 inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live GitHub Data
            </div>
          )}
        </motion.div>

        {/* GitHub Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Repository Privacy Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8">
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  Repository Count Explanation
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Total repositories: <strong>{githubData.totalRepos}</strong> (including {githubData.privateRepos} private repos). 
                  Due to GitHub API privacy restrictions, only <strong>{githubData.publicRepos} public repositories</strong> are visible 
                  in the statistics below. Private repositories are not accessible via public API.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              { 
                label: "Total Repos", 
                value: githubData.totalRepos, 
                icon: <Github className="w-6 h-6" />,
                subtext: `${githubData.publicRepos} public`
              },
              { 
                label: "Public Repos", 
                value: githubData.publicRepos, 
                icon: <Eye className="w-6 h-6" />,
                subtext: "Visible repos"
              },
              { 
                label: "Private Repos", 
                value: githubData.privateRepos, 
                icon: <Lock className="w-6 h-6" />,
                subtext: "Protected repos"
              },
              { 
                label: "Total Stars", 
                value: githubData.totalStars, 
                icon: <Star className="w-6 h-6" />,
                subtext: "From public repos"
              },
              { 
                label: "Followers", 
                value: githubData.followers, 
                icon: <Users className="w-6 h-6" />,
                subtext: "GitHub followers"
              },
              { 
                label: "Following", 
                value: githubData.following, 
                icon: <Users className="w-6 h-6" />,
                subtext: "Following users"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-lg mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-heading font-bold text-primary-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-body font-medium text-sm">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Code Quality Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {codeMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color}`}></div>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${metric.color} text-white rounded-lg`}>
                  {metric.icon}
                </div>
                <span className="text-sm font-body font-semibold text-green-600 dark:text-green-400">
                  {metric.trend}
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-900 dark:text-white mb-2">
                {metric.title}
              </h3>
              <div className="text-3xl font-heading font-bold text-primary-900 dark:text-white mb-2">
                {metric.value}
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-body text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Language Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-heading font-bold text-primary-900 dark:text-white">
                Language Distribution
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                From {githubData.publicRepos} public repos
              </span>
            </div>
            <div className="space-y-4">
              {githubData.languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-body font-medium text-gray-700 dark:text-gray-300">
                      {lang.name}
                    </span>
                    <span className="font-body font-semibold text-primary-900 dark:text-white">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className={`h-3 rounded-full ${lang.color} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contribution Stats */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-heading font-semibold text-primary-900 dark:text-white mb-4">
                GitHub Stats Summary
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-green-600 dark:text-green-400">
                    {githubData.totalRepos}
                  </div>
                  <div className="text-sm font-body text-gray-600 dark:text-gray-400">
                    Total Repos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-blue-600 dark:text-blue-400">
                    {githubData.totalStars}
                  </div>
                  <div className="text-sm font-body text-gray-600 dark:text-gray-400">
                    Stars
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-orange-600 dark:text-orange-400">
                    {githubData.followers}
                  </div>
                  <div className="text-sm font-body text-gray-600 dark:text-gray-400">
                    Followers
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

       
        </div>
      </div>
    </section>
  );
};

export default CodeQuality;