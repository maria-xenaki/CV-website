import { FaLink } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";


export const skills= [

    {
      skill: 'React JS',
      level:'Intermediate',   
      percentage:'60'
    },
    {
        skill: 'HTML/CSS', 
        level:'Intermediate', 
        percentage:'60' 
      },
      {
        skill: 'Javascript', 
        level:'Beginner', 
        percentage:'20'
      },
      {
        skill: 'Angular JS', 
        level:'Beginner', 
        percentage:'20' 
      },
    {
        skill: 'Python', 
        level:'Beginner', 
        percentage:'20'
      },
    
      {
        skill: 'Express- Node.js',  
        level:'Beginner', 
        proficiency: '1/5',
        percentage:'20'
      },
      {
        skill: 'Java',  
        level:'Beginner', 
        proficiency: '1/5',
        percentage:'20'
      }
    ]
export const softSkills= [

  {
    sskill: 'problem solving',   
    emoji: "\u{2699}", 
  },
  {
      sskill: 'working under pressure',   
      emoji: "\u{1F525}", 
    },
    {
      sskill: 'teamwork',   
      emoji:  "\u{1F91D}",
    },
    {
      sskill: 'creativity',  
      emoji:  "\u{1F4A1}" 
    },
    {
      sskill: 'communication',  
      emoji:  "\u{1F4AC}"  
    }
]
export const unis= [

  {
    dates: '09/2007 - 10/2008',
    title:'MSc Strategic Entrepreneurship',
    university: 'University of Southampton'
  },
  { 
    dates: '09/2000 - 07/2005',
    title:'Economics',
    university: 'University of Piraeus'
  }
]

export const languages= [

  {
    language: 'English',
    level:'Fluent',
    percentage: '100',
    
  },
  {
      language: 'Greek',
      level: 'Native',
      percentage: '100',
      
    },
    {
      language: 'French',
      level:'Good',
      percentage: '60',
      
    },
    {
      language: 'Spanish',
      level:'Intermediate ',
      percentage: '40',
      
    },
    {
      language: 'German',
      level:'Basic',
      percentage: '20',
      
    },
]

export const certifications= [

    {
      link: 'https://www.startproject.gr/school-of-code/',
      title:'START School of Code: Front End Developer Bootcamp' ,
      institution: 'Social Innov',
      icon: <FaLink/>,
      file:<FaRegFile/>,
      cert:'/ssoc_xenaki.pdf'
      //'https://www.eventora.com/el/Ticket/PrintOrderTemplatePdf?templateType=3&orderId=ASEUQOJBWT&useBackGround=1'
    },
    {
        link: 'https://colmooc.gunet.gr/info/?course=COLMOOC118',
        title:'Python Programming for non-Programmers',
        institution: 'colMOOC- AUTh',
        icon:<FaLink/>,
        file:<FaRegFile/>,
        cert:'/colmooc_xenaki.pdf'
        //cert:'https://www.eventora.com/el/Ticket/PrintOrderTemplatePdf?templateType=3&orderId=ASEUQOJBWT&useBackGround=1'
      },
      {
        link: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
        title:'Scientific Computing with Python',
        institution: 'freeCodeCamp',
        icon:<FaLink/>
      },
      
      {
        link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
        title:'Responsive Web Design',
        institution: 'freeCodeCamp',
        icon:<FaLink/>,
        file:<FaRegFile/>,
        cert:'freeCodeCamp_Responsive_web_design_xenaki.pdf'
      },

      // {
      //   link: 'https://olympus.mygreatlearning.com/courses/12385',
      //   title:'Java Programming' ,
      //   institution: 'Great Learning',
      //   icon: <FaLink/>
      // }

      {
        link: '',
        title:'Α1, Α2, Β1, Β Professional Certifications on Investment Services',
        institution: 'Bank of Greece',
        icon:''
      },
      {
        link: '',
        title:'Professional Certification on Insurance Services',
        institution: 'Bank of Greece',
        icon:''
      },
  ]

export const works= [

  {
    dates: '01/2023 - 12/2023',
    department:'Business Banking',
    title:' | Head of Department',
    employer: 'National Bank of Greece S.A.',
    branch:'Ano Ilisia branch',
    tasks:'task 1'
  },
  {
      dates: '04/2022 - 12/2022',
      department:'Business Banking',
      title:' | Assistant Manager',
      employer: 'National Bank of Greece S.A.',
      branch:'Ano Ilisia branch',
      tasks:'task 2'
    },
    {
      dates: '07/2018 - 10/2020',
      department:'Business Banking',
      title:' | Head of Department',
      employer: 'National Bank of Greece S.A.',
      branch:'Ano Ilisia branch',
      tasks:'task 3'
    },
    {
      dates: '12/2014 - 07/2018',
      department:'Business Banking',
      title:'',
      employer: 'National Bank of Greece S.A.',
      branch:'Angelopoulou branch',
      tasks:'task 4'
    },
    {
      dates: '07/2010 - 12/2014',
      department:'Premium Banking',
      title:' | Head of Department',
      employer: 'National Bank of Greece S.A.',
      branch:'Angelopoulou branch',
      tasks:'task 5'
    },
    
    // {
    //   dates: '10/2007 - 09/2008',
    //   department:'Postgraduate studies',
    //   title:'',
    //   employer: '',
    //   branch:''
    // },
    {
      dates: '11/2002 - 07/2010',
      department:'Deposits Department',
      title:'',
      employer: 'National Bank of Greece S.A.',
      branch:'Victoria Sq. branch',
      tasks:'task 6'
    }
     ]
