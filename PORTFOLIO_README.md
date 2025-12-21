# Hemanth Kumar Dachiraju - Portfolio Website

## 🎉 Portfolio Successfully Created!

Your portfolio website has been successfully built and is now live! The website features a modern, creative, and technical design that showcases your expertise as a Site Reliability Engineer and Full-Stack Developer.

## 🌐 Access Your Portfolio

**Live URL:** https://project-links.preview.emergentagent.com

## ✨ Features Included

### 1. **Hero Section**
- Eye-catching introduction with your name and title
- Call-to-action buttons to view work and get in touch
- Direct links to GitHub, LinkedIn, and Email

### 2. **About Section**
- Detailed biography highlighting your journey
- Four highlight cards showcasing your expertise:
  - Full-Stack Development
  - Site Reliability Engineering
  - Cloud Computing (Azure)
  - Problem-Solving Skills

### 3. **Experience Section**
- Timeline view of your three roles at Accenture:
  - Site Reliability Engineer (March 2024 – August 2024)
  - Network Operations Advisor (July 2023 – February 2024)
  - Application Developer (January 2023 – July 2023)
- Detailed responsibilities for each role

### 4. **Projects Section**
Two featured projects with:
- **Certificate Verification Using Blockchain** (Award Winner 🏆)
  - GitHub Link: https://github.com/hdachiraju/certificate-verification-blockchain
  - Technologies: MEAN Stack, Blockchain, Web3
  
- **Car Sales and Rentals Platform**
  - GitHub Link: https://github.com/hdachiraju/car-sales-rentals
  - Technologies: MEAN Stack, Bootstrap, RESTful API

### 5. **Skills Section**
Organized by categories:
- Programming Languages
- Web Development
- Databases
- Cloud & DevOps
- Tools & Technologies
- Site Reliability & Security

### 6. **Education Section**
- Master of Science at University of Alabama at Birmingham (Current)
- Bachelor of Technology from MLR Institute of Technology

### 7. **Certifications**
- Microsoft Azure Fundamentals (AZ-900)
- Security, Compliance, and Identity Fundamentals (SC-900)

### 8. **Contact Section**
- Contact information cards (Email, Phone, LinkedIn, GitHub)
- Functional contact form that opens your email client
- Current location information

### 9. **Responsive Design**
- Fully responsive across all devices
- Mobile-friendly navigation
- Smooth scrolling and animations

## 🎨 Design Features

- **Color Scheme**: Dark theme with cyan/blue accents for a technical, modern look
- **Typography**: Clean, professional fonts with clear hierarchy
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Focus states and proper contrast ratios

## 📝 Important: Update GitHub Links

The portfolio currently includes **placeholder GitHub repository links** for your projects:

1. **Certificate Verification Blockchain**
   - Placeholder: `https://github.com/hdachiraju/certificate-verification-blockchain`
   
2. **Car Sales and Rentals**
   - Placeholder: `https://github.com/hdachiraju/car-sales-rentals`

### How to Update:

When you push your actual project code to GitHub, simply update the links in:
- **File**: `/app/frontend/src/components/Projects.jsx`
- **Lines**: Look for the `github:` property in each project object

**Example:**
```javascript
{
  title: 'Certificate Verification and Validation Using Blockchain',
  // ... other properties
  github: 'https://github.com/hdachiraju/YOUR-ACTUAL-REPO-NAME',
  // ... rest of the config
}
```

## 🛠️ Technology Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Routing**: React Router v7

## 📱 Contact Information Included

- **Email**: hdachiraju@gmail.com
- **Phone**: +1 (659) 253-8760
- **LinkedIn**: https://www.linkedin.com/in/hemanth-kumar-dachiraju-bb6a75184
- **GitHub**: https://github.com/hdachiraju

## 🚀 Next Steps

1. **View Your Portfolio**: Visit the live URL to see your portfolio
2. **Upload Your Projects**: Push your actual project code to GitHub
3. **Update GitHub Links**: Modify the links in Projects.jsx
4. **Share Your Portfolio**: Start sharing your portfolio URL with potential employers!

## 📂 File Structure

```
/app/frontend/src/
├── App.js                    # Main app component
├── App.css                   # Global styles and animations
├── pages/
│   └── Portfolio.jsx         # Main portfolio page
└── components/
    ├── Header.jsx            # Navigation header
    ├── Hero.jsx              # Hero section
    ├── About.jsx             # About section
    ├── Experience.jsx        # Work experience
    ├── Projects.jsx          # Featured projects ⚠️ UPDATE GITHUB LINKS HERE
    ├── Skills.jsx            # Skills and certifications
    ├── Education.jsx         # Education background
    ├── Contact.jsx           # Contact form and info
    └── Footer.jsx            # Footer section
```

## 💡 Tips

- The contact form uses `mailto:` to open your default email client
- All external links open in new tabs
- Smooth scroll navigation from the header
- Hover effects on all interactive elements

---

**Built with ❤️ using React and Tailwind CSS**
