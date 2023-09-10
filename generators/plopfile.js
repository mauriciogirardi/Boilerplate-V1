export default function (plop) {
  plop.setGenerator('components', {
    description: 'application components',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/stories/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      }
    ]
  })
}
