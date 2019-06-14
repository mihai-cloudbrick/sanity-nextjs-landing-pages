export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d03dec24f1b65c6eac17611',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-77zcv2vg',
                  apiId: 'e9fa5b35-54a4-4230-a288-f42980b61ae5'
                },
                {
                  buildHookId: '5d03dec283c1f8f14189068e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rh6qdk2m',
                  apiId: '882e0b40-1daa-4027-a9c5-8452f462edab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mihai-cloudbrick/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rh6qdk2m.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
