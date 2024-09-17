import{_ as r,r as a,o as i,c as s,b as e,d as n,a as t,e as o}from"./app-QZ4sqF7z.js";const h={},u=o('<p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted image 20240801121318.png" alt="Pasted image 20240801121318"></p><h3 id="写在开头" tabindex="-1"><a class="header-anchor" href="#写在开头"><span>写在开头</span></a></h3><p>尝试性地列出了组内AI模块的学习内容，很明显并不详尽。新的框架新的模型新的架构新的理论正在不断涌现，尽管笔者远未能做到跟上发展，还是不要脸地提出这般建议：学习AI的话，就目前的发展来看，需要不断地接受新事物和新知识。</p><p>本文就仅以上面的图为例尝试性地提出建议吧。</p><h3 id="需要掌握的基础知识" tabindex="-1"><a class="header-anchor" href="#需要掌握的基础知识"><span>需要掌握的基础知识</span></a></h3><p>图示中的最外层是需要掌握的基础知识，分别是<strong>Python, Crawler, Data analysis, C/C++, Concurrency</strong>。每一个点的广度和深度都不止在现在的语境中所提到的一般肤浅，有兴趣的同学可以深入学习。</p><h4 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h4><p>Python的学习是一切的基础，在大一的学生，建议利用可能拥有的丰富的闲暇时间，将Python与C一同学习<br> Python 的学习，个人之见可以分为三个部分，一个是语言的基础，一个是语言的应用，一个是语言的进阶。在组内，语言的进阶不见得十分重要，有些语言的应用会被其他的基础知识涵盖。<br> 在这里推荐的学习方法是</p>',8),c=o("<li>语言的基础部分 <ul><li>伯克利名课 CS61A <ul><li>极为丰富的课程资源，极为高质量的课后作业，极为精彩的课程编排，酣畅淋漓的课程体验，是真正出色的编程语言入门课，以Python入门接触编程的基本思想和面向对象，但是教材和课程都是英语的，刚开始看难度偏高</li></ul></li><li>廖雪峰的python教程 <ul><li>如果你喜欢的话</li></ul></li><li>《Python基础教程》《笨方法学python》等入门书 <ul><li>《python基础教程》看过一部分，读起来比较流畅，但是个人感觉比较跳跃</li><li>《笨方法学python》是知名的入门书，尽管没看过但是推荐的人很多</li></ul></li></ul></li><li>语言的应用部分除爬虫，数据分析之外不在AI模块的要求中，Python是胶水语言，前端也好后端也好，网络编程也好，游戏也好都能实现，但是本人尚未接触，无法对此提出建议，请感兴趣的同学学习之后补充这一模块</li>",2),_={href:"https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://book.douban.com/subject/27028517/",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"《流畅的python》涉及到许多Python设计理念与语言的特性，是深入学习python很不错的学习资料，推荐一看",-1),g={href:"https://docs.python.org/3/library/index.html",target:"_blank",rel:"noopener noreferrer"},f=e("ul",null,[e("li",null,"新的语言特性和python的更新最好查看官方文档")],-1),b={href:"https://github.com/vinta/awesome-python",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"python的学习远不止以上的方法，B站或油管上学习视频和资料十分丰富，同时python拥有大多数语言望尘莫及的生态和社区，建议在学习时多利用这些资源。",-1),y=e("h4",{id:"c-c",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#c-c"},[e("span",null,"C/C++")])],-1),w=e("p",null,[n("校内基本课程，课内会带着将基础的语法过一遍，请先学好课内的。"),e("br"),n(" 在组内的AI模块，这两门语言不要求过多，除非深入了解各个框架或大模型底层才会接触到，校内的知识便以够用")],-1),k={href:"https://book.douban.com/subject/1139336/",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,"C语言作者的书，C语言圣经，不必多说",-1),L={href:"https://www.oreilly.com/library/view/c-primer-plus/9780133432398/",target:"_blank",rel:"noopener noreferrer"},P=e("li",null,"校内双语班教材，知名C语言学习书籍",-1),T=e("li",null,"读过一些，没有看完，内容很详尽，语言流畅，很不错的书",-1),x={href:"https://www.oreilly.com/library/view/c-primer-fifth/9780133053043/?_gl=1*13i5ftx*_ga*ODA2MzA1MjQ4LjE3MTYxNjg4OTM.*_ga_092EL089CH*MTcyNjQ2MzkyMy40LjEuMTcyNjQ2NDA3NS40My4wLjA.",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"相比于校内对C++学习的安排，这本书显得太多太厚了，但是如果真的对C++感兴趣的话，推荐有选择地看。",-1),M=e("h4",{id:"crawler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#crawler"},[e("span",null,"Crawler")])],-1),C=e("p",null,[n("也就是爬虫"),e("br"),n(" 爬虫是python运用的一部分，同时涉及到一些计算机网络，前后端知识。"),e("br"),n(" 爬虫的学习可以分为两个部分，基础学习和进阶爬虫库的学习。推荐在大二软件工程方向分流后，大数据课程上或小学期在python课上学习，即学即用。")],-1),R={href:"https://book.douban.com/subject/33386709/",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,"有些老的书，但是内容详实，语言流畅，示例代码开源在github上，体验不错",-1),D={href:"https://book.douban.com/subject/35681856/",target:"_blank",rel:"noopener noreferrer"},E=e("li",null,"国内的书，没看过但是在网上评价很高",-1),N={href:"https://github.com/vinta/awesome-python?tab=readme-ov-file#web-crawling",target:"_blank",rel:"noopener noreferrer"},G=e("h4",{id:"data-analysis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-analysis"},[e("span",null,"Data Analysis")])],-1),I=e("p",null,[n("数据分析"),e("br"),n(" 数据分析是一个很广泛的词汇，在这里主要是指其中数据预处理和可视化的部分。"),e("br"),n(" 当爬虫或其他方法得到大量数据时，需要有一定的读取数据和处理数据的能力。"),e("br"),n(" 强行将数据分析分为两个部分，大概就是数据处理和数据可视化")],-1),S={href:"https://www.oreilly.com/library/view/python-for-data/9781098104023/?_gl=1*14uzkpd*_ga*ODA2MzA1MjQ4LjE3MTYxNjg4OTM.*_ga_092EL089CH*MTcyNjQ2MzkyMy40LjEuMTcyNjQ2NDE5OC41OC4wLjA.",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://book.douban.com/subject/36632126/",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,"相当不错的书，涵盖你可能没学到的python基础知识，几个常用库的学习和使用，同样示例代码开源在github上",-1),O={href:"https://numpy.org/",target:"_blank",rel:"noopener noreferrer"},Q=e("li",null,"Numpy是十分重要的Python数据分析库，除了基本的数据处理之外，在机器学习等领域同样会见到它",-1),V={href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,"表格型的数据处理离不开pandas，与numpy都是基础的python库",-1),H={href:"https://matplotlib.org/",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,"最基本的python绘图工具",-1),q={href:"https://echarts.apache.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},J=e("li",null,"老师认证，业内都爱用",-1),K=e("h4",{id:"concurrency",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#concurrency"},[e("span",null,"Concurrency")])],-1),U=e("p",null,"并发是学习操作系统时会接触的概念，并不建议提前接触，请操作系统课程好好上，同时接触并发编程。",-1),X={href:"https://www.youtube.com/watch?v=IEEhzQoKtQU",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.youtube.com/watch?v=fKl2JW_qrso&t=279s",target:"_blank",rel:"noopener noreferrer"},Z=e("li",null,[e("s",null,"这就是python丰富的社区啊")],-1),$=e("h3",{id:"最好学一下的知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最好学一下的知识"},[e("span",null,"最好学一下的知识")])],-1),ee=e("p",null,[n("图示的第二层，灰色底色的圈是最好学一下的知识，分别是ML(machine learning), DL(deep learning), Torch, FT(Fine-tuning)"),e("br"),n(" 这部分知识是目前个人看来，在组内用不到的知识。但是学习这些知识对未来发展，对大模型认识都有帮助，所以若有余力可以学习。")],-1),ne=e("h4",{id:"ml-dl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ml-dl"},[e("span",null,"ML & DL")])],-1),le=e("p",null,"没有必要把机器学习和深度学习分得太开。二者在学习资源上很多都同时被涵盖。",-1),te={href:"https://speech.ee.ntu.edu.tw/~hylee/ml/2022-spring.php",target:"_blank",rel:"noopener noreferrer"},oe=e("li",null,"首推李宏毅老师的课程，课程资料丰富，课程录像，作业和ppt全部开源。老师真的能够将复杂的知识讲清楚，同时对课程十分负责。而且老师是个宝可梦迷和二次元爱好者，课程有趣充实。",-1),re=e("li",null,"课程网站有近几年李老师的授课内容，老师会根据热点修改课程教学方法，如近几年讲授生成式AI，真的强烈推荐。",-1),ae={href:"https://www.coursera.org/specializations/machine-learning-introduction",target:"_blank",rel:"noopener noreferrer"},ie=e("li",null,"课程可以免费观看，B站有翻译版本，但是部分作业不公开，需要付费。吴恩达老师是业界大牛，课程内容很干，老师讲的也很好。个人感觉有些散乱，略逊于李宏毅老师的课，但是课程涵盖的内容更多，有更多传统机器学习的内容。",-1),se=e("li",null,"课程作业可能可以通过其他方式得到(小声)",-1),he={href:"https://mitpressbookstore.mit.edu/book/9780262035613",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://book.douban.com/subject/26708119/",target:"_blank",rel:"noopener noreferrer"},ce=e("h4",{id:"torch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#torch"},[e("span",null,"Torch")])],-1),_e={href:"https://pytorch.org/docs/stable/index.html",target:"_blank",rel:"noopener noreferrer"},de={href:"https://www.youtube.com/watch?v=VbqNn20FoHM",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://www.youtube.com/watch?v=85uJ9hSaXig",target:"_blank",rel:"noopener noreferrer"},ge=e("h4",{id:"fine-tuning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fine-tuning"},[e("span",null,"Fine-tuning")])],-1),fe=e("br",null,null,-1),be={href:"https://arxiv.org/abs/2106.09685",target:"_blank",rel:"noopener noreferrer"},me=e("br",null,null,-1),ye={href:"https://www.youtube.com/results?search_query=LoRA",target:"_blank",rel:"noopener noreferrer"},we=e("h3",{id:"核心知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#核心知识"},[e("span",null,"核心知识")])],-1),ke=e("p",null,[n("图示中最内层，浅蓝色与蓝色底色的圈是组内AI模块的核心知识，分别是"),e("strong",null,"Prompt Engineering, Langchian, RAG(Retrieval Augmented Generation), LLMs, Agent, Diffusion Model"),e("br"),n(" 这部分知识发展十分迅速，很难真的提供可行的学习方法。实际使用时应该根据需求查找资料进行学习。")],-1),Ae=e("h4",{id:"prompt-engineering",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prompt-engineering"},[e("span",null,"Prompt Engineering")])],-1),Le=e("p",null,[n("prompt工程或提示词工程"),e("br"),n(" 就目前而言，可以通过一下资料学习")],-1),Pe={href:"https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/1/introduction",target:"_blank",rel:"noopener noreferrer"},Te=e("li",null,"deeplearning AI 推出的课程，网站提供代码示例和笔记本，能够实时修改和运行代码",-1),xe={href:"https://github.com/Emisaber/Some_material/blob/main/The%20Prompt%20Report-%20A%20Systematic%20Survey%20of%20Prompting%20Techniques.pdf",target:"_blank",rel:"noopener noreferrer"},ve=e("h4",{id:"langchain",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#langchain"},[e("span",null,"Langchain")])],-1),Me=e("p",null,[n("Langchain 是目前而言主流的大模型应用框架，但是Langchain本身存在一些过度抽象之类的问题。"),e("br"),n(" 不可否认它在科研领域也好在大模型应用上也好都已经占据了一席之地，所以有学习的必要，但是个人感觉，一方面学习曲线比较陡峭（使用不难，但是难懂），另一方面存在争议，可能会逐渐褪色。希望之后的同学根据之后的情况进行修改。"),e("br"),n(" 目前而言，Langchain的学习很大程度依赖于官方文档，因为它更新过快")],-1),Ce={href:"https://python.langchain.com/v0.2/docs/introduction/",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://github.com/kyrolabs/awesome-langchain",target:"_blank",rel:"noopener noreferrer"},je=e("h4",{id:"rag",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rag"},[e("span",null,"RAG")])],-1),De=e("p",null,[n("Retrieval Augmented Generation 检索增强生成"),e("br"),n(" RAG本是学术上的新兴方向，现在已经有了很多在实际应用中使用RAG的情况，但是尚未能找到合适的学习方法。")],-1),Ee={href:"https://arxiv.org/abs/2005.11401",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://python.langchain.com/v0.2/docs/tutorials/rag/#retrieval-and-generation",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v1/",target:"_blank",rel:"noopener noreferrer"},Ie=e("h4",{id:"llms",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#llms"},[e("span",null,"LLMs")])],-1),Se=e("p",null,"LLMs在这里泛指大模型相关的基本知识，包括大模型发展，大模型架构(Encoder+Decoder, Encoder-only, Decoder-only)，Transformer等知识。",-1),Ye=e("li",null,[n("大模型发展 "),e("ul",null,[e("li",null,"请关注各式微信公众号或常刷知乎")])],-1),ze={href:"https://speech.ee.ntu.edu.tw/~hylee/ml/2023-spring.php",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://www.youtube.com/watch?v=bQ5BoolX9Ag",target:"_blank",rel:"noopener noreferrer"},Qe={href:"https://www.youtube.com/watch?v=hYdO9CscNes",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://www.youtube.com/watch?v=gmsMY5kc-zw",target:"_blank",rel:"noopener noreferrer"},Be={href:"https://www.youtube.com/watch?v=n9TlOhRjYoc&t=61s",target:"_blank",rel:"noopener noreferrer"},He={href:"https://www.youtube.com/watch?v=N6aRv06iv2g&t=1574s",target:"_blank",rel:"noopener noreferrer"},Fe=e("h4",{id:"agent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#agent"},[e("span",null,"Agent")])],-1),qe=e("br",null,null,-1),Je=e("br",null,null,-1),Ke={href:"https://lilianweng.github.io/posts/2023-06-23-agent/",target:"_blank",rel:"noopener noreferrer"},Ue=e("br",null,null,-1),Xe={href:"https://python.langchain.com/v0.2/docs/how_to/#agents",target:"_blank",rel:"noopener noreferrer"},We={href:"https://docs.llamaindex.ai/en/stable/examples/agent/openai_forced_function_call/?h=agent",target:"_blank",rel:"noopener noreferrer"},Ze=e("h4",{id:"diffusion-model",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#diffusion-model"},[e("span",null,"Diffusion Model")])],-1),$e=e("p",null,[n("Diffusion Model 扩散模型"),e("br"),n(" 扩散模型是近来比较热门的生图模型，对于它的学习大抵分为两个部分")],-1),en=e("li",null,[n("提示词工程 "),e("ul",null,[e("li",null,"资料丰富，上网搜索便可得到大量的资料")])],-1),nn={href:"https://www.youtube.com/playlist?list=PLJV_el3uVTsNi7PgekEUFsyVllAJXRsP-",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://arxiv.org/abs/2006.11239",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://arxiv.org/abs/2112.10752",target:"_blank",rel:"noopener noreferrer"};function on(rn,an){const l=a("ExternalLinkIcon");return i(),s("div",null,[u,e("ul",null,[c,e("li",null,[n("语言的进阶部分 "),e("ul",null,[e("li",null,[n("《流畅的python》 "),e("ul",null,[e("li",null,[e("a",_,[n("Fluent Python"),t(l)]),n("和"),e("a",d,[n("流畅的 Python（第2版）"),t(l)])]),p])]),e("li",null,[n("官方文档 "),e("ul",null,[e("li",null,[e("a",g,[n("The Python Standard Library — Python 3.12.4 documentation"),t(l)]),f])])]),e("li",null,[n("Awesome-python "),e("ul",null,[e("li",null,[e("a",b,[n("GitHub - vinta/awesome-python: An opinionated list of awesome Python frameworks, libraries, software and resources."),t(l)])])])])])])]),m,y,w,e("ul",null,[e("li",null,[n("C "),e("ul",null,[e("li",null,[n("《C程序设计语言》 "),e("ul",null,[e("li",null,[e("a",k,[n("C程序设计语言 (Kernighan, Ritchie)"),t(l)])]),A])]),e("li",null,[n("《C Primer Plus 6th Edition》 "),e("ul",null,[e("li",null,[e("a",L,[n("C Primer Plus 6th Edition"),t(l)])]),P,T])])])]),e("li",null,[n("C++ "),e("ul",null,[e("li",null,[n("《C++ primer》 "),e("ul",null,[e("li",null,[e("a",x,[n("C++ Primer"),t(l)])]),v])])])])]),M,C,e("ul",null,[e("li",null,[n("基础学习 "),e("ul",null,[e("li",null,[n("《Python网络爬虫权威指南（第2版）》 "),e("ul",null,[e("li",null,[e("a",R,[n("Python网络爬虫权威指南（第 2 版）"),t(l)])]),j])]),e("li",null,[n("《Python 3网络爬虫开发实战》 "),e("ul",null,[e("li",null,[e("a",D,[n("Python 3网络爬虫开发实战"),t(l)])]),E])])])]),e("li",null,[n("进阶爬虫库学习 "),e("ul",null,[e("li",null,[n("awesome-python中"),e("a",N,[n("GitHub - vinta/awesome-python: An opinionated list of awesome Python frameworks, libraries, software and resources."),t(l)])])])])]),G,I,e("ul",null,[e("li",null,[n("数据处理 "),e("ul",null,[e("li",null,[n("《利用python进行数据分析》 "),e("ul",null,[e("li",null,[e("a",S,[n("Python for Data Analysis"),t(l)]),n("和"),e("a",Y,[n("利用Python进行数据分析 原书第2版"),t(l)])]),z])]),e("li",null,[n("Numpy官方文档 "),e("ul",null,[e("li",null,[e("a",O,[n("NumPy -"),t(l)])]),Q])]),e("li",null,[n("pandas官方文档 "),e("ul",null,[e("li",null,[e("a",V,[n("pandas - Python Data Analysis Library"),t(l)])]),B])])])]),e("li",null,[n("数据可视化 "),e("ul",null,[e("li",null,[n("matplotlib "),e("ul",null,[e("li",null,[e("a",H,[n("Matplotlib — Visualization with Python"),t(l)])]),F])]),e("li",null,[n("ECharts "),e("ul",null,[e("li",null,[e("a",q,[n("Apache ECharts"),t(l)])]),J])])])])]),K,U,e("ul",null,[e("li",null,[n("Python的并发编程基本入门 "),e("ul",null,[e("li",null,[e("a",X,[n("Python Threading Tutorial: Run Code Concurrently Using the Threading Module - YouTube"),t(l)])]),e("li",null,[e("a",W,[n("Python Multiprocessing Tutorial: Run Code in Parallel Using the Multiprocessing Module - YouTube"),t(l)])]),Z])])]),$,ee,ne,le,e("ul",null,[e("li",null,[n("李宏毅 - ML课程 "),e("ul",null,[e("li",null,[e("a",te,[n("ML 2022 Spring"),t(l)])]),oe,re])]),e("li",null,[n("吴恩达 - ML课程 "),e("ul",null,[e("li",null,[e("a",ae,[n("Machine Learning Specialization [3 courses] (Stanford) | Coursera"),t(l)])]),ie,se])]),e("li",null,[n("进阶的学习可以是书籍 "),e("ul",null,[e("li",null,[n("花书《Deep learning adaptive computation and machine learning》 "),e("ul",null,[e("li",null,[e("a",he,[n("Deep learning adaptive computation and machine learning"),t(l)])])])]),e("li",null,[n("西瓜书 《机器学习》 "),e("ul",null,[e("li",null,[e("a",ue,[n("机器学习 Machine Learning"),t(l)])])])])])])]),ce,e("p",null,[n("Torch的学习最好的方法就是官方文档"),e("a",_e,[n("PyTorch documentation — PyTorch 2.4 documentation"),t(l)]),n(" 如果不需要这么深入的学习，除了自行搜索广泛的互联网资料外，可以观看李宏毅老师助教对Torch的基本介绍")]),e("ul",null,[e("li",null,[e("a",de,[n("ML 2022 PyTorch Tutorial 2 - YouTube"),t(l)])]),e("li",null,[e("a",pe,[n("ML 2022 PyTorch Tutorial 1 - YouTube"),t(l)])])]),ge,e("p",null,[n("微调之所以出现在这里，是因为没有算力资源的情况下，大概微调无法出现在组内相关的比赛中。"),fe,n(" 写这份学习指南的时候，流行的微调方法是LoRA，关于LoRA的学习，有兴趣的同学可以仔细研究原论文"),e("a",be,[n("LoRA: Low-Rank Adaptation of Large Language Models"),t(l)]),me,n(" 或者通过一些简单介绍速成")]),e("ul",null,[e("li",null,[e("a",ye,[n("LoRA - YouTube"),t(l)]),n(" 实际使用时，大多是使用现成的脚本和库。")])]),we,ke,Ae,Le,e("ul",null,[e("li",null,[n("吴恩达与OpenAI的联合课程 "),e("ul",null,[e("li",null,[e("a",Pe,[n("DeepLearning.AI - ChatGPT Prompt Engineering for Developers"),t(l)])]),Te])]),e("li",null,[n("微软推出的prompt report "),e("ul",null,[e("li",null,[e("a",xe,[n("The Prompt Report- A Systematic Survey of Prompting Techniques.pdf"),t(l)])])])])]),ve,Me,e("ul",null,[e("li",null,[n("官方文档 "),e("ul",null,[e("li",null,[e("a",Ce,[n("Introduction | 🦜️🔗 LangChain"),t(l)])])])]),e("li",null,[n("一些项目 "),e("ul",null,[e("li",null,[e("a",Re,[n("GitHub - kyrolabs/awesome-langchain: 😎 Awesome list of tools and projects with the awesome LangChain framework"),t(l)])])])])]),je,De,e("ul",null,[e("li",null,[n("其初始论文"),e("a",Ee,[n("[2005.11401] Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"),t(l)])]),e("li",null,[n("值得一提的是，通过大模型应用框架能够搭建RAG "),e("ul",null,[e("li",null,[e("a",Ne,[n("Build a Retrieval Augmented Generation (RAG) App | 🦜️🔗 LangChain"),t(l)])]),e("li",null,[e("a",Ge,[n("GraphRAG Implementation with LlamaIndex - LlamaIndex"),t(l)])])])])]),Ie,Se,e("ul",null,[Ye,e("li",null,[n("大模型架构 "),e("ul",null,[e("li",null,[e("a",ze,[n("ML 2023 Spring"),t(l)])]),e("li",null,[e("a",Oe,[n("Decoder-Only Transformers, ChatGPTs specific Transformer, Clearly Explained!!!"),t(l)])])])]),e("li",null,[n("Transformer "),e("ul",null,[e("li",null,[e("a",Qe,[n("【機器學習2021】自注意力機制 (Self-attention) (上) - YouTube"),t(l)])]),e("li",null,[e("a",Ve,[n("【機器學習2021】自注意力機制 (Self-attention) (下) - YouTube"),t(l)])]),e("li",null,[e("a",Be,[n("【機器學習2021】Transformer (上) - YouTube"),t(l)])]),e("li",null,[e("a",He,[n("【機器學習2021】Transformer (下) - YouTube"),t(l)])])])])]),Fe,e("p",null,[n("Agent在这里指一种应用的实现思路"),qe,n(" 通过Agent(智能体)的方法，构建具备感知-决策-行动的大模型调用链。"),Je,n(" Agent同样是学术上的热门话题，简单了解Agent可以通过"),e("a",Ke,[n("LLM Powered Autonomous Agents | Lil'Log"),t(l)]),n(" 如有兴趣可以进一步研究博客中提到的论文"),Ue,n(" 同样的，大模型应用框架提供了agent的实现方法")]),e("ul",null,[e("li",null,[e("a",Xe,[n("How-to guides | 🦜️🔗 LangChain"),t(l)])]),e("li",null,[e("a",We,[n("OpenAI agent: specifying a forced function call - LlamaIndex"),t(l)]),n(" 只是个例子 Agent的定义，至少在这个名词在使用上十分广泛，实际使用请根据需要的功能查找可供参考的示例。")])]),Ze,$e,e("ul",null,[en,e("li",null,[n("算法 "),e("ul",null,[e("li",null,[e("a",nn,[n("Diffusion Model - YouTube"),t(l)]),n(" 进一步深入可以看Diffusion相关的论文，如"),e("a",ln,[n("DDPM"),t(l)]),n("， "),e("a",tn,[n("Latent Diffusion Models"),t(l)])])])])])])}const hn=r(h,[["render",on],["__file","xuexijianyi.html.vue"]]),un=JSON.parse('{"path":"/docs/ai/xuexijianyi.html","title":"人工智能学习建议","lang":"zh-CN","frontmatter":{"title":"人工智能学习建议","date":"2024/9/8","author":"saber"},"headers":[{"level":3,"title":"写在开头","slug":"写在开头","link":"#写在开头","children":[]},{"level":3,"title":"需要掌握的基础知识","slug":"需要掌握的基础知识","link":"#需要掌握的基础知识","children":[]},{"level":3,"title":"最好学一下的知识","slug":"最好学一下的知识","link":"#最好学一下的知识","children":[]},{"level":3,"title":"核心知识","slug":"核心知识","link":"#核心知识","children":[]}],"git":{"createdTime":1725789297000,"updatedTime":1726464398000,"contributors":[{"name":"saber","email":"wuyacwc@gmail.com","commits":3}]},"filePathRelative":"docs/ai/学习建议.md"}');export{hn as comp,un as data};
