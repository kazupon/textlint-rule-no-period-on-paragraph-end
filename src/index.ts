import type { TextlintRuleModule } from '@textlint/types'

interface Options {}

const PERIODS = ['.', '。'] as const

const report: TextlintRuleModule<Options> = (context, _options = {}) => {
  const { Syntax, RuleError, report, getSource, locator } = context
  return {
    [Syntax.Paragraph](node) {
      const text = getSource(node)
      const period = PERIODS.find(period => text.endsWith(period))
      if (period) {
        const targetRange = [text.length - 1, text.length] as const
        report(
          node,
          new RuleError('The paragraph has a period.', {
            padding: locator.range(targetRange)
          })
        )
      }
    }
  }
}

export default report
