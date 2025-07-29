import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">FD</span>
              </div>
              <span className="text-xl font-bold text-white">
                FlameDot.TECH
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              焰点科技致力于通过创新技术解决方案，为企业数字化转型赋能，创造更大价值。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-github text-xl"></i>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">团队</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">服务</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">案例</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">我们的服务</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">企业数字化转型</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">软件开发</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX设计</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">数据分析</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IT咨询</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">技术培训</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-secondary mt-1 mr-3"></i>
                <span className="text-gray-400">北京市海淀区中关村科技园区8号楼</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone text-secondary mr-3"></i>
                <span className="text-gray-400">+86 10 8888 7777</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-secondary mr-3"></i>
                <span className="text-gray-400">contact@flamedot.tech</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} FlameDot.TECH 焰点科技. 保留所有权利.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">服务条款</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}