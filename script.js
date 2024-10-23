const para = document.querySelector(".para");
const ui = document.getElementById("img");
const un = document.querySelector(".username");
const uw = document.querySelector(".work");
const bi = document.querySelector(".background_Image");

const testinmonial = [
    {
        username: 'User_2',
        work: 'Front_End',
        image: './Images/cute pika.jpg',
        paragraph: 'As a front-end developer, I specialize in turning code into captivating user experiences, where design meets functionality to make the web come alive. I build responsive interfaces that engage and inspire, transforming ideas into seamless, interactive websites. My focus is on crafting pixel-perfect designs for a flawless user journey, bringing your vision to life with clean, efficient code. I’m passionate about making the web accessible and beautiful, one line of code at a time, and I strive to create intuitive and engaging digital experiences. By enhancing user interactions through innovative front-end solutions, I ensure that web experiences look great on any device.',            
    },
    {
        username: 'User_3',
        work: 'Back_End',
        image: './Images/image sketch.jpg',
        paragraph: 'A back-end web designer is the unsung hero of the digital world, crafting the invisible architecture that powers seamless user experiences. They transform complex data into elegant solutions, mastering the art of server-side magic to ensure that every click leads to a smooth journey. With a keen eye for logic and innovation, they build the robust systems that serve as the backbone of captivating front-end designs, ensuring that every website not only looks great but functions flawlessly.',        
    },
    {
        username: 'User_4',
        work:  'Full_Stack',
        image: './Images/Archer.jpg',
        paragraph: 'A full-stack developer is a versatile architect of the digital realm, seamlessly navigating both the front-end and back-end of web development. They possess a deep understanding of the entire web application stack, from crafting engaging user interfaces with HTML, CSS, and JavaScript to building robust server-side logic and managing databases. This hybrid skill set allows them to design and implement cohesive solutions, ensuring that every aspect of a web application works in harmony. With a knack for problem-solving and a passion for innovation, full-stack developers are the driving force behind creating dynamic, user-friendly experiences that bring ideas to life.',        
    },
    {
        username: 'User_5',
        work: 'Graphic_designer',
        image: './Images/Dr Strange.jpg',
        paragraph: 'A graphic designer is a visual storyteller, expertly blending creativity and communication to bring ideas to life through striking imagery and thoughtful layouts. They harness color, typography, and composition to create compelling designs that resonate with audiences and convey powerful messages. Whether working on branding, marketing materials, or digital content, graphic designers transform concepts into eye-catching visuals that capture attention and evoke emotion. With an understanding of both aesthetics and functionality, they play a crucial role in shaping the identity of a brand and enhancing user experiences across various mediums.',        
    },
    {
        username: 'User_6',
        work: 'Game_tester',
        image: './Images/man_gun_inhand.jpg',
        paragraph: 'A game tester is a meticulous detective of the digital realm, dedicated to uncovering bugs and enhancing the player experience before a game hits the market. They dive deep into gameplay, meticulously exploring every corner of virtual worlds to ensure that mechanics function flawlessly and narratives unfold seamlessly. With a keen eye for detail and a passion for gaming, they document issues, provide valuable feedback, and collaborate closely with developers to refine and polish the final product. By balancing critical analysis with a love for immersive storytelling, game testers play a vital role in delivering high-quality experiences that captivate players and elevate the gaming industry.',        
    },
    {
        username: 'User_7',
        work: 'Manager',
        image: './Images/Ghost rider.jpg',
        paragraph: 'A manager is a dynamic leader who orchestrates teams and resources to achieve organizational goals. They balance strategic vision with day-to-day operations, fostering a collaborative environment that encourages innovation and productivity. With strong communication skills and emotional intelligence, managers inspire and motivate their teams, ensuring everyone feels valued and aligned with the mission. They tackle challenges head-on, making informed decisions that drive growth while also nurturing individual development. In essence, a manager is the backbone of any organization, guiding teams toward success and fostering a culture of excellence.',        
    },
]

let index = 0;

const updateTestimonial = () =>{
    const { username, work, image, paragraph, background} = testinmonial[index];

    un.innerHTML = username;
    uw.innerHTML = work;
    ui.src = image;
    para.innerHTML = paragraph;
    index ++

    if(index > testinmonial.length-1){
        index = 0;
    }
}

setInterval(updateTestimonial, 5000)