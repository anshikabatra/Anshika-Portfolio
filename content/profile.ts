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
  role: 'Product Designer · AI-native product generalist',
  location: 'Delhi, India',
  availability: 'Open to Remote (Global)',
  email: 'anshikabatra99@gmail.com',
  phone: '+91 9136401501',
  linkedin: 'https://www.linkedin.com/in/anshika-batra-647b1b216/',

  statement: [
    [
      [{ text: 'Ambiguity is the ' }, { text: 'raw material', emphasis: true }, { text: ',' }],
      [{ text: 'structure is what I ship.' }],
    ],
    [
      [{ text: 'I build internal tools, platform products' }],
      [{ text: 'and ' }, { text: 'AI-powered workflows', emphasis: true }, { text: '.' }],
    ],
  ],

  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anshika-batra-647b1b216/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:anshikabatra99@gmail.com', icon: 'email' },
    { label: 'Phone', href: 'tel:+919136401501', icon: 'phone' },
  ],
}
