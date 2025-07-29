import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "企业数字化转型",
    description: "帮助传统企业实现数字化转型，提升运营效率和市场竞争力。",
    icon: "fa-line-chart",
    features: [
      "数字化战略规划",
      "业务流程重构",
      "组织能力建设",
      "数字化文化培养"
    ],
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Digital%20transformation%20concept%2C%20modern%20business%20illustration%2C%20technology%20integration%2C%20professional%20style&sign=effb3eb1ec61a2b233d280e3eef5c150"
  },
  {
    id: 2,
    title: "定制软件开发",
    description: "根据企业需求定制开发各类软件系统，满足特定业务场景。",
    icon: "fa-code",
    features: [
      "企业应用开发",
      "移动应用开发",
      "系统集成服务",
      "API设计与开发"
    ],
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Custom%20software%20development%20concept%2C%20coding%20and%20programming%2C%20modern%20tech%20illustration&sign=4f699d09f6a3bacaf57e5f76d0f19d72"
  },
  {
    id: 3,
    title: "UI/UX设计",
    description: "打造用户体验卓越的产品界面，提升用户满意度和品牌价值。",
    icon: "fa-paint-brush",
    features: [
      "用户研究与分析",
      "交互设计",
      "视觉设计",
      "用户测试与优化"
    ],
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=UI%2FUX%20design%20concept%2C%20modern%20interface%20design%2C%20user%20experience%20illustration&sign=5905b8e461562c751a03768cfa9f109b"
  },
  {
    id: 4,
    title: "数据分析服务",
    description: "通过数据分析帮助企业挖掘数据价值，支持数据驱动决策。",
    icon: "fa-database",
    features: [
      "数据采集与整合",
      "数据可视化",
      "预测分析",
      "商业智能解决方案"
    ],
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Data%20analysis%20concept%2C%20data%20visualization%2C%20analytics%20dashboard%2C%20modern%20tech%20style&sign=3a6f5b30b35e78c0a525bce45221c9a6"
  },
  {
    id: 5,
    title: "IT咨询服务",
    description: "提供专业的IT战略咨询，帮助企业优化IT架构和技术选型。",
    icon: "fa-lightbulb",
    features: [
      "IT战略规划",
      "技术架构设计",
      "供应商评估与选择",
      "IT项目管理"
    ],
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=IT%20consulting%20concept%2C%20business%20strategy%20and%20technology%2C%20professional%20illustration&sign=a2acd903647908a32b5053804a47e4eb"
  },
  {
    id: 6,
    title: "技术培训",
    description: "提供专业的技术培训服务，提升团队技术能力和创新思维。",
    icon: "fa-graduation-cap",
    features: [
      "定制培训课程",
      "技术认证辅导",
      "团队能力建设",
      "前沿技术分享"
    ],
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Technology%20training%20concept%2C%20e-learning%20and%20education%2C%20modern%20illustration&sign=a33b79f7a3a6c2ed1e77109561352c66"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              我们的服务
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              全方位的<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                技术解决方案
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              我们提供从战略咨询到技术实施的全方位服务，助力企业实现数字化转型和业务增长。
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    热门服务
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary text-xl">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <i className="fa-solid fa-check text-primary mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors mt-auto w-fit"
                  >
                    了解更多 <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: services.length * 0.1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                准备好开始您的数字化转型之旅了吗？
              </h3>
              <p className="text-white/90 mb-8 max-w-md">
                联系我们，获取免费咨询服务，让我们一起探讨如何通过技术创新推动您的业务增长。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="px-6 py-3 bg-white text-primary font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
                >
                  预约免费咨询
                </a>
                <a 
                  href="#projects"
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg border border-white/30 hover:bg-white/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  查看成功案例
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Digital%20transformation%20journey%2C%20team%20collaboration%2C%20modern%20office%20setting&sign=5f632ad58cb71dce46b2226feeb40674" 
                alt="数字化转型" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}