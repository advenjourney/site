module.exports = {
  lang: 'en-US',
  title: 'AdvenJourney',
  description: 'Just playing around.',

  themeConfig: {
    repo: 'advenjourney/site',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: 'c57105e511faa5558547599f120ceeba',
    //   indexName: 'vitepress'
    // },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      {
        text: 'Home',
        link: '/',
        activeMatch: '^/$'
      },
      { 
        text: 'Trips', 
        link: '/trips/', 
        activeMatch: '^/trips/' 
      },
      { 
        text: 'About Us', 
        link: '/about-us/', 
        activeMatch: '^/about-us/' 
      }
    ],

    sidebar: {
      '/about-us/': getAboutUsSidebar(),
      '/trips/': getTripsSidebar(),
      '/': getAboutUsSidebar()
    }
  }
}

function getTripsSidebar() {
  return [
    {
      text: 'Join a Trip',
      children: [
        { text: 'Europe', link: '/trips/places?dest=europe' },
        { text: 'Asia', link: '/trips/places?dest=asia' },
        { text: 'America', link: '/trips/places?dest=america' }
      ]
    },
    {
      text: 'Create a Trip',
      children: [
        { text: 'Getting Started', link: '/trips/create' },
        { text: 'Find people to join', link: '/trips/publish' }
      ]
    }
  ]
}

function getAboutUsSidebar() {
  return [
    {
      text: 'Mission',
      children: [
        { text: 'What is AdvenJourney?', link: '/about-us/' },
        { text: 'Getting Started', link: '/about-us/getting-started' }
      ]
    },
    {
      text: 'Community',
      children: [
        { text: 'Community', link: '/about-us/community' },
        { text: 'Host a trip', link: '/about-us/host-a-trip' },
        { text: 'Join Traveling', link: '/about-us/join-trip' }
      ]
    },
    {
      text: 'Team',
      children: [
        { text: 'How we Work', link: '/about-us/how-we-work' },
        { text: 'Product', link: '/about-us/product' },
        { text: 'Developers', link: '/about-us/developers' },
        { text: 'Trip Guides', link: '/about-us/guides' },
        { text: 'Contributers', link: '/about-us/contributers' }
      ]
    }
  ]
}
