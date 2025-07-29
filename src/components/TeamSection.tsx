import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
  socials: {
    weixin?: string;
    weibo?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "张明",
    position: "创始人 & CEO",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20confident%20Asian%20male%20tech%20CEO%2C%2040s%2C%20modern%20business%20attire%2C%20professional%20headshot%2C%20neutral%20background&sign=fbca790222aaa7b6c89292599ba6f017",
    bio: "前谷歌高级工程师，拥有15年互联网行业经验，曾主导多个大型技术项目的研发与管理。",
    socials: {
      weibo: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "李华",
    position: "技术总监",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20knowledgeable%20Asian%20male%20CTO%2C%2030s%2C%20casual%20tech%20style%2C%20professional%20headshot%2C%20neutral%20background&sign=125ee1b4db5630715315ee466b044f02",
    bio: "前阿里巴巴技术专家，精通分布式系统架构设计，在大数据和人工智能领域有深入研究。",
    socials: {
      weibo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "王芳",
    position: "设计总监",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20creative%20Asian%20female%20design%20director%2C%2030s%2C%20stylish%20professional%20attire%2C%20professional%20headshot%2C%20neutral%20background&sign=d3c315d947b975481bfb93403b7b3fb0",
    bio: "国际知名设计大奖获得者，曾任职于多家顶尖设计公司，擅长用户体验和品牌视觉设计。",
    socials: {
      weixin: "#",
      weibo: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "赵强",
    position: "产品经理",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20an%20energetic%20Asian%20male%20product%20manager%2C%2030s%2C%20smart%20casual%20style%2C%20professional%20headshot%2C%20neutral%20background&sign=df772f8a8e7b5b3ef4b6798cb8ac8998",
    bio: "拥有丰富的产品规划和市场分析经验，擅长将用户需求转化为优秀的产品体验。",
    socials: {
      weibo: "#",
      linkedin: "#"
    }
  },
  {
    id: 5,
    name: "陈静",
    position: "运营总监",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20dynamic%20Asian%20female%20operations%20director%2C%2030s%2C%20professional%20attire%2C%20professional%20headshot%2C%20neutral%20background&sign=f59d16c4e3c123c712d184ef1f0abd31",
    bio: "前腾讯运营专家，擅长用户增长和市场推广策略，成功打造多个百万级用户产品。",
    socials: {
      weixin: "#",
      weibo: "#"
    }
  },
  {
    id: 6,
    name: "刘强",
    position: "高级工程师",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20skilled%20Asian%20male%20senior%20engineer%2C%2030s%2C%20casual%20tech%20style%2C%20professional%20headshot%2C%20neutral%20background&sign=7df3fd7b12979df0fcf27a3d50fab771",
    bio: "全栈技术专家，精通前后端开发，在云计算和微服务架构方面有丰富实践经验。",
    socials: {
      github: "#",
      linkedin: "#"
    }
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
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
              我们的团队
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              专业的<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                核心团队
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              我们拥有一支由行业精英组成的专业团队，他们在各自领域拥有丰富经验和深厚专业知识，致力于为客户提供最优质的服务。
            </p>
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <p className="text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.socials.weixin && (
                        <a href={member.socials.weixin} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <i className="fa-brands fa-weixin"></i>
                        </a>
                      )}
                      {member.socials.weibo && (
                        <a href={member.socials.weibo} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <i className="fa-brands fa-weibo"></i>
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <i className="fa-brands fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Join us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: teamMembers.length * 0.1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">正在寻找优秀的人才加入我们？</p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            查看招聘职位 <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}