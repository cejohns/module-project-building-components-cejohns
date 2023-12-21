function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
     // Create a nav element
     const navElement = document.createElement('nav');

     // Create an anchor element for each link in the array
     links.forEach(linkData => {
         const { href, textContent, title } = linkData;
 
         // Create an anchor element
         const aElement = document.createElement('a');
 
         // Set attributes for the anchor element
         aElement.href = href;
         aElement.textContent = textContent;
         aElement.title = title;
 
         // Append the anchor element to the nav element
         navElement.appendChild(aElement);
     });
 
     // Return the created nav element
     return navElement;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const card = document.createElement('div');
    card.classList.add('learner-card');
   
    const nameParagraph = document.createElement('p');
  nameParagraph.textContent = learner.fullName;

  const idParagraph = document.createElement('p');
  idParagraph.textContent = `Learner ID: ${learner.id}`;

  const dobParagraph = document.createElement('p');
  dobParagraph.textContent = `Date of Birth: ${learner.dateOfBirth}`;

  const favLanguage = languages.find(language => language.id === learner.favLanguage);
  const languageParagraph = document.createElement('p');
  languageParagraph.textContent = `Favorite Language: ${favLanguage.name}`;

  [nameParagraph,idParagraph, dobParagraph, languageParagraph].forEach(p => {
    card.appendChild(p)
  })

  card.addEventListener('click', () =>{
    // Adds the class name 'active' to the clicked div.learner-card
    card.classList.toggle('active', true);

     document.querySelectorAll('.learner-card').forEach(card => {
      card.classList.remove('active');
     })
     card.classList.add('active');
  })

    return card
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
       learners.forEach(learner => {
       const leanersCard = buildLearnerCard(learner, languages)
        document.querySelector('section').appendChild(leanersCard)
       });
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
     // Create footer element
  const footer = document.createElement('footer');

  // Create company info div
  const companyInfoDiv = document.createElement('div');
  companyInfoDiv.classList.add('company-info');

  // Add company name
  const companyName = document.createElement('p');
  companyName.classList.add('company-name');
  companyName.textContent = footerData.companyName;
  companyInfoDiv.appendChild(companyName);

   // Add address
   const address = document.createElement('p');
   address.classList.add('address');
   address.textContent = footerData.address;
   companyInfoDiv.appendChild(address);

  // Add contact email with mailto link
  const contactEmail = document.createElement('p');
  contactEmail.classList.add('contact-email');
  contactEmail.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}">${footerData.contactEmail}</a>`;
  companyInfoDiv.appendChild(contactEmail);

 // Add company info div to footer
    footer.appendChild(companyInfoDiv);

    // Create social media div
  const socialMediaDiv = document.createElement('div');
  socialMediaDiv.classList.add('social-media');

   // Add social media links
   for (const [platform, link] of Object.entries(footerData.socialMedia)) {
    const socialMediaLink = document.createElement('a');
    socialMediaLink.href = link;
    socialMediaLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1); // Capitalize first letter
    socialMediaDiv.appendChild(socialMediaLink);
  }

  // Add social media div to footer
  footer.appendChild(socialMediaDiv);

  // Add copyright notice
  const copyrightNotice = document.createElement('div');
  copyrightNotice.textContent = `© ${footerData.companyName.toUpperCase()} ${new Date().getFullYear()}`;
  footer.appendChild(copyrightNotice);


  return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  document.querySelector('section').addEventListener('click', act =>{
    if (act.target === document.querySelector('section')) {
      document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove('active');
       })
      
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()