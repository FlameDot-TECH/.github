import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: '咨询服务'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    '咨询服务',
    '数字化转型',
    '定制软件开发',
    'UI/UX设计',
    '数据分析服务',
    '其他服务'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('表单提交成功！我们将尽快与您联系。');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: '咨询服务'});
    }, 1500);
  };

  // Generate image URL with proper encoding
  const imagePrompt = encodeURIComponent(`Modern office building with technology company logo, professional business environment, high quality photography`);
  const officeImageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%24%7BimagePrompt%7D&sign=fe5f52000e3a388bcc4aa2a9660fe107`;

  return (
    <section id="contact" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              联系我们
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              让我们一起<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                创造未来
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              无论您是想了解更多关于我们的服务，还是有合作意向，都欢迎随时与我们联系。我们的团队将竭诚为您提供专业的咨询和支持。
            </p>

            {/* Info cards */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-1">公司地址</h3>
                  <p className="text-gray-600">北京市海淀区中关村科技园区8号楼</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-phone text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-1">联系电话</h3>
                  <p className="text-gray-600">+86 10 8888 7777</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-lg mb-1">电子邮箱</h3>
                  <p className="text-gray-600">contact@flamedot.tech</p>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div>
              <h3 className="font-semibold text-dark text-lg mb-4">关注我们</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  <i className="fa-brands fa-weixin text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  <i className="fa-brands fa-weibo text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-6">发送咨询</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        您的姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        电子邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="请输入您的电子邮箱"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      公司名称
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="请输入您的公司名称"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      感兴趣的服务
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      留言内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                      placeholder="请详细描述您的需求或问题..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin mr-2"></i> 提交中...
                      </>
                    ) : (
                      <>
                        发送留言 <i className="fa-solid fa-paper-plane ml-2"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Office image */}
              <div className="h-48 md:h-60 overflow-hidden">
                <img 
                  src={officeImageUrl} 
                  alt="焰点科技办公环境" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}