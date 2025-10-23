AOS.init({
  duration: 1000,
  once: true,
});

const links = document.querySelectorAll(".nav-links a");
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

window.addEventListener("scroll", () => {
  const body = document.body;
  if (window.scrollY > 50) body.classList.add("scrolled");
  else body.classList.remove("scrolled");
});
// TEAM MODAL LOGIC
const modal = document.getElementById("teamModal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalRole = document.getElementById("modal-role");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");

const teamData = {
  rajesh: {
    name: "Rajesh Jaiswal",
    role: "",
    img: "https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_face,z_0.7,b_white,q_auto:eco,dpr_2/z5a3glh0fpntfwrdxea5?ik-sanitizeSvg=true",
    desc: "Rajesh heads the business development at Oral Spring, focusing on fostering collaboration and business growth. Currently serving as the Executive Director at the Northern Alberta Business Incubator (NABI), Rajesh brings in more than a decade long experience in scientific research, innovation and business management and leadership. ",
  },
  abhilash: {
    name: "Abhilash Hareendranathan",
    role: "",
    img: "https://oamrs.org/images/Headshots/Abhilash-Rakkunedeth-Hareendranathan%20headshot.png",
    desc: "Abhilash is an Assistant Professor in the Faculty of Medicine & Dentistry - Radiology & Diagnostic Imaging Dept. at the University of Alberta. He heads the research and development at Oral Spring. With an expertise in artificial intelligence (AI), medical image analysis and ultrasound imaging, Abhilash aims to add innovative, state of the art technology to the platform. ",
  },
  pallavi: {
    name: "Pallavi Ratra",
    role: "",
    img: "https://i.postimg.cc/Mpdj96k7/Screenshot-2025-10-23-234628.png",
    desc: "Pallavi leads the marketing initiatives at Oral Spring. She brings in a wealth of experience in peoples management, cross functional leadership and data driven strategies. She will head the promotion of Oral Spring’s products and drive awareness initiatives",
  },

  shammy: {
    name: "Shammy Raj",
    role: "",
    img: "https://i.postimg.cc/QM7hHmqQ/Screenshot-2025-10-24-000252.png",
    desc: "Shammy is the Product Lead at the Oral Spring. With extensive experience in biomedical innovation and a passion for innovative healthcare technologies, Shammy drives feature identification, market validation and product development. ",
  },

  sushant: {
    name: "Sushant Ambastha",
    role: "",
    img: "https://i.postimg.cc/sxqTQYmD/Screenshot-2025-10-24-000508.png",
    desc: "Sushant is the creative force behind the OralSpring app. He is a web developer intern at Oral Spring.",
  },
};

// Open modal on card click
document.querySelectorAll(".team-card").forEach((card) => {
  card.addEventListener("click", () => {
    const member = teamData[card.dataset.name];
    modalImg.src = member.img;
    modalName.textContent = member.name;
    modalRole.textContent = member.role;
    modalDesc.textContent = member.desc;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
