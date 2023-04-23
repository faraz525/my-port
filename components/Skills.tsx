import React, { useState }from 'react'

type Props = {}

interface Skill {
  name: string;
  level: string;
  icon: string;
}

function Skills({}: Props) {
  const skills: Skill[] = [
    { name: 'Java', level: 'Advanced', icon: '☕' },
    { name: 'TypeScript', level: 'Advanced', icon: '🚀' },
    { name: 'React', level: 'Intermediate', icon: '⚛️' },
    { name: 'Node.js', level: 'Intermediate', icon: '💻' },
    { name: 'Python', level: 'Intermediate', icon: '🐍' },
    { name: 'HTML & CSS', level: 'Intermediate', icon: '🌐' },
    { name: 'Git', level: 'Intermediate', icon: '🔧' },
  ];
  const pmSkill: Skill[] = [
    { name: 'Product Dev', level: 'Advanced', icon: '⚙️' },
    { name: 'Jira', level: 'Intermediate', icon: '📝' },
    { name: 'Linear', level: 'Advanced', icon: '📈' },
  ];
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
    return (
      <div className="max-h-[screen] flex flex-col relative top-24 mx-auto items-center ">
        <h2 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl p-6">Skills</h2>
        <h4 className='text-2xl font-semibold mb-4'>CS</h4>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg border border-gray-500 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                selectedSkill === index ? 'border-blue-500 shadow-2xl' : ''
              }`}
              onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="flex items-center">
                <span className="text-2xl mr-2">{skill.icon}</span>
                <p>{skill.level}</p>
              </div>
            </div>
          ))}
          
        </div>
        <h4 className='text-2xl font-semibold mb-4 py-3'>Product Management</h4>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pmSkill.map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg border border-gray-500 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                selectedSkill === index ? 'border-blue-500 shadow-2xl' : ''
              }`}
              onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="flex items-center">
                <span className="text-2xl mr-2">{skill.icon}</span>
                <p>{skill.level}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    );
};
  

export default Skills