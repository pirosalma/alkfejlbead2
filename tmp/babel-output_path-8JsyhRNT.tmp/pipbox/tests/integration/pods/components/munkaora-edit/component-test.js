import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('munkaora-edit', 'Integration | Component | munkaora edit', {
  integration: true
});

test('it renders', function (assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(Ember.HTMLBars.template((function () {
    return {
      meta: {
        'revision': 'Ember@1.13.7',
        'loc': {
          'source': null,
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 1,
            'column': 17
          }
        }
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment('');
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [['content', 'munkaora-edit', ['loc', [null, [1, 0], [1, 17]]]]],
      locals: [],
      templates: []
    };
  })()));

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 2,
              'column': 4
            },
            'end': {
              'line': 4,
              'column': 4
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('      template block text\n');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();

    return {
      meta: {
        'revision': 'Ember@1.13.7',
        'loc': {
          'source': null,
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 5,
            'column': 2
          }
        }
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode('\n');
        dom.appendChild(el0, el1);
        var el1 = dom.createComment('');
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode('  ');
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        return morphs;
      },
      statements: [['block', 'munkaora-edit', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
      locals: [],
      templates: [child0]
    };
  })()));

  assert.equal(this.$().text().trim(), 'template block text');
});