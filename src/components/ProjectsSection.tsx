import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  client: string;
  year: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "智慧零售管理系统",
    category: "企业应用",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20retail%20management%20system%2C%20dashboard%20interface%2C%20modern%20UI%2C%20data%20visualization&sign=d2baece22baffeee444f35609e5cf70c",
    description: "为连锁零售企业打造的全渠道管理系统，整合线上线下销售数据与库存管理。",
    client: "华联超市",
    year: "2024",
    link: "#"
  },
  {
    id: 2,
    title: "金融数据分析平台",
    category: "数据分析",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Financial%20data%20analysis%20platform%2C%20stock%20market%20dashboard%2C%20charts%20and%20graphs&sign=b7695f9176a526d9cc6885008839d6ef",
    description: "面向金融机构的实时数据分析平台，提供市场趋势预测和风险评估功能。",
    client: "中信证券",
    year: "2024",
    link: "#"
  },
  {
    id: 3,
    title: "医疗健康APP",
    category: "移动应用",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Healthcare%20mobile%20app%2C%20smartphone%20interface%2C%20fitness%20tracking%2C%20health%20monitoring&sign=444767bc13a50cd9122cf884cbbf9fae",
    description: "集健康监测、在线问诊和医疗资源预约于一体的移动健康管理应用。",
    client: "康泰医疗",
    year: "2023",
    link: "#"
  },
  {
    id: 4,
    title: "智能制造物联网平台",
    category: "物联网",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20manufacturing%20IoT%20platform%2C%20factory%20automation%2C%20industrial%20dashboard&sign=546335958560ff171eb06d257691f389",
    description: "为制造企业打造的物联网平台，实现生产设备实时监控和智能调度。",
    client: "海尔集团",
    year: "2023",
    link: "#"
  },
  {
    id: 5,
    title: "教育资源管理系统",
    category: "企业应用",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Education%20resource%20management%20system%2C%20e-learning%20platform%2C%20course%20management&sign=0f5e7267be83f93c891fd0b9b9d7d131",
    description: "面向教育机构的资源管理系统，整合课程开发、学生管理和学习数据分析。",
    client: "新东方教育",
    year: "2023",
    link: "#"
  },
  {
    id: 6,
    title: "智慧城市交通系统",
    category: "系统集成",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Smart%20city%20traffic%20system%2C%20urban%20management%20dashboard%2C%20traffic%20flow%20optimization&sign=f93ae2c3c3713fce3bf2d0fde48261d8",
    description: "整合交通信号控制、公共交通调度和路况分析的智慧城市交通管理系统。",
    client: "北京市交通委",
    year: "2022",
    link: "#"
  }
];

// Get unique categories
const categories = ["全部", ...Array.from(new Set(projects.map(project => project.category)))];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects by category
  useState(() => {
    setFilteredProjects(
      activeCategory === "全部" 
        ? projects 
        : projects.filter(project => project.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 bg-white">
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
              成功案例
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              我们的<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                项目成果
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              探索我们为各行业客户打造的创新解决方案，见证技术如何驱动业务变革。
            </p>
          </motion.div>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-light text-gray-600 hover:bg-light-gray"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-medium bg-primary/90 px-2 py-1 rounded mb-2 inline-block">{project.category}</span>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80 mb-4">{project.description}</p>
                      <a 
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium border-b border-white pb-0.5"
                      >
                        查看详情 <i className="fa-solid fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-4 bg-light flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-dark">{project.client}</h4>
                    <p className="text-xs text-gray-500">{project.year}</p>
                  </div>
                  <a 
                    href={project.link}
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load more button */}
        {filteredProjects.length === projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: filteredProjects.length * 0.1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button 
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
              onClick={() => {}} // In a real app, this would load more projects
            >
              加载更多案例 <i className="fa-solid fa-refresh ml-2"></i>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}