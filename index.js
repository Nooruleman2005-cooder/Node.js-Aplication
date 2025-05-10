const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/details', (req, res) => {
  res.render('details')
})

app.get('/search', (req, res) => {
  const query = req.query.q.toLocaleLowerCase();

  const topics = [
    {
      name: "html",
      title: "HTML5",
      image: "/img/download (2).png",
      description: "HTML (HyperText Markup Language) is the standard markup language used to create web pages. It structures content with elements like headings, paragraphs, links, and images."
    },
    {
      name: "css",
      title: "CSS3",
      image: "/img/download (3).png",
      description: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and layout design to make websites visually appealing."
    },
    {
      name: "javascript",
      title: "JavaScript",
      image: "/img/download (4).png",
      description: "JavaScript is a scripting language that enables dynamic content on web pages, including form validation, interactive maps, animations, and more."
    },
    {
      name: "bootstrap",
      title: "Bootstrap",
      image: "/img/download.jpg",
      description: "Bootstrap is a popular front-end framework that helps developers create responsive, mobile-first websites using pre-built HTML, CSS, and JavaScript components."
    },
    {
      name: "react",
      title: "React",
      image: "/img/images.png",
      description: "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update the user interface as data changes."
    },
    {
      name: "tailwind",
      title: "Tailwind CSS",
      image: "/img/download (1).jpg",
      description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs directly in your HTML."
    }
  ]

  const topic = topics.find(item => item.name.toLocaleLowerCase() === query)
  res.render('search', { topic })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
