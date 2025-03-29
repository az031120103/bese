import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { AnimatePresence, motion } from 'framer-motion'
import { useSize } from "ahooks"

const list = [
  {
    title: '什么是智能翻译眼镜',
    desc: '智能翻译眼镜是边胜（BESE）推出的革命性产品，结合了先进的AI技术， 提供实时翻译服务。',
    img: '/1231.jpeg'
  },
  {
    title: '为什么选择智能翻译眼镜',
    desc: '智能翻译眼镜是您沟通的最佳伙伴，提供高效、便捷的翻译体验。',
    img: '/34535.jpeg'
  },
  {
    title: '如何使用智能翻译眼镜',
    desc: '轻松上手，享受翻译的乐趣。',
    img: '/3.jpeg'
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showSubmenu, setShowSubmenu] = useState(false)

  const size = useSize(document.body)

  useEffect(() => {
    if ((size?.width || 0) > 768) {
      setShowSubmenu(false)
    }
  }, [size?.width])

  return (
    <div className="w-full h-full">
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <a className="text-lg font-medium" href="/">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <img src="/2f2b2c9b-1064-4f52-a639-c895accd98b6_0.png" alt="2f2b2c9b-1064-4f52-a639-c895accd98b6_0.png" className="h-10" />
                  <p className="text-xl font-bold">智能翻译眼镜</p>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-x-4 md:gap-x-8">
              <div className="-mr-1 md:hidden">
                <div>
                  <button onClick={(e) => {
                    e.stopPropagation()
                    setShowSubmenu(!showSubmenu)
                  }} className="relative z-[100] cursor-pointer flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none" aria-label="Toggle Navigation" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:Rdqcvfff9jta:">
                    <AnimatePresence>
                      {!showSubmenu && (
                        <motion.svg
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }} // 这里控制隐藏动画
                          transition={{ duration: 0.3 }}
                          className="h-3.5 w-3.5 overflow-visible stroke-slate-700 absolute"
                          fill="none" stroke-width="2" stroke-linecap="round"
                        >
                          <path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition"></path><path d="M2 2L12 12M12 2L2 12" className="origin-center transition scale-90 opacity-0"></path>
                        </motion.svg>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {showSubmenu && (
                        <motion.svg
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }} // 这里控制隐藏动画
                          transition={{ duration: 0.3 }}
                          className="h-3.5 w-3.5 overflow-visible stroke-slate-700 absolute"
                          fill="none" stroke-width="2" stroke-linecap="round"
                        >
                          <path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition scale-90 opacity-0"></path><path d="M2 2L12 12M12 2L2 12" className="origin-center transition"></path>
                        </motion.svg>
                      )}
                    </AnimatePresence>
                  </button>

                  <AnimatePresence>
                    {showSubmenu && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} // 这里控制隐藏动画
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-slate-300/50 z-50"
                        onClick={() => setShowSubmenu(!showSubmenu)}
                      >
                        <div className="relative inset-x-0 top-20 z-10 mx-2 mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">打破语言障碍的智能翻译眼镜</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">边胜（BESE）AI智能同声实时翻译眼镜，助您在全球范围内轻松沟通，享受无缝交流体验。</p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a target="_blank" href="https://item.jd.com/10137134203980.html" className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">立即体验</a>
            <a target="_blank" href="https://item.jd.com/10137134203980.html" className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300">了解更多</a>
          </div>
          <img alt="打破语言障碍的智能翻译眼镜" src="/1.jpeg" className="mt-8 max-w-full md:max-w-5xl mx-auto rounded-md shadow-2xl border border-[#eee] sm:mt-12 block dark:hidden"></img>
        </div>

        <section className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32">
          <img className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]" src="/background-features.jpg" alt="" width={2245} height={1636} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
              <div className={twMerge("mx-0 md:mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5 w-full")}>
                <div className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal w-full">
                  {list.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={twMerge(
                        "group relative cursor-pointer rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 hover:bg-white/10 lg:hover:bg-white/5",
                        index === activeIndex && 'bg-white hover:bg-white lg:bg-white/10 lg:hover:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                      )}>
                      <h2>
                        <button className={twMerge(
                          "font-display text-lg [&:not(:focus-visible)]:focus:outline-none outline-none text-blue-100 hover:text-white lg:text-white",
                          activeIndex === index && 'text-blue-600 hover:text-blue-600 md:hover:text-white'
                        )} type="button">
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"></span>
                          {item.title}
                        </button>
                      </h2>
                      <p className={twMerge('mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white', activeIndex === index && 'text-white')}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div>
                  <div className="relative sm:px-6 lg:hidden">
                    <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"></div>
                    <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">智能翻译眼镜是边胜（BESE）推出的革命性产品，结合了先进的AI技术，提供实时翻译服务。</p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                    <img className="w-full" src={list[activeIndex].img} alt={list[activeIndex].title} width="300" height="200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">智能翻译眼镜的关键特性</h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">探索我们的独特功能，提升您的沟通体验。</p>
            </div>
            <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/1.svg" alt="AI实时翻译" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">AI实时翻译</h3>
                  <p className="mt-4 text-sm text-slate-600">利用先进的AI技术，提供快速、准确的翻译服务。</p>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/2.svg" alt="高清显示" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">高清显示</h3>
                  <p className="mt-4 text-sm text-slate-600">清晰的显示屏，确保翻译内容一目了然。</p>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/3.svg" alt="长效电池" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">长效电池</h3>
                  <p className="mt-4 text-sm text-slate-600">持久的电池续航，满足长时间使用需求。</p>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/4.svg" alt="舒适佩戴" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">舒适佩戴</h3>
                  <p className="mt-4 text-sm text-slate-600">符合人体工学的设计，佩戴舒适，适合长时间使用。</p>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/5.svg" alt="智能语音识别" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">智能语音识别</h3>
                  <p className="mt-4 text-sm text-slate-600">精准的语音识别技术，提升翻译效率。</p>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-2xl">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/6.svg" alt="多场景应用" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">多场景应用</h3>
                  <p className="mt-4 text-sm text-slate-600">适用于旅行、商务会议、学习等多种场景。</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:mt-20 lg:block">
              <div className="grid grid-cols-3 gap-x-8" role="tablist" aria-orientation="horizontal">
                <div className="relative">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/1.svg" alt="AI实时翻译" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">AI实时翻译</h3>
                  <p className="mt-4 text-sm text-slate-600">利用先进的AI技术，提供快速、准确的翻译服务。</p>
                </div>
                <div className="relative opacity-75 hover:opacity-100">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/2.svg" alt="高清显示" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">高清显示</h3>
                  <p className="mt-4 text-sm text-slate-600">清晰的显示屏，确保翻译内容一目了然。</p>
                </div>
                <div className="relative opacity-75 hover:opacity-100">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/3.svg" alt="长效电池" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">长效电池</h3>
                  <p className="mt-4 text-sm text-slate-600">持久的电池续航，满足长时间使用需求。</p>
                </div>
                <div className="relative opacity-75 hover:opacity-100">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/4.svg" alt="舒适佩戴" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">舒适佩戴</h3>
                  <p className="mt-4 text-sm text-slate-600">符合人体工学的设计，佩戴舒适，适合长时间使用。</p>
                </div>
                <div className="relative opacity-75 hover:opacity-100">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/5.svg" alt="智能语音识别" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">智能语音识别</h3>
                  <p className="mt-4 text-sm text-slate-600">精准的语音识别技术，提升翻译效率。</p>
                </div>
                <div className="relative opacity-75 hover:opacity-100">
                  <div className="mt-8">
                    <img className="w-10 h-10 rounded-md" src="/6.svg" alt="多场景应用" />
                  </div>
                  <h3 className="mt-2 font-display text-xl text-slate-900">多场景应用</h3>
                  <p className="mt-4 text-sm text-slate-600">适用于旅行、商务会议、学习等多种场景。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">用户对智能翻译眼镜的评价</h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">听听我们的用户怎么说。</p>
            </div>
            <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
              <li>
                <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path></svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">这款眼镜让我在国际会议上沟通无障碍，真是太棒了！</p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">张伟</div>
                          <div className="mt-1 text-sm text-slate-500">国际商务经理</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <img className="h-14 w-14 object-cover" src="/1.png" alt="张伟" width="56" height="56" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path></svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">作为翻译工作者，这款眼镜是我工作中的得力助手。</p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">陈靜</div>
                          <div className="mt-1 text-sm text-slate-500">翻译工作者</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <img className="h-14 w-14 object-cover" src="/4.png" alt="张伟" width="56" height="56" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path></svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">旅行时使用非常方便，翻译准确，极大提升了我的旅行体验。</p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">李娜</div>
                          <div className="mt-1 text-sm text-slate-500">旅游爱好者</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <img className="h-14 w-14 object-cover" src="/2.png" alt="张伟" width="56" height="56" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path></svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">在商务谈判中，智能翻译眼镜让我与外国客户沟通更加顺畅。</p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">刘洋</div>
                          <div className="mt-1 text-sm text-slate-500">企业高管</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <img className="h-14 w-14 object-cover" src="/5.png" alt="张伟" width="56" height="56" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path></svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">在学习外语时，智能翻译眼镜帮助我理解课堂内容，太实用了！</p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">王强</div>
                          <div className="mt-1 text-sm text-slate-500">大学生</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <img className="h-14 w-14 object-cover" src="/3.png" alt="张伟" width="56" height="56" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path></svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">我推荐给我的学生，帮助他们更好地学习外语。</p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">赵敏</div>
                          <div className="mt-1 text-sm text-slate-500">外语教师</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <img className="h-14 w-14 object-cover" src="/6.png" alt="张伟" width="56" height="56" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
          <img className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]" src="/background-faqs.jpg" alt="" width={1558} height={946} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 id="faq-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">关于智能翻译眼镜的常见问题</h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700"></p>
            </div>
            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">智能翻译眼镜支持哪些语言？</h3>
                    <p className="mt-4 text-sm text-slate-700">智能翻译眼镜支持多种语言，包括英语、法语、德语、西班牙语等。</p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">是否支持离线翻译？</h3>
                    <p className="mt-4 text-sm text-slate-700">目前不支持离线翻译，需连接网络使用。</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">电池续航时间是多久？</h3>
                    <p className="mt-4 text-sm text-slate-700">在正常使用情况下，电池续航可达8小时。</p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">如何清洁眼镜？</h3>
                    <p className="mt-4 text-sm text-slate-700">请使用柔软的布轻轻擦拭镜片，避免使用化学清洁剂。</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-8">
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">如何更新翻译软件？</h3>
                    <p className="mt-4 text-sm text-slate-700">请连接Wi-Fi，进入设置界面，选择软件更新即可。</p>
                  </li>
                  <li>
                    <h3 className="font-display text-lg leading-7 text-slate-900">是否提供保修服务？</h3>
                    <p className="mt-4 text-sm text-slate-700">是的，智能翻译眼镜提供一年的保修服务。</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden bg-blue-600 py-32">
          <img className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" src="/background-call-to-action.jpg" alt="" width="2347" height="1244" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">迫不及待想使用智能翻译眼镜？</h2>
              <p className="mt-4 text-lg tracking-tight text-white">立即体验无缝沟通的乐趣。</p>
              <div className="flex justify-center gap-x-4">
                <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10 border border-white" target="_blank" href="https://item.jd.com/10137134203980.html">立即购买</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-16 text-center">
              <a className="text-lg font-medium" href="/">
                <div className="flex items-center justify-center gap-x-2 cursor-pointer">
                  <img src="/2f2b2c9b-1064-4f52-a639-c895accd98b6_0.png" alt="3fba5393-a853-4e3c-a07e-6db1745d54fe_0.png" className="h-10" />
                  <p className="text-xl font-bold">智能翻译眼镜</p>
                </div>
              </a>
              <nav className="mt-10 text-sm" aria-label="quick links">
                <div className="-my-1 flex justify-center gap-x-6">
                  <a target="_blank" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="">微信：152 7122 6579</a>
                  <a target="_blank" className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="">邮箱：leeroy@biansheng.com</a>
                </div>
              </nav>
            </div>
            <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
              <div className="flex gap-x-6"></div>
              <div className="mt-6 text-sm text-slate-500 sm:mt-0">© 2025 • 边胜（BESE）AI智能同声实时翻译眼镜 All rights reserved.
                <div className="mt-4 mb-2 flex flex-wrap space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-full flex-shrink-0">built with
                    <a href="/" target="_blank" className="text-secondary-500 ml-2 text-blue-500">biansheng.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
