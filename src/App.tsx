import { Globe, TrendingUp, Users, BarChart3, ChevronDown, ArrowRight, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  content: string;
  bulletPoints: string[];
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Globalisation in Pre Modern World",
    content: "Globalisation existed even in the pre modern world, though on a smaller scale. Long before modern transport and communication, people exchanged goods, culture, and ideas across continents. Ancient trade routes connected India, China, Africa, and Europe.",
    bulletPoints: [
      "Indian spices, textiles, and precious stones were highly valued abroad",
      "Buddhism spread from India to East and Southeast Asia",
      "Islam travelled to India through traders and travelers",
      "European explorers like Vasco da Gama linked these regions permanently",
      "These early connections built the foundation of global trade and cultural exchange"
    ]
  },
  {
    id: 2,
    title: "Silk Route and Indentured Labour",
    content: "The Silk Route was one of the most important links between ancient civilisations. It connected East Asia with Europe through Central Asia and India. Along this route, traders carried silk, gold, spices, and precious stones.",
    bulletPoints: [
      "Ideas, art, and even diseases travelled along the Silk Route",
      "During the nineteenth century, many Indians were taken to British colonies",
      "Indian indentured labour went to Mauritius, Trinidad, and Fiji to work on plantations",
      "Though they faced hardship, they spread Indian culture, food, and festivals abroad",
      "Both the Silk Route and indentured labour shaped early globalisation"
    ]
  },
  {
    id: 3,
    title: "Economic Globalisation (Liberalisation)",
    content: "Economic globalisation in India accelerated after 1991 when the government introduced economic reforms known as liberalisation. India removed restrictions on foreign trade and investment, reduced import duties, and allowed private companies to grow freely.",
    bulletPoints: [
      "Multinational companies set up industries in India, especially in automobiles, IT, and telecommunications",
      "Indian companies started competing in global markets",
      "Liberalisation helped increase exports and modernise industries",
      "Created new jobs in various sectors",
      "Made India more dependent on international markets with increased global competition"
    ]
  },
  {
    id: 4,
    title: "Transport and Communication in Globalisation",
    content: "Modern transport and communication systems are the engines of globalisation. Improved ships, airplanes, and railways have made the movement of goods faster and cheaper. Containerisation and air transport allow products to travel between continents in days.",
    bulletPoints: [
      "Communication technology like internet, mobile phones, and satellites connects people instantly",
      "A designer in India can send files to a company in the United States within seconds",
      "These technologies help businesses coordinate globally",
      "Encouraged outsourcing and made trade easier",
      "Without rapid transport and communication, globalisation would not reach today's speed and scale"
    ]
  },
  {
    id: 5,
    title: "Positive Impact of Globalisation on India",
    content: "Globalisation has brought many positive effects on India's economy and society. It has created new jobs in IT, automobile, and service industries. Indian companies have become global brands, and foreign companies have brought investment and new technology.",
    bulletPoints: [
      "Consumers enjoy better quality products at lower prices",
      "IT and communication sectors have benefited the most",
      "Indian culture reached abroad — yoga, Bollywood, and Indian food are now popular worldwide",
      "Made India more connected to the global economy",
      "Increased India's role in international trade and cooperation"
    ]
  },
  {
    id: 6,
    title: "Negative Impact on Local Producers",
    content: "While globalisation has helped big industries, it has created challenges for small producers and farmers. Local industries often cannot compete with cheaper imported goods. Handloom weavers, toy makers, and small-scale farmers have suffered losses.",
    bulletPoints: [
      "Companies from developed countries have greater resources, technology, and marketing power",
      "Many Indian shops and traditional crafts face decline as multinational brands dominate",
      "Income inequality has increased, with urban areas growing faster than rural ones",
      "Globalisation has helped the rich more than the poor",
      "Led to unequal growth across different sectors of society"
    ]
  },
  {
    id: 7,
    title: "Role of WTO in Promoting Globalisation",
    content: "The World Trade Organization (WTO) is an international body that helps promote free trade among nations. It was set up in 1995 and has 160+ member countries, including India. The WTO supports globalisation by encouraging countries to reduce trade barriers.",
    bulletPoints: [
      "Helps reduce import taxes allowing goods and services to move freely",
      "India has gained access to new markets through WTO membership",
      "WTO rules often favour developed countries",
      "Developed countries continue to support their farmers through subsidies",
      "This makes it harder for Indian farmers to compete, so fair trade is still a challenge"
    ]
  },
  {
    id: 8,
    title: "Challenges in Fair Globalisation",
    content: "Fair globalisation means ensuring that the benefits of globalisation are shared equally. Developing countries like India face problems because big multinational companies and rich nations often have more power in global trade.",
    bulletPoints: [
      "Small producers, farmers, and workers need protection and support to face competition",
      "Governments must ensure fair wages, safe working conditions, and equal opportunities",
      "Environmental protection is important as industrial expansion increases pollution",
      "India must improve education, skill development, and infrastructure",
      "Only then can globalisation become truly inclusive and beneficial for everyone"
    ]
  },
  {
    id: 9,
    title: "Conclusion",
    content: "Globalisation is a process that connects economies, people, and cultures across the world. In India, it has brought rapid growth, new technology, and cultural exchange. Yet, it has also created challenges for local industries and workers.",
    bulletPoints: [
      "Government and citizens must work together to make globalisation fair",
      "Policies should protect small producers and provide equal opportunities to all",
      "Globalisation is not just about trade, but about sharing knowledge and progress",
      "If used wisely, it can help India grow stronger",
      "India can maintain its unique identity and values while embracing global connections"
    ]
  },
  {
    id: 10,
    title: "Impact on Tamil Nadu",
    content: "Globalisation has deeply influenced Tamil Nadu. Its textile and automobile industries have expanded with foreign investment and exports. Chennai is known as the 'Detroit of India' because of its automobile production for international markets.",
    bulletPoints: [
      "IT hubs in Chennai and Coimbatore have connected Tamil Nadu to the global digital economy",
      "Foreign tourists visit Tamil temples, beaches, and hill stations, boosting tourism",
      "Small handloom weavers and farmers face challenges from global competition",
      "Western lifestyles and fast food are becoming common in cities",
      "Tamil films, classical dance, and food have reached global audiences, showing cultural exchange both ways"
    ]
  },
  {
    id: 11,
    title: "Impact on Jammu and Kashmir",
    content: "In Jammu and Kashmir, globalisation has created both opportunities and difficulties. Handicrafts like carpets, shawls, and papier-mâché are now sold in international markets. Kashmiri apples and saffron are exported to different countries.",
    bulletPoints: [
      "Tourism has grown, bringing visitors from all over the world",
      "Globalisation helps local products find global customers",
      "Machine-made imitations have hurt traditional artisans",
      "Global competition affects prices for local producers",
      "Despite challenges, Jammu and Kashmir's natural beauty and heritage continue to attract the world"
    ]
  }
];

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleExplore = () => {
    setShowModal(true);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  if (showIntro) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        </div>

        {/* Intro Content */}
        <div className="relative z-10 text-center space-y-8 max-w-2xl animate-fade-in-up">
          <div className="mb-12">
            <Globe className="w-20 h-20 mx-auto mb-6 text-blue-400 animate-fade-in" />
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
              Globalisation & India
            </h1>
          </div>

          <div className="space-y-4 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm tracking-wider uppercase">Presented By</p>
              <h2 className="text-3xl font-bold">Richit</h2>
            </div>
            <div className="border-t border-white/10 my-4"></div>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-400 text-sm">Roll Number</p>
                <p className="text-xl font-bold">28</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Class</p>
                <p className="text-xl font-bold">X-D</p>
              </div>
            </div>
            <div className="border-t border-white/10 my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">Subject</p>
              <p className="text-xl font-bold">Social Science</p>
            </div>
          </div>

          <button
            onClick={() => setShowIntro(false)}
            className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-12 py-4 font-bold hover:from-blue-700 hover:to-teal-700 transition-all flex items-center gap-3 mx-auto rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transform"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-7 h-7" />
              <span className="text-xl font-bold tracking-tight">
                Globalisation®
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#overview" className="text-gray-300 hover:text-white transition-colors font-medium">Overview</a>
              <a href="#impact" className="text-gray-300 hover:text-white transition-colors font-medium">Impact</a>
              <a href="#data" className="text-gray-300 hover:text-white transition-colors font-medium">Data</a>
              <a href="#research" className="text-gray-300 hover:text-white transition-colors font-medium">Research</a>
              <button
                onClick={handleExplore}
                className="bg-white text-black px-6 py-2.5 font-bold hover:bg-gray-200 transition-colors"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Slide Container */}
            <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 border border-white/20 rounded-2xl p-8 md:p-12 backdrop-blur-xl overflow-hidden">
              {/* Slide Content */}
              <div
                key={currentSlide}
                className={`animate-slide-${slideDirection}`}
              >
                <div className="mb-6">
                  <span className="text-blue-400 text-sm font-bold tracking-wider">
                    TOPIC {currentSlide + 1} OF {slides.length}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </h2>
                </div>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {slides[currentSlide].content}
                </p>

                <ul className="space-y-4">
                  {slides[currentSlide].bulletPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-400 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                    currentSlide === 0
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-blue-400 w-8'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                    currentSlide === slides.length - 1
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700'
                  }`}
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm animate-fade-in">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-gray-300">Comprehensive Research Project</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Research that</span>
                <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent animate-fade-in-up relative" style={{ animationDelay: '0.2s' }}>
                  transforms
                  <span className={`inline-block w-1.5 h-16 md:h-20 ml-2 bg-gradient-to-b from-blue-400 to-teal-400 transition-opacity duration-100 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </span>
                <span className="block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>India's future.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Exploring how globalisation shapes economic growth, cultural exchange, and social transformation in modern India.
              </p>
              <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <button
                  onClick={handleExplore}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-4 font-bold hover:from-blue-700 hover:to-teal-700 transition-all flex items-center gap-2 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transform"
                >
                  Explore Topics
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 p-12 rounded-lg backdrop-blur-xl hover:border-white/20 transition-all duration-500">
                  <div className="space-y-8">
                    <div className="transform transition-all duration-500 hover:translate-x-2">
                      <h3 className="text-gray-500 text-sm font-bold mb-2 tracking-wider">QUICK FACTS</h3>
                      <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">7.5% Growth</div>
                      <p className="text-gray-400">Average GDP since 1991</p>
                    </div>
                    <div className="transform transition-all duration-500 hover:translate-x-2">
                      <h3 className="text-gray-500 text-sm font-bold mb-2 tracking-wider">ECONOMIC IMPACT</h3>
                      <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">$450B+ FDI</div>
                      <p className="text-gray-400">Foreign investment inflows</p>
                    </div>
                    <div className="transform transition-all duration-500 hover:translate-x-2">
                      <h3 className="text-gray-500 text-sm font-bold mb-2 tracking-wider">SOCIAL CHANGE</h3>
                      <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">270M People</div>
                      <p className="text-gray-400">Lifted out of poverty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <ChevronDown className="w-8 h-8 text-gray-600 animate-bounce-slow" />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="relative py-16 border-t border-b border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 text-sm font-bold mb-8 tracking-wider animate-fade-in">RESEARCH SOURCES</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center text-gray-600 font-bold text-lg hover:text-gray-400 transition-all duration-300 cursor-pointer hover:scale-110 transform">World Bank</div>
            <div className="text-center text-gray-600 font-bold text-lg hover:text-gray-400 transition-all duration-300 cursor-pointer hover:scale-110 transform" style={{ animationDelay: '0.1s' }}>IMF Reports</div>
            <div className="text-center text-gray-600 font-bold text-lg hover:text-gray-400 transition-all duration-300 cursor-pointer hover:scale-110 transform" style={{ animationDelay: '0.2s' }}>NITI Aayog</div>
            <div className="text-center text-gray-600 font-bold text-lg hover:text-gray-400 transition-all duration-300 cursor-pointer hover:scale-110 transform" style={{ animationDelay: '0.3s' }}>RBI Data</div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Understanding globalisation's multi-dimensional impact
              <span className={`inline-block w-1 h-12 md:h-16 ml-2 bg-white transition-opacity duration-100 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">A comprehensive analysis of economic, social, and cultural transformations in India.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-xl rounded-xl hover:scale-105 transform hover:shadow-2xl hover:shadow-blue-500/20">
              <TrendingUp className="w-10 h-10 mb-6 text-gray-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110 transform" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Economic Growth</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Trade liberalization and FDI's role in India's economic expansion.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 hover:border-teal-500/50 transition-all duration-500 backdrop-blur-xl rounded-xl hover:scale-105 transform hover:shadow-2xl hover:shadow-teal-500/20" style={{ animationDelay: '0.1s' }}>
              <Users className="w-10 h-10 mb-6 text-gray-400 group-hover:text-teal-400 transition-all duration-300 group-hover:scale-110 transform" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors">Social Impact</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Cultural exchange and urbanization reshaping Indian society.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-xl rounded-xl hover:scale-105 transform hover:shadow-2xl hover:shadow-orange-500/20" style={{ animationDelay: '0.2s' }}>
              <BarChart3 className="w-10 h-10 mb-6 text-gray-400 group-hover:text-orange-400 transition-all duration-300 group-hover:scale-110 transform" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">Data Analysis</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Statistical insights into employment and sectoral transformations.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-xl rounded-xl hover:scale-105 transform hover:shadow-2xl hover:shadow-purple-500/20" style={{ animationDelay: '0.3s' }}>
              <Globe className="w-10 h-10 mb-6 text-gray-400 group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110 transform" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Global Context</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                India's position in the interconnected global economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Positive transformations driving progress.</h2>
              <p className="text-xl text-gray-400 mb-12">Examining the benefits of global economic integration.</p>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-400 transition-all duration-300 hover:pl-8 cursor-pointer group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Economic Expansion</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Sustained GDP growth and increased foreign investment flows</p>
                </div>
                <div className="border-l-4 border-white/20 pl-6 hover:border-teal-400 transition-all duration-300 hover:pl-8 cursor-pointer group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">Technology Transfer</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Innovation and digital transformation across industries</p>
                </div>
                <div className="border-l-4 border-white/20 pl-6 hover:border-orange-400 transition-all duration-300 hover:pl-8 cursor-pointer group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">Job Creation</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Millions of new opportunities in service and tech sectors</p>
                </div>
                <div className="border-l-4 border-white/20 pl-6 hover:border-purple-400 transition-all duration-300 hover:pl-8 cursor-pointer group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Market Access</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Integration with global supply chains and markets</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Critical challenges requiring attention.</h2>
              <p className="text-xl text-gray-400 mb-12">Addressing the complexities of rapid economic change.</p>

              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6 hover:border-red-400 transition-all duration-300 hover:pl-8 cursor-pointer group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">Income Inequality</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Growing wealth gap and regional economic disparities</p>
                </div>
                <div className="border-l-4 border-white/20 pl-6 hover:border-yellow-400 transition-all duration-300 hover:pl-8 cursor-pointer group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Traditional Industries</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Impact on agriculture and small-scale manufacturing</p>
                </div>
                <div className="border-l-4 border-white/20 pl-6 hover:border-pink-400 transition-all duration-300 hover:pl-8 cursor-pointer group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">Cultural Changes</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Balancing modernization with traditional values</p>
                </div>
                <div className="border-l-4 border-white/20 pl-6 hover:border-green-400 transition-all duration-300 hover:pl-8 cursor-pointer group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">Sustainability</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Environmental concerns and resource management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section id="data" className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Numbers that tell the story
              <span className={`inline-block w-1 h-12 md:h-16 ml-2 bg-white transition-opacity duration-100 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </h2>
            <p className="text-xl text-gray-400">Key statistics from three decades of economic reform.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-12 text-center backdrop-blur-xl rounded-xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 transform hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent rounded-xl transition-all duration-500"></div>
              <div className="relative">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">7.5%</div>
                <div className="text-gray-500 font-bold text-sm mb-2 tracking-wider">ANNUAL GROWTH</div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Average GDP growth rate post-liberalization</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-12 text-center backdrop-blur-xl rounded-xl hover:border-teal-500/50 transition-all duration-500 hover:scale-105 transform hover:shadow-2xl hover:shadow-teal-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/10 group-hover:to-transparent rounded-xl transition-all duration-500"></div>
              <div className="relative">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">$450B+</div>
                <div className="text-gray-500 font-bold text-sm mb-2 tracking-wider">INVESTMENT</div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Total FDI inflows since 1991 reforms</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-12 text-center backdrop-blur-xl rounded-xl hover:border-orange-500/50 transition-all duration-500 hover:scale-105 transform hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent rounded-xl transition-all duration-500"></div>
              <div className="relative">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">270M</div>
                <div className="text-gray-500 font-bold text-sm mb-2 tracking-wider">POVERTY REDUCTION</div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">People lifted above poverty line</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="relative py-32 px-6 bg-gradient-to-b from-gray-900 to-black z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Ready to explore?</span>
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
              Dive into our research
              <span className={`inline-block w-1 h-12 md:h-16 ml-2 bg-gradient-to-b from-blue-400 to-teal-400 transition-opacity duration-100 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">Comprehensive analysis, data visualizations, and expert insights on globalisation's impact on India.</p>

          <button
            onClick={handleExplore}
            className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-4 font-bold hover:from-blue-700 hover:to-teal-700 transition-all inline-flex items-center gap-2 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transform"
          >
            Explore Detailed Topics
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <Globe className="w-6 h-6" />
              <span className="text-lg font-bold">Globalisation®</span>
            </div>
            <div className="flex gap-8 text-gray-400">
              <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              <a href="#impact" className="hover:text-white transition-colors">Impact</a>
              <a href="#data" className="hover:text-white transition-colors">Data</a>
              <a href="#research" className="hover:text-white transition-colors">Research</a>
            </div>
            <p className="text-gray-600">© 2025 Social Science Project</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
