'use strict';

exports.__esModule = true;

exports.default = ({types: t}) => {
  return {
    visitor: {
      Identifier: ({ node }, {file}) => {
        if (node.name === 'h') file.set('hasHyperscript', true);
      },
      Program: {
        enter: (path, {file}) => {
          file.set('hasHyperscript', false);
        },
        exit: ({node, scope}, {file}) => {
          if (!(file.get('hasHyperscript') && !scope.hasBinding('h'))) return;
          const declaration = t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier('h'))],
            t.stringLiteral('react-hyperscript')
          );

          node.body.unshift(declaration);
        }
      }
    }
  };
};
