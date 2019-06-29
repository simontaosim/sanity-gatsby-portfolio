export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1701790cd9aec840f23ae4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-f74ub3xi',
                  apiId: '6bdbef45-1f24-4f05-ba3c-d55d2586f135'
                },
                {
                  buildHookId: '5d170179b359da16b3a189c8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4r8nkneb',
                  apiId: 'b5aa70fb-c96c-496e-96d4-e4dbf1e88845'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simontaosim/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4r8nkneb.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
