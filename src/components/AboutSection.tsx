import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function AboutSection() {
  // Generate image URL with proper encoding
  const imagePrompt = encodeURIComponent(`Modern tech company office with team collaboration, sleek design, blue and orange color scheme, professional atmosphere, high quality, 8k resolution`);
  const imageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%24%7BimagePrompt%7D&sign=fe5f52000e3a388bcc4aa2a9660fe107`;

  return (
    <section id="about" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={imageUrl} 
                alt="焰点科技办公环境" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium">我们的办公环境</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                关于我们
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                焰点科技：<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  创新技术的引领者
                </span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-700 text-lg"
            >
              <p>
                FlameDot.TECH 焰点科技成立于2018年，是一家专注于企业数字化转型的高新技术企业。我们致力于通过前沿技术和创新思维，为客户创造可持续的商业价值。
              </p>
              <p>
                我们的核心团队由来自国内外知名科技公司的资深专家组成，拥有丰富的行业经验和技术积累。我们始终坚持以客户为中心，提供定制化的解决方案，帮助企业应对数字化时代的挑战与机遇。
              </p>
            </motion.div>
            
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
            >
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-lightbulb text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-1">创新驱动</h3>
                  <p className="text-gray-600">不断探索前沿技术，为客户提供创新解决方案</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-users text-secondary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-1">客户至上</h3>
                  <p className="text-gray-600">深入理解客户需求，提供超出期望的服务体验</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-code text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-1">技术卓越</h3>
                  <p className="text-gray-600">精益求精的技术追求，打造高质量的产品与服务</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-handshake text-secondary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-1">诚信负责</h3>
                  <p className="text-gray-600">以诚信为本，对客户、员工和社会负责</p>
                </div>
              </div>
            </motion.div>
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              href="#team"
              className="inline-block mt-10 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              认识我们的团队 <i className="fa-solid fa-arrow-right ml-2"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}