---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/contributors/avi.jpeg',
    name: 'avilliai',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/avilliai' },
      { icon: 'linkedin', link: 'https://avilliai.github.io/' }
    ]
  },
    {
    avatar: '/contributors/lux.png',
    name: 'LUX-QAQ',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/lux-QAQ' },
      { icon: 'linkedin', link: 'https://luxmix.top/' }
    ]
  },
  {
    avatar: '/contributors/reiyutsuki.jpeg',
    name: 'reiyutsuki',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/reiyutsuki' }
    ]
  },
    {
    avatar: '/contributors/ColdWindScholar.jpeg',
    name: 'ColdWindScholar',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/ColdWindScholar' }
    ]
  },
  {
    avatar: '/contributors/man-shuo.jpeg',
    name: 'man-shuo',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/man-shuo' },
      { icon: 'linkedin', link: 'http://www.manshuo.ink/' }
    ]
  },
    {
    avatar: '/contributors/Creeper.jpeg',
    name: 'Creeper',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/Creeper666' }
    ]
  },
        {
    avatar: '/contributors/LittlebearHat.jpeg',
    name: 'LittlebearHat',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/LittlebearHat' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Contributors
    </template>
    <template #lead>
      Manyana 项目向以下开发者致谢。🎉
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

