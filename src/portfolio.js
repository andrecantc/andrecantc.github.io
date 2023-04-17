const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'AG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'André Gaudet',
  role: 'IT Student',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1e3S2iDVx9bjf_CCrA_rp0nFa8YclRCDL/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/andr%C3%A9-gaudet/',
    github: 'https://github.com/andrecantc',
  },
}
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'andre.gaudet.ag@gmail.com',
}

export { header, about,  skills, contact }
