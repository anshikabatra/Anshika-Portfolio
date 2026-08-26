import type { Metadata } from 'next'

import { VipCaseStudy } from '@/components/VipCaseStudy'

export const metadata: Metadata = {
  title: 'VIP Mode - Skip the Queue',
  description: 'A Zomato product design case study by Anshika Batra.',
  alternates: { canonical: '/projects/vip-mode' },
}

export default function VipModeCaseStudyPage() {
  return <VipCaseStudy />
}
