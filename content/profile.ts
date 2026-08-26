import type { Profile } from './types'

/**
 * Every field is grounded in the source résumé. URLs were recovered from the
 * PDF's own link annotations rather than guessed.
 *
 * The hero statement re-voices the résumé's INTRODUCTION paragraph for display
 * type — same claims, shaped into lines.
 */
export const profile: Profile = {
  name: 'Anshika Batra',
  role: 'Product - Zomato, Masters - IIM Indore x IIT Indore',
  location: 'Delhi, India',
  availability: 'Open to Remote (Global)',
  email: 'anshikabatra99@gmail.com',
  phone: '+91 9136401501',
  linkedin: 'https://www.linkedin.com/in/anshika-batra-647b1b216/',

  statement: [
    [
      [{ text: 'I like technology for what it makes ' }, { text: 'possible.', emphasis: true }],
      [{ text: 'I like ' }, { text: 'design', emphasis: true }, { text: ' for what it makes understandable.' }],
    ],
    [
      [{ text: 'I work somewhere in ' }, { text: 'between.', emphasis: true }],
    ],
  ],

  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anshika-batra-647b1b216/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:anshikabatra99@gmail.com', icon: 'email' },
  ],
}
