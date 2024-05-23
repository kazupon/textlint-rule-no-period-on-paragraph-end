import TextLintTester from 'textlint-tester'
import rule from '../src/index'

const tester = new TextLintTester()

tester.run('no-period-on-paragraph-end', rule, {
  valid: [
    'This is simple paragraph',
    'This paragraph has multiple sentences. First sentence is here. And the last sentence is here',
    'これはシンプルな段落',
    'この段落には複数の文がある。これが最初、そしてこれが最後の文'
  ],
  invalid: [
    // simple paragraph
    {
      text: 'This is simple paragraph.',
      output: 'This is simple paragraph',
      errors: [
        {
          message: 'The paragraph has a period (".").',
          range: [24, 25]
        }
      ]
    },
    // multiple sentences in paragraph
    {
      text: 'This paragraph has multiple sentences. First sentence is here. And the last sentence is here.',
      output:
        'This paragraph has multiple sentences. First sentence is here. And the last sentence is here',
      errors: [
        {
          message: 'The paragraph has a period (".").',
          range: [92, 93]
        }
      ]
    },
    // simple paragraph in Japanese
    {
      text: 'これはシンプルな段落。',
      output: 'これはシンプルな段落',
      errors: [
        {
          message: 'The paragraph has a period ("。").',
          range: [10, 11]
        }
      ]
    },
    // multiple sentences in paragraph in Japanese
    {
      text: 'この段落には複数の文がある。これが最初、そしてこれが最後の文。',
      output: 'この段落には複数の文がある。これが最初、そしてこれが最後の文',
      errors: [
        {
          message: 'The paragraph has a period ("。").',
          range: [30, 31]
        }
      ]
    },
    // mixing English and Japanese
    {
      text: 'この段落には複数の文がある。First sentence is here. そしてこれが最後の文。',
      output:
        'この段落には複数の文がある。First sentence is here. そしてこれが最後の文',
      errors: [
        {
          message: 'The paragraph has a period ("。").',
          range: [48, 49]
        }
      ]
    }
  ]
})
