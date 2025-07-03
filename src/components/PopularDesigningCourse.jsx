import { useState } from 'react';
import { Star, Eye, ChevronDown, ChevronUp, PlayCircle, CheckCircle, Play, CircleCheck } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Professional graphic design tutorial full course with exercise file',
    desc: 'Get your tutorials delivered at let home collect sample from the victory of the managments.',
    rating: 5.0,
    reviews: 392,
    students: 2538,
    topics: [
      'How to reduce file pixel dimentions without loosing quality',
      'Create vector file from restarize layer styles',
      'How to make logo pixel perfects with different extension',
      'Make color gradient with photoshop build-in tools',
    ],
  },
  {
    id: 2,
    title: 'Become ultimate photoshop expert within 30 days',
    desc: 'Get your tutorials delivered at let home collect sample from the victory of the managments.',
    rating: 5.0,
    reviews: 392,
    students: 2538,
    topics: [
      'How to reduce file pixel dimentions without loosing quality',
      'Create vector file from restarize layer styles',
      'How to make logo pixel perfects with different extension',
      'Make color gradient with photoshop build-in tools',
    ],
  },
  {
    id: 3,
    title: 'After effects animation tutorial with photoshop documents',
    desc: 'Get your tutorials delivered at let home collect sample from the victory of the managments.',
    rating: 5.0,
    reviews: 392,
    students: 2538,
    topics: [
      'How to reduce file pixel dimentions without loosing quality',
      'Create vector file from restarize layer styles',
      'How to make logo pixel perfects with different extension',
      'Make color gradient with photoshop build-in tools',
    ],
  },
  {
    id: 4,
    title: 'Adobe illustrator vector art design mockup',
    desc: 'Get your tutorials delivered at let home collect sample from the victory of the managments.',
    rating: 5.0,
    reviews: 392,
    students: 2538,
    topics: [
      'How to reduce file pixel dimentions without loosing quality',
      'Create vector file from restarize layer styles',
      'How to make logo pixel perfects with different extension',
      'Make color gradient with photoshop build-in tools',
    ],
  },
];

export default function PopularDesigningCourse() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-sm font-semibold text-[#EF9E48] uppercase text-center mb-2">Quality Features</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-center text-[#0F2137] mb-10">Popular Designing Course</h3>

      <div className="flex flex-col gap-4">
        {courses.map((course, index) => (
          <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div
              className="flex items-start justify-between p-6 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-500 rounded-full p-2 mt-1">
                  <Play className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="ml-2">{course.rating} ({course.reviews} reviews)</span>
                    <span className="flex items-center ml-4">
                      <Eye className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()} students watched
                    </span>
                  </div>
                  <h4 className="text-md md:text-lg font-semibold text-gray-900 mb-1">
                    {course.title}
                  </h4>
                  <p className="text-sm text-gray-600">{course.desc}</p>
                </div>
              </div>

              <div className="bg-green-100 text-green-600 px-2 py-1 relative left-4 rounded-md text-sm font-semibold whitespace-nowrap">
                7 Video Classes | 4 hrs
              </div>

              <div className="ml-4 mt-1 text-gray-400">
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            {activeIndex === index && course.topics.length > 0 && (
              <div className="px-6 pb-6 pt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CircleCheck className="w-4 h-4 text-gray-500 mt-1" />
                    {topic}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
